import { Injectable, OnModuleInit } from '@nestjs/common';
import * as mqtt from 'mqtt';
import { readFile } from 'fs/promises';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MqttClientService implements OnModuleInit {
  private client: mqtt.MqttClient;
  constructor(private readonly configService: ConfigService) {}
  async onModuleInit() {
    try {
      const cert = this.configService.get<string>('CERTIFICATE');
      const privateKey = this.configService.get<string>('PRIVATE_KEY');
      const rootCA = this.configService.get<string>('ROOT_CA');

      this.client = mqtt.connect('mqtts://a3lafbeca71eu5-ats.iot.ap-southeast-1.amazonaws.com:8883', {
        key: privateKey,
        cert: cert,
        ca: rootCA,
        protocol: 'mqtts',
      });

      this.client.on('connect', () => {
        console.log('Connected to MQTT broker');
        this.subscribeToTopic();
      });

      this.client.on('message', (topic, message) => {
        console.log(`Received message on topic ${topic}: ${message.toString()}`);
        // Handle the received message as needed
      });
    } catch (error) {
      console.error('Error initializing MQTT client:', error.message);
    }
  }

  private subscribeToTopic() {
    const topic = 'back-end-exam';
    this.client.subscribe(topic, (err) => {
      if (err) {
        console.error('Error subscribing to topic:', err);
      } else {
        console.log(`Subscribed to topic: ${topic}`);
      }
    });
  }
}