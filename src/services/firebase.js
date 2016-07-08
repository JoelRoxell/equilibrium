import firebase from 'firebase';
import firebaseConfig from 'config/firebase';

class FirebaseService {
  constructor() {
    this.app = firebase.initializeApp(firebaseConfig.option, firebaseConfig.appName);
    this.auth = this.app.auth();
  }

  createUser({ email, password }) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    this.auth.signOut();
  }
}

export default new FirebaseService();
