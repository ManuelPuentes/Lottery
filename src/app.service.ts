import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as path from 'path';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  getHello(): string {
    return 'Hello World!';
  }

  public example(): void {
    this.mailerService
      .sendMail({
        to: 'manuel.r.puentes.d@gmail.com', // list of receivers
        from: 'hola.d@gmail.com', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        template: path.join(
          __dirname,
          '..',
          'templates',
          'reset',
        ),

        context: {
          url : "https://www.google.com/?hl=es",
        },

        
        // text: 'welcome', // plaintext body
        // html: '<b>welcome</b>', // HTML body content




      })
      .then(() => {})
      .catch((e) => {

        console.log(e);
        


      });
  }
}
