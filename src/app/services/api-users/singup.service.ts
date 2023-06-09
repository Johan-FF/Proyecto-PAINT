import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseInterface } from 'src/app/models/iresponse.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { UserInterface } from 'src/app/models/iuser.interface';

@Injectable({
  providedIn: 'root'
})
export class SingupService {
  private api: string = environment.api_url

  constructor(
    private _httpClient: HttpClient
  ) { }

  public createNewUser(usuario: UserInterface): Observable<ResponseInterface> {
    const url: string = this.api+'/users/new_user'
    return this._httpClient.post<ResponseInterface>(url, usuario)
  }
}
