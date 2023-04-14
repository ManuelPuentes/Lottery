import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
@Module({
  imports: [

    MailerModule.forRoot({
      transport: {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "manuel.r.puentes.d@gmail.com",
          pass: "qpyhobveddlrlzcv",
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      preview: true,
      template: {
        dir: __dirname + '/templates/',
        adapter: new EjsAdapter(),
        options: {
          // strict: true,
        },
      },
    }),



  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



// # SMTPent
// SMTP_HOST=smtp.gmail.com
// SMTP_PORT=587
// SMTP_USER=contacto@andinito.com
// SMTP_PASSWORD=xfmnllvhzbwswxqt
// SMTP_SECURE=0
// SMTP_TLS=0
