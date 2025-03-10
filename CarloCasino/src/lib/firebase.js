import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDI42qtUdq-Hpa_6RwhjM_WQTm0003DLw",
  authDomain: "carlocasino-2d474.firebaseapp.com",
  projectId: "carlocasino-2d474",
  storageBucket: "carlocasino-2d474.firebasestorage.app",
  messagingSenderId: "304143288884",
  appId: "1:304143288884:web:73a0a7f8ba1f16b7411861",
  measurementId: "G-XRQJCQ12X4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };