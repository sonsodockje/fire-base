// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVC-Mq2KclAFH1zrdrobDr8LPC948AskI",
    authDomain: "test-43285.firebaseapp.com",
    projectId: "test-43285",
    storageBucket: "test-43285.appspot.com",
    messagingSenderId: "1037794805865",
    appId: "1:1037794805865:web:92586492a0cac01368baf8",
    measurementId: "G-M2C4VJC5K9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);






/// 회원가입 구현 ///
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const auth = getAuth();

document.getElementById('signUpButton').addEventListener('click', (event) => {
    event.preventDefault()
    const signUpEmail = document.getElementById('signUpEmail').value
    const signUpPassword = document.getElementById('signUpPassword').value

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredential) => {
            console.log(userCredential)
            // Signed in
            const user = userCredential.user;
            document.getElementById('signUpEmail').value =""
            document.getElementById('signUpPassword').value=""
            
            // ...
        })
        .catch((error) => {
            console.log('error')
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });})




        // 로그인 처리
document.getElementById("signInButton").addEventListener('click', (event)=>{
    event.preventDefault()
    const signInEmail = document.getElementById('signInEmail').value
    const signInPassword = document.getElementById('signInPassword').value

    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    alert("완료")
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

})



