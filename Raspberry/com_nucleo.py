import serial
import datetime
import time
import requests

def update_database(temp, date):
    URL = "http://192.168.0.11:3000/api/post"
    print("Ok")
    data = {"temperature":temp, "date":date}
    r = requests.post(url = URL, data = data)
    print("Temperature " + temp + " posted to database on " + date)
    time.sleep(60)    

if __name__ == '__main__':
    seri = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
    seri.flush()
    # Edit this to choose a minute to send data to the database
    m = 42

    while True:
        today = datetime.datetime.now()
        if seri.in_waiting > 0:
            line = seri.readline().decode('utf-8').rstrip()
            d2 = today.strftime("%Y-%m-%d")
            if today.minute == m:
                update_database(line, d2)

