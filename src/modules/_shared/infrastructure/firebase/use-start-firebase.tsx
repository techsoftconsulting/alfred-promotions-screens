import { ENV } from '@shared/infrastructure/utils/get-envs';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth as getBaseAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {
    FB_API_KEY,
    FB_APP_ID,
    FB_AUTH_DOMAIN,
    FB_DB_URL,
    FB_MEASUREMENT_ID,
    FB_MESSAGING_SENDER_ID,
    FB_PROJECT_ID,
    FB_STORAGE_BUCKET
} = ENV;

export default function useStartFirebase() {
    return getFirebase();
}

export const firebaseConfig = {
    apiKey: FB_API_KEY,
    authDomain: FB_AUTH_DOMAIN,
    databaseURL: FB_DB_URL,
    projectId: FB_PROJECT_ID,
    storageBucket: FB_STORAGE_BUCKET,
    messagingSenderId: FB_MESSAGING_SENDER_ID,
    appId: FB_APP_ID,
    measurementId: FB_MEASUREMENT_ID
};

export function getFirebase() {

    if (getApps().length == 0) {
        const app = initializeApp(firebaseConfig);

        const auth = initializeAuth(getFirebase(), {
            persistence: getReactNativePersistence(AsyncStorage)
        });

        return app;
    }

    return getApp();
}

export function getAuth() {

    const app = getFirebase();
    return getBaseAuth(app);
}
