import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GoogleService } from './google.service';
import { GoogleController } from './google.controller';
import { GoogleStrategy } from './google.strategy'

@Module({
    imports: [HttpModule],
    providers: [
        GoogleService,
        GoogleStrategy
    ],
    controllers: [
        GoogleController
    ]
})
export class GoogleModule { }