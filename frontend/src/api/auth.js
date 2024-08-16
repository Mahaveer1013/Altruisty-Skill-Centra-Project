import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import api from "./call/api";
import encryptApi from "./call/encryptApi";


const handleApiError = (error) => {
    if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Response error:', error.response.data);
        throw new Error(error.response.data.message || 'API request failed');
    } else if (error.request) {
        // Request was made but no response was received
        console.error('Request error:', error.request);
        throw new Error('No response from the server. Please try again later.');
    } else {
        // Something happened in setting up the request
        console.error('Error setting up request:', error.message);
        throw new Error(error.message);
    }
};

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
        handleApiError(error)
    }
};

export const handleGoogleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        let email = result.user.email;
        if (!email) {
            email = result.user.providerData[0].email;
        }
        const response = await encryptApi.post('/firebase-login', { email: email }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};