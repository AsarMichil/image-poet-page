import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseClient, createClient, User} from '@supabase/supabase-js';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase: SupabaseClient;

  private currentUser: BehaviorSubject<User | boolean | null > = new BehaviorSubject <User | boolean | null> (null);
  constructor(private router: Router) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );


      this.supabase.auth.onAuthStateChange((event, sess) => {
        if (event == 'SIGNED_IN' || event == 'TOKEN_REFRESHED'){
          console.log('SET USER: ', sess);
          this.currentUser.next(sess.user);
        } else{
          this.currentUser.next(false);
        }
      })
      
      this.loadUser();
  }


  async loadUser(){
    if(this.currentUser.value){
      return;
    }
    console.log("loading user");
    const user = await this.supabase.auth.getUser();
    console.log("loaded user");

    if(user.data.user){
      this.currentUser.next(user.data.user);
    }
    else{
      this.currentUser.next(false);

    }
    
  }

  signUp(credentials: {email; password}){
    return this.supabase.auth.signUp(credentials);
  }
  signIn(credentials: {email; password}){
    return this.supabase.auth.signInWithPassword(credentials);
  }
  //TODO: MAKE SURE TO CHANGE THE REDIRECT TO URL
  sendPwReset(email){
    return this.supabase.auth.resetPasswordForEmail(email, {redirectTo: 'http://localhost:4200/update-password'});
  }
  async signOut(){
    await this.supabase.auth.signOut();
    this.router.navigateByUrl('/', {replaceUrl: true});
  }
  getCurrentUser(): Observable<User | boolean | null>{
    return this.currentUser.asObservable();
  }

  getCurrentUserId(): string{
    if(this.currentUser.value){
      return (this.currentUser.value as User).id;
    }else{
      return null;
    }
  }
  updateUser(password){
    return this.supabase.auth.updateUser(password)
  }
  signInWIthEmail(email: string){
    return this.supabase.auth.signInWithOtp({email});

  }
}
