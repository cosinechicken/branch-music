from contextlib import closing
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
    SAMPLE_RATE = 44100
    INPUT_FILE = "C:/Users/brand/Documents/GitHub/branch-music/Music/" + INPUT_FILE_NAME

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
        audioRMS[i] = 20*np.log10(np.sqrt(temp))

    np.set_printoptions(threshold=sys.maxsize)
    audioRMS = np.maximum(audioRMS, 30)

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
    with open("volume_data.txt", 'a') as file:
        file.write("\t\"" + INPUT_FILE_NAME[:-4] + "\": \"" + str(np.around(np.mean(audioRMS), decimals=2)) + "\",\n")

    second = len(audioRMS) / frameRate
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
    with open("length_data.txt", 'a') as file:
        file.write("\t\"" + INPUT_FILE_NAME[:-4] + "\": \"" + max_time_str + "\",\n")
    # print("Loudest volume: " + str(np.max(audioRMS)))
    # print("Loudest time: " + max_time_str)
    deletePath(TEMP_FOLDER)  # Delete everything in TEMP_FOLDER

directory = os.fsencode("C:/Users/brand/Documents/GitHub/branch-music/Music/")

with open("volume_data.txt", 'w') as file:
    file.write("")
with open("length_data.txt", 'w') as file:
    file.write("")

total = 0
for file in os.listdir(directory):
    total += 1

count = 0
for file in os.listdir(directory):
    count += 1
    filename = os.fsdecode(file)
    print("(" + str(count) + "/" + str(total) + ") Processing: " + filename)
    process_file(filename)

