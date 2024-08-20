import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import api from "./call/api";
import encryptApi from "./call/encryptApi";

export const fetchCurrentUser = async () => {
    try {
        const response = await api.get('/user');
        return response.ok ? response.data : null
    } catch (error) {
        console.log(error);
    }
};

export const logout = async () => {
    try {
        const response = await api.get('/logout', {
            withCredentials: true
        });
        const data = response.data;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

export const handleGoogleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        let email = result.user.email;
        if (!email) {
            email = result.user.providerData[0].email;
        }
        console.log(email);
        const response = await encryptApi.post('/firebase-login', { email: email });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const handleCredentialSignup = async (username, password) => {
    try {
        const response = await encryptApi.post('/credential-signup', {
            username: username,
            password: password,
        });
        const data = response.data;
        return data;
    } catch (error) {
        console.error(`Error :`, error);
    }
};

export const handleCredentialLogin = async (username, password) => {
    try {
        const response = await encryptApi.post('/credential-login', {
            username: username,
            password: password,
        });
        const data = response.data;
        return data;
    } catch (error) {
        console.error(`Error :`, error);
    }
};