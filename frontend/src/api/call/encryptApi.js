import axios from 'axios';
import CryptoJS from 'crypto-js';



const encryptApi = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true, 
});

const secretKey = process.env.REACT_APP_SECRET_KEY; 

const encryptValue = (value) => {
    try {
        return CryptoJS.AES.encrypt(JSON.stringify(value), secretKey).toString();
    } catch (error) {
        console.error('Error during value encryption:', error);
        throw error;
    }
};


const decryptValue = (encryptedValue) => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedValue, secretKey);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedText) {
            throw new Error('Decryption failed or result is empty');
        }
        console.log(typeof decryptedText, typeof JSON.parse(decryptedText));
        
        return JSON.parse(decryptedText);
    } catch (error) {
        console.error('Error during decryption:', error);
        throw error;
    }
};

// Request interceptor to encrypt data
encryptApi.interceptors.request.use((config) => {
    if (config.data) {
        console.log(config.data);
        config.data = encryptValue(config.data);
        config.headers['Content-Type'] = 'application/octet-stream';
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Response interceptor to decrypt data
encryptApi.interceptors.response.use((response) => {
    if (response.data && response.enc) {
        response.data = decryptValue(response.data);
        console.log(response.data, typeof response.data);
    }    
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default encryptApi;