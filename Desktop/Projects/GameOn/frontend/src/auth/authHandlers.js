import { auth } from "./firebase"; 

import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider(); 
const githubProvider = new GithubAuthProvider(); 


let googleLogin = false; 

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log('Google login success:', result.user);
    } catch (error) {
        console.error('Google login error:', error); 
    }
}; 

export const signInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log('GitHub login success:', result.user);
    } catch (error) {
      console.error('GitHub login error:', error);
    }
  };
