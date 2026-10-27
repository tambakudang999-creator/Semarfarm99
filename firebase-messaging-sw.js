// Firebase Messaging Service Worker untuk Semar Farm - FCM Gagah
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:"AIzaSyCXYQa-SONuEmvAq2s6AMDTaey0pzPLlMQ",
  authDomain:"tambakudang99.firebaseapp.com",
  projectId:"tambakudang99",
  storageBucket:"tambakudang99.firebasestorage.app",
  messagingSenderId:"40863649732",
  appId:"1:40863649732:web:5f8e982e4604144c051e91"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload)=>{
  console.log('[SW] Background Message:', payload);
  const title = payload.notification?.title || 'Semar Farm';
  const options = {
    body: payload.notification?.body || 'Ada update baru di tambak!',
    icon: '/icon-192.png',
    badge: '/icon-72.png',
    data: payload.data
  };
  self.registration.showNotification(title, options);
});
