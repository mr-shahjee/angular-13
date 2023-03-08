import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';



@Component({
  selector: 'app-sociallogin',
  templateUrl: './sociallogin.component.html',
  styleUrls: ['./sociallogin.component.scss']
})
export class SocialloginComponent implements OnInit {
  user !: SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;
  constructor(private socialService: SocialAuthService) { }

  ngOnInit(): void {
    this.socialService.authState.subscribe((user) => {
      this.user = user;
    })
  }

  signinWithGoogle(): any
  {
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): any{
    this.socialService.signOut();
  }
}
