import firebase from 'firebase';
import firebaseConfig from 'config/firebase';

class FirebaseService {
  constructor() {
    this.app = firebase.initializeApp(firebaseConfig.option, 'authentication');
    this.auth = this.app.auth();
  }

  createUser({ email, password }, cb) {
    this.auth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log(res);
    });
  }

  signIn({ email, password }, cb) {
    this.auth.signInWithEmailAndPassword(email, password).then(cb).catch(err => {
      console.log('services', err.code, err.message);
    });
  }

  signOut() {
    this.auth.signOut();
  }
}

export default new FirebaseService();
