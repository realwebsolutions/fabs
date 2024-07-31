import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,
    withViewTransitions()
  ), provideFirebaseApp(() => initializeApp({"projectId":"fabs-70f6d","appId":"1:1069885887145:web:b3492848c039c480168fb8","databaseURL":"https://fabs-70f6d-default-rtdb.asia-southeast1.firebasedatabase.app","storageBucket":"fabs-70f6d.appspot.com","apiKey":"AIzaSyCkxEcjTK1h2VG3BsNOXVnWmHUlrNGKh-c","authDomain":"fabs-70f6d.firebaseapp.com","messagingSenderId":"1069885887145"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage())]
};
