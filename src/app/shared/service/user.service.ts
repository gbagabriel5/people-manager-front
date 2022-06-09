import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public userPath: string = 'localhost:8080/user';

  constructor(private httpClient: HttpClient) { }

  public saveUser(user: User): Observable<void> {
    return this.httpClient.post<void>(`${this.userPath}`, user);
  }
  public updateUser(user: User): Observable<void> {
    return this.httpClient.put<void>(`${this.userPath}`, user);
  }
  public getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.userPath}`);
  }
  public deleteById(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.userPath}`);
  }
}
