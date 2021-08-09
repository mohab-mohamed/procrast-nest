import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleService } from './google.service';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

import { GoogleResponse } from './googleResponse.interface';

@Controller('google')
export class GoogleController {
    constructor(private readonly googleService: GoogleService) { }

    @Get('calendar')
    async getCalendars(
        @Req() request,
        @Res({ passthrough: true }) response: Response,
    ) {
        console.log(request.query);
        console.log(request.query.timeMin, request.query.timeMax);
        const calendars: any = await this.googleService.getCalendars(request.cookies['MYzKBlSitQ'], request.query.timeMin, request.query.timeMax);
        console.log(calendars.data.items);
        response.send({ calendarsData: calendars.data });
    }

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(
        @Req() request: Request,
        @Res({ passthrough: true }) response: Response,
    ) {

    }

    @Get('redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(
        @Req() request: GoogleResponse,
        @Res({ passthrough: true }) response: Response,
    ) {
        const googleAccessToken: string = request.user.accessToken;
        if (googleAccessToken) {
            response.cookie('MYzKBlSitQ', googleAccessToken, { signed: false });
            response.redirect('http://localhost:4200/dashboard');
        } else {
            response.redirect('http://localhost:4200');
        }


    }
}