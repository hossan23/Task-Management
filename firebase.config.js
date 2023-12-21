import { initializeApp } from 'firebase/app';

const firebaseConfig = {
 apiKey: 'AIzaSyAfdfN_eHMtTnaiB0qva6iWujKrZt3SQvQ',
 authDomain: 'task-management-369b3.firebaseapp.com',
 projectId: 'task-management-369b3',
 storageBucket: 'task-management-369b3.appspot.com',
 messagingSenderId: '710111609223',
 appId: '1:710111609223:web:f5b65a8d5abb94b00e5322',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
