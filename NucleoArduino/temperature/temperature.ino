char dataString[50] = {0};
int a = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  a++;
  sprintf(dataString, "%02X", a); // value2hex
  Serial.println(dataString);   // send line
  delay(1000);
}
