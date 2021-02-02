import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginResp } from '../../models/admin.model';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  login(admin: loginResp) {
    return this.httpClient.post<loginResp>(`${environment.api_url}/admin/signin`, admin);
  }

}
