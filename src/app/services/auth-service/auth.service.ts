import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router) { }


  login(email: string, password: string): Observable<boolean> {
    return this.http.post<any>("http://localhost:8080/api/v1/login", { email, password })
      .pipe(map(res => {
        if (res) {
          sessionStorage.setItem('email', email)
          sessionStorage.setItem('loggedIn', "1")
          this.router.navigate(['/employees']);
          return true;
        } else {
          return false;
        }
      }));
  }

  logout() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('loggedIn');
    sessionStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(["/login"]);
  }

}