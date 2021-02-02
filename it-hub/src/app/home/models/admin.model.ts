export class AdminModel {
    // tslint:disable-next-line: variable-name
    _id: string;
    userName: string;
    password: string;
}

// tslint:disable-next-line: class-name
export interface loginResp{
    success: boolean;
    token: string;
    id: string;
}
