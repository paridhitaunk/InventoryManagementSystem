import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth)
  constructor(private auth: Auth) { }

  signup(name: any, email:any, password:any)
  {
    return from(createUserWithEmailAndPassword(this.auth, email,password))
    .pipe(switchMap(({ user })=> updateProfile(user, {displayName: name})));
  }

  login(username: string, password: string){
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  logout() {
    return from(this.auth.signOut());
  }
}
