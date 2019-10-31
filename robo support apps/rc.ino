#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "moto";
const char* password = "00000000";

int rightmotor1=5;
int rightmotor2=4;
int leftmotor1=13;
int leftmotor2=15;
#define EN1 14
#define EN2 12

void setup() 
{
 pinMode(rightmotor1,OUTPUT);
 pinMode(leftmotor1,OUTPUT);
 pinMode(rightmotor2,OUTPUT);
 pinMode(leftmotor2,OUTPUT);
  pinMode(EN2,OUTPUT);
 pinMode(EN2,OUTPUT);

  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) 
  {
    delay(1000);
    Serial.println("Connecting...");
  }
  Serial.println("connected");
}
void left(){
  digitalWrite(rightmotor1,1);
  digitalWrite(rightmotor2,0);
  digitalWrite(leftmotor1,1);
  digitalWrite(leftmotor2,0);
}
void right(){
  digitalWrite(rightmotor1,0);
  digitalWrite(rightmotor2,1);
  digitalWrite(leftmotor1,0);
  digitalWrite(leftmotor2,1);
}

void leftad(){
  digitalWrite(rightmotor1,1);
  digitalWrite(rightmotor2,0);
  digitalWrite(leftmotor1,0);
  digitalWrite(leftmotor2,0);
}
void rightad(){
  digitalWrite(rightmotor1,0);
  digitalWrite(rightmotor2,0);
  digitalWrite(leftmotor1,0);
  digitalWrite(leftmotor2,1);
}

void front(){
  digitalWrite(rightmotor1,1);
  digitalWrite(rightmotor2,0);
  digitalWrite(leftmotor1,0);
  digitalWrite(leftmotor2,1);
}
void back(){
  digitalWrite(rightmotor1,0);
  digitalWrite(rightmotor2,1);
  digitalWrite(leftmotor1,1);
  digitalWrite(leftmotor2,0);
}
void stopw(){
  digitalWrite(rightmotor1,0);
  digitalWrite(rightmotor2,0);
  digitalWrite(leftmotor1,0);
  digitalWrite(leftmotor2,0);
}
void loop() 
{
analogWrite(EN1, 250);
analogWrite(EN2, 250);
  if (WiFi.status() == WL_CONNECTED) 
  {
    HTTPClient http; //Object of class HTTPClient
    http.begin("http://192.168.43.217:3000/db");
    int httpCode = http.GET();
//Serial.println(httpCode);+\\\\\\\\\\\\\\\\\\\\\

]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
bvvvvvvvvvviiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiivvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv                                                                                                                                                                                                                                                                                                                                                                                                                           njvu
]\
    if (httpCode > 0) 
    {
      const size_t bufferSize = JSON_OBJECT_SIZE(2) + JSON_OBJECT_SIZE(3) + JSON_OBJECT_SIZE(5) + JSON_OBJECT_SIZE(8) + 370;
      DynamicJsonBuffer jsonBuffer(bufferSize);
      JsonObject& root = jsonBuffer.parseObject(http.getString());

      const char* moved = root["control"]["movement"]; 
      const char* moded = root["others"]["mode"]; 

      
//      Serial.println(moded);
//      Serial.println(move);
      if (strcmp(moded,"rc")==0)
      {
//        Serial.println("test");/
//        Serial.println(moved);
              if (strcmp(moved,"left")==0) {left();Serial.println(moved);}
              else if(strcmp(moved,"right")==0) {right();Serial.println(moved);}
              else if(strcmp(moved,"up")==0) {front();Serial.println(moved);}
              else if(strcmp(moved,"down")==0) {back();Serial.println(moved);}
              else if(strcmp(moved,"stop")==0){ stopw();Serial.println(moved);}
      } else if(strcmp(moded,"ad")==0){
              if (strcmp(moved,"left")==0) {leftad();Serial.println(moved);}
              else if(strcmp(moved,"right")==0) {rightad();Serial.println(moved);}
              else if(strcmp(moved,"up")==0) {front();Serial.println(moved);}
              else if(strcmp(moved,"down")==0) {back();Serial.println(moved);}
              else if(strcmp(moved,"stop")==0){ stopw();Serial.println(moved);}
      } else if(strcmp(moded,"ftl")==0){}
    }
    http.end(); //Close connection
  }
  delay(100);
}