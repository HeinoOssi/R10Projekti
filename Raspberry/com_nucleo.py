import serial
import mysql.connector

def add_to_database(temp, date):
    mydb = mysql.connector.connect(
        host="localhost",
        user="username",
        password="password",
        database="dbname"
    )
    mycursor = mydb.cursor().
    sql = "INSERT INTO projekti VALUES (NULL, %s, %s)"
    val = (temp, date)
    mycursor.execute(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "inserted")  

def main():
    # Check whats your port and update the line
    ser = serial.Serial('/dev/ttyUSB1', 9600)
    s = [0]
    while True:
        read_serial = ser.readline()
        s[0] = str(int (ser.readline(), 16))
        print(s[0])
        print(read_serial)

if __name__ == '__main__':
    main()