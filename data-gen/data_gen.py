from contextlib import closing
from unicodedata import category, name
from PIL import Image, ImageFont, ImageDraw
import subprocess
from audiotsm import phasevocoder
from audiotsm.io.wav import WavReader, WavWriter
from numpy import dtype
from scipy.io import wavfile
import numpy as np
import re
import math
from shutil import copyfile, rmtree
import os
import argparse
from datetime import datetime
import sys
import cv2

# Returns largest absolute value of any element in s (not necessarily 1D array)
def getMaxVolume(s):
    maxv = float(np.max(s))
    minv = float(np.min(s))
    return max(maxv,-minv)

def createPath(s):  
    #assert (not os.path.exists(s)), "The filepath "+s+" already exists. Don't want to overwrite it. Aborting."
    try:
        os.mkdir(s)
    except OSError:
        # assert False, "Creation of the directory %s failed. (The TEMP folder may already exist. Delete or rename it, and try again.)"
        deletePath(s)
        try:
            os.mkdir(s)
        except OSError:
            assert False, "CreatePath failed twice in a row"

def deletePath(s): # Dangerous! Watch out!
    try:
        rmtree(s,ignore_errors=False)
    except OSError:
        print ("Deletion of the directory %s failed" % s)
        print(OSError)

def process_file(INPUT_FILE_NAME):
    length_str = ""
    volume_str = ""
    SAMPLE_RATE = 44100
    INPUT_FILE = os.path.join(directory, INPUT_FILE_NAME)

    video = cv2.VideoCapture(INPUT_FILE)
    frameRate = video.get(cv2.CAP_PROP_FPS)

    # Path name: C:\Users\brand\TEMP
    TEMP_FOLDER = "C:/Users/brand/TEMP"

    createPath(TEMP_FOLDER)

    # copy the audio into a wav file
    command = "ffmpeg -i \""+INPUT_FILE+"\" -ab 160k -ac 2 -ar "+str(SAMPLE_RATE)+" -vn "+TEMP_FOLDER+"/audio.wav -loglevel quiet"

    subprocess.call(command, shell=True)

    # sampleRate: int, number of times per second the audio is sampled (44100)
    # audioData: numpy array of int16's (116134912 samples, 2 channels)
    sampleRate, audioData = wavfile.read(TEMP_FOLDER+"/audio.wav")
    # Print data about sampleRate and audioData
    # print("AudioData shape: " + str(audioData.shape))   # (116134912, 2)

    ###
    audioSampleCount = audioData.shape[0]           # number of samples or "audio-frames" (116134912)
    samplesPerFrame = sampleRate/frameRate          # number of times the audio is sampled per frame of the video at 30 frames per second (1470.0)
    audioFrameCount = int(math.ceil(audioSampleCount/samplesPerFrame))      # Approximately number of frames in the video (79004)

    audioRMS = np.zeros((audioFrameCount))

    # Iterate through each video-frame
    for i in range(audioFrameCount):
        start = int(i*samplesPerFrame)                              # Start audio-frame of video-frame i
        end = min(int((i+1)*samplesPerFrame), audioSampleCount)     # End audio-frame of video-frame i
        audiochunks = audioData[start:end].astype(float)            # Array of audio from start to end audio-frame of video-frame i
        temp = np.mean(np.square(audiochunks))
        temp = np.maximum(temp, 1)  
        audioRMS[i] = np.sqrt(temp)

    np.set_printoptions(threshold=sys.maxsize)
    audioRMS = np.maximum(audioRMS, 40)
    volume = 20*np.log10(np.sqrt(np.mean(audioRMS**2)))

    maxAudioVolume = getMaxVolume(audioData)
    print(maxAudioVolume)

    """
    second = np.argmax(audioRMS) / frameRate
    minute = int(second/60)
    second -= minute * 60
    num_digits = 2
    second = int(second * (10**num_digits))/(10**num_digits)
    secondStr = str(second)
    if second < 10:
        secondStr = "0" + secondStr
    max_time_str = str(minute) + ":" + secondStr
    with open("volume_data.txt", 'a') as file:
        file.write(INPUT_FILE_NAME + ": " + str(np.max(audioRMS)) + ", " + max_time_str + "\n")
    """
    volume_str += ("\t\"" + INPUT_FILE_NAME[:-4] + "\": \"" + str(np.around(volume, decimals=2)) + "\",\n")

    second = len(audioRMS) / frameRate
    total_length[0] += second
    minute = int(second / 60)
    second -= minute * 60
    second = int(second)
    second_str = str(second)
    minute_str = str(minute)
    if second < 10:
        second_str = "0" + second_str
    if minute < 10:
        minute_str = "0" + minute_str
    max_time_str = minute_str + ":" + second_str
    length_str += ("\t\"" + INPUT_FILE_NAME[:-4] + "\": \"" + max_time_str + "\",\n")
    # print("Loudest volume: " + str(np.max(audioRMS)))
    # print("Loudest time: " + max_time_str)
    deletePath(TEMP_FOLDER)  # Delete everything in TEMP_FOLDER
    return volume_str, length_str

directory = "C:/Users/brand/Documents/GitHub/branch-music/Music"

total = 0
total_length = [0]
for file in os.listdir(directory):
    total += 1

# get the name and id string of the data file
names_and_ids = ""
names = {}
with open("data-gen/raw_data.txt", 'r') as file:
    for line in file:
        names_and_ids += ("\t" + line)
        name = line.split(": ")[1].split(", ")[0]
        id = int(line.split(": ")[0][1:5])
        names[id] = name

count = 0
volume_str = ""
length_str = ""

# for every video in the music folder compute the volume and length and build up the string
for file in os.listdir(directory):
    count += 1
    filename = os.fsdecode(file)
    print("(" + str(count) + "/" + str(total) + ") Processing: " + filename)
    temp_volume_str, temp_length_str = process_file(filename)
    volume_str += temp_volume_str
    length_str += temp_length_str

with open("data.js", 'w') as file:
    file.write("// A data file containing a dictionary sending IDs to song titles. \n// IDs are 4 digits, where first digit corresponds to type (e.g. classical, anime, etc.)\n")
    file.write("var dict = {\n")
    file.write(names_and_ids + "\n")
    file.write("};\n\n")
    file.write("var categories = {\n")
    for id in names:
        name = names[id]
        category_str = "\t"
        if id >= 1000 and id < 2000:
            category_str += (name + ": \"Anime\",\n" )
        elif id < 1000:
            category_str += (name + ": \"Classical\",\n" )
        else:
            category_str += (name + ": \"K-pop\",\n" )
        file.write(category_str)
    file.write("};\n\n")
    file.write("var volume = {\n")
    file.write(volume_str + "\n")
    file.write("};\n\n")
    file.write("var length = {\n")
    file.write(length_str + "\n")
    file.write("};\n\n")
    file.write("var infoList = []\n")
    file.write("var catInfoList = []\n")
    file.write("for (const [key, value] of Object.entries(dict)) {\n")
    file.write("\tinfoList.push([key, value, categories[value], volume[value], length[value]]);\n")
    file.write("\t// Default to classical\n")
    file.write("\tif (categories[value] == \"Classical\") {\n")
    file.write("\t\tcatInfoList.push([key, value, categories[value], volume[value], length[value]]);\n")
    file.write("\t}\n")
    file.write("}\n")
    file.write("\n")
    file.write("var totalLength = " + str(total_length[0]) + "\n")


