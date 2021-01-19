importScripts("https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js");

var firebaseConfig = {
	apiKey: "AIzaSyB8jos-qDpZNLK6t-1AJoSzsVHJKXv-lp8",
	authDomain: "pwa-expense-tracker-7a190.firebaseapp.com",
	projectId: "pwa-expense-tracker-7a190",
	storageBucket: "pwa-expense-tracker-7a190.appspot.com",
	messagingSenderId: "617724937821",
	appId: "1:617724937821:web:c15a134b048eb5db262fb4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.messaging();
