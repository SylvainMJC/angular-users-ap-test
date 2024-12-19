import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private client: HttpClient = inject(HttpClient);

  private readonly url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor() {}

  getAllUsers(): Observable<Object> {
    return this.client.get(this.url);
  }

  getOneUser(userId: any): Observable<Object> {
    return this.client.get(this.url + '/' + userId);
  }
}
