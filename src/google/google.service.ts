import { Injectable, } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GoogleResponse } from './googleResponse.interface';
import { Observable } from 'rxjs';


@Injectable()
export class GoogleService {
    constructor(private httpService: HttpService) { }

    getCalendars(token: string, timeMin: string, timeMax: string): Promise<any> {
        const queryTimeMin: string = encodeURIComponent(timeMin);
        const queryTimeMax: string = encodeURIComponent(timeMax);
        const headersRequest = {
            'Authorization': `Bearer ${token}`,
        };
        console.log(headersRequest);
        const params = new URLSearchParams([['timeMin', timeMin], ['timeMax', timeMax]]);
        console.log(params);
        return this.httpService.get('https://www.googleapis.com/calendar/v3/calendars/primary/events', { params: params, headers: headersRequest }).toPromise();
    }



    googleLogin(req: GoogleResponse) {
        if (!req.user) {
            return { message: "authentication failed", user: null }
        }
        return {
            message: "user info",
            user: req.user
        }
    }
}