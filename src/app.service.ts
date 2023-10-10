import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('GREETING_SERVICE') private client: ClientProxy) {}

  async getHello() {
    return this.client.send({ cmd: 'greeting' }, 'Progressive Coder');
  }

  async getHelloAsync() {
    return this.client.send({ cmd: 'greeting-async' }, 'Progressive Coder');
  }

  async publishEvent() {
    this.client.emit('book-created', { 'bookName': 'The Way Of Kings', 'author': 'Brandon Sanderson' });
  }
}
