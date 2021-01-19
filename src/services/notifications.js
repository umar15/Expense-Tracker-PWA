import firebase from "firebase";

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
const messaging = firebase.messaging();

export function initNotification() {
	Notification.requestPermission().then((permission) => {
		console.log(permission);
		if (permission === "granted") {
			messaging
				.getToken()
				.then((currentToken) => {
					if (currentToken) {
						console.log("Token => ", currentToken);
					} else {
						console.log(
							"No registration token available. Request permission to generate one."
						);
					}
				})
				.catch((err) => {
					console.log("An error occurred while retrieving token. ", err);
				});
		}
	});
}
