
import { Module, } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { MongooseModule } from '@nestjs/mongoose';


// import { ServeStaticModule } from '@nestjs/serve-static';
// ServeStaticModule.forRoot({
//   rootPath: join(__dirname, '..', '..', 'procrast', 'dist', 'procrast'),
// })

import { join } from 'path';

import { GoogleModule } from './google/google.module';

@Module({
  imports: [
    UsersModule,
    HttpModule,
    GoogleModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }