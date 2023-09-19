import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAHm0AKBVb6ebPxUIM9hVqfLqnliu4SeCw',
  authDomain: 'image-profile-user.firebaseapp.com',
  projectId: 'image-profile-user',
  storageBucket: 'image-profile-user.appspot.com',
  messagingSenderId: '607985851033',
  appId: '1:607985851033:web:2b5e32ec683f1733cd3608',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const uploadFile = (file) => {
  const storageRef = ref(storage, 'some-child');
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log(snapshot);
  });
};
