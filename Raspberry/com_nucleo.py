import serial

def open_serial_port:
    try:
        nucleo = serial.Serial("/dev/ttyUSB0",timeout = 1)
    except:
        print("Check the port")
    
    rawdata=[]
    count=0

    while count < 3:
        rawdata.append(str(nucleo.readline()))
        count +=1
        