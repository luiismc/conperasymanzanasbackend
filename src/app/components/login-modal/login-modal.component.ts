import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/AuthService/auth.service";
declare var demo: any;

@Component({
  selector: "app-login-modal",
  templateUrl: "./login-modal.component.html",
  styleUrls: ["./login-modal.component.css"]
})
export class LoginModalComponent implements OnInit {
  loginData: any;
  isLoading = false;

  constructor(
    private authService: AuthService
  ) {
    this.loginData = { email: "", password: "" };
  }

  ngOnInit() {}

  signIn(): void {
    this.isLoading = true;

    this.authService
      .signIn(this.loginData.email, this.loginData.password)
      .then(x => {
        this.isLoading = false;
        demo.showSuccessNotification("Log in successful");
      })
      .catch(error => {
        this.isLoading = false;
        console.error(error);
        demo.showErrorNotification("Log in failed:\n" + error);
      });
  }

  signUp(): void {
    this.isLoading = true;

    this.authService
      .registerUser(this.loginData.email, this.loginData.password)
      .then(x => {
        this.isLoading = false;
        demo.showSuccessNotification("Sign up successful");
      })
      .catch(error => {
        this.isLoading = false;
        console.error(error);
        demo.showErrorNotification("Sign up failed:\n" + error);
      });
  }

  signInWithFacebook() {
    this.isLoading = true;

    this.authService
      .signInWithFacebook()
      .then(() => {
        this.isLoading = false;
        demo.showSuccessNotification("Log in successful");
      })
      .catch(error => {
        this.isLoading = false;
        console.error(error);
        demo.showErrorNotification("Log in failed:\n" + error);
      });
  }

  signInWithGoogle(): void {
    this.isLoading = true;

    this.authService
      .signInWithGoogle()
      .then(() => {
        this.isLoading = false;
        demo.showSuccessNotification("Log in successful");
      })
      .catch(error => {
        this.isLoading = false;
        console.error(error);
        demo.showErrorNotification("Log in failed:\n" + error);
      });
  }

  signInWithTwitter() {
    this.isLoading = true;

    this.authService
      .signInWithTwitter()
      .then(() => {
        this.isLoading = false;
        demo.showSuccessNotification("Log in successful");
      })
      .catch(error => {
        this.isLoading = false;
        console.error(error);
        demo.showErrorNotification("Log in failed:\n" + error);
      });
  }

  signInWithGithub(): void {
    this.isLoading = true;

    this.authService
      .signInWithGithub()
      .then(() => {
        this.isLoading = false;
        demo.showSuccessNotification("Log in successful");
      })
      .catch(error => {
        this.isLoading = false;
        console.error(error);
        demo.showErrorNotification("Log in failed:\n" + error);
      });
  }
}
