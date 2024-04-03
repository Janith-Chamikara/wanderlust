import { Router } from 'express';
const router = Router();
import {
  signUpWithEmail,
  signInWithEmail,
  openGoogleAuthWindow,
  signUpWithGoogle,
  signInWithGoogle,
  openGithubAuthWindow,
  signUpWithGithub,
  signInWithGithub,
  signOutUser,
} from '../controllers/auth-controller.js';

//open auth window of provided by google
router.get('/google', openGoogleAuthWindow);
router.post('/google/signup', signUpWithGoogle);
router.post('/google/signin', signInWithGoogle);

//open auth window of provided by github
router.get('/github', openGithubAuthWindow);
router.post('/github/signup', signUpWithGithub);
router.post('/github/signin', signInWithGithub);

//regular startegy
router.post('/email-password/signup', signUpWithEmail);
router.post('/email-password/signin', signInWithEmail);

//signOut
router.post('/signout', signOutUser);

export default router;
