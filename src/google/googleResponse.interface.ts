export class GoogleResponse {
    user: {
        email: string
        firstName: string
        lastName: string
        picture: string
        accessToken: string
    }
}

export interface TaskLists {
    kind:  string;
    etag:  string;
    items: Item[];
}

export interface Item {
    kind:     string;
    id:       string;
    etag:     string;
    title:    string;
    updated:  Date;
    selfLink: string;
}
