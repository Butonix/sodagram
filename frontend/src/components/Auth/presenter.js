import React from "react";
import styles from "./styles.scss";
import { LoginForm, SignupForm } from "components/AuthForms";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img
        src={require("images/main_photo.png")}
        alt="Checkout our app. It's Cool!"
      />
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img
          src={require("images/logo.png")}
          alt="Checkout our app. It's Cool!"
        />
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignupForm />}
      </div>
      <div className={styles.whiteBox}>
        {props.action === "login" && (
          <p>
            Don't have an account?{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
              Sign up
            </span>
          </p>
        )}
        {props.action === "signup" && (
          <p>
            Have an account?{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
              Log in
            </span>
          </p>
        )}
      </div>
      <div className={styles.appBox}>
        <span>Get the app</span>
        <div className={styles.appstores}>
          <img
            src={require("images/AppStore.png")}
            alt="Download it on the Apple Appstore"
          />
          <img
            src={require("images/PlayStore.png")}
            alt="Download it on the Google Playstore"
          />
        </div>
      </div>
    </div>
  </main>
);

export default Auth;
