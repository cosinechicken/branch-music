import argparse
import ffmpeg

def parse_time(time_str):
    """Convert time string mm:ss.s to seconds"""
    minutes, seconds = map(float, time_str.split(':'))
    return minutes * 60 + seconds

def trim_video(input_file, start_time, end_time, output_file):
    (
        ffmpeg
        .input(input_file, ss=start_time, t=end_time - start_time)
        .output(output_file, c='copy')
        .run(overwrite_output=True)
    )

def main():
    parser = argparse.ArgumentParser(description='Trim a video file.')
    parser.add_argument('input_file', help='Input text file name')
    
    args = parser.parse_args()
    
    with open(args.input_file, 'r', encoding='utf-8') as file:
        lines = file.read().strip().split('\n')
    
    input_file = lines[0].strip().strip('"')
    start_time = parse_time(lines[1].strip())
    end_time = parse_time(lines[2].strip())
    output_file = "C:\\Users\\brand\\Downloads\\temp\\" + lines[3].strip() + ".mp4"

    trim_video(input_file, start_time, end_time, output_file)
    print(f"FINISHED TRIMMING {output_file}")

if __name__ == '__main__':
    main()
