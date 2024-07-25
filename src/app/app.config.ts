import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"devacnotes","appId":"1:763921446905:web:97ec7f8c6e701392d4af28","storageBucket":"devacnotes.appspot.com","apiKey":"AIzaSyCxvicr2OA9jKfD5SKvYMJ_ePVyJ2zOHVE","authDomain":"devacnotes.firebaseapp.com","messagingSenderId":"763921446905"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"devacnotes","appId":"1:763921446905:web:97ec7f8c6e701392d4af28","storageBucket":"devacnotes.appspot.com","apiKey":"AIzaSyCxvicr2OA9jKfD5SKvYMJ_ePVyJ2zOHVE","authDomain":"devacnotes.firebaseapp.com","messagingSenderId":"763921446905"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
