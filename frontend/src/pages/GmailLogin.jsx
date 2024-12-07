import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../AuthContext';
import encryptApi from '../api/encryptApi';
import { useNavigate } from 'react-router-dom';

const GmailLogin = () => {

    const { setFlash, checkUser, isLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
    const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup forms
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            return navigate('/');
        }
    }, [isLoggedIn])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('form submitted')
        console.log(email, password);  // For debugging purposes (can be removed later)
        
        // Check if it's a signup process
        if (isSignup) {
            if (password !== confirmPassword) {
                setFlash(['Passwords do not match', 'error']);
                return;
            }
    
            try {
                await encryptApi.post('/credential-signup', {
                    email: email,
                    password: password,
                });
                setIsSignup(false);
                setFlash(['Success, Login Now!', 'success']);
            } catch (error) {
                console.error(error);  
                if (error.response && error.response.status === 400) {
                    
                    setFlash(['Email ID already exists', 'error']);
                } else {
                   
                    setFlash(['An error occurred, please try again later', 'error']);
                }
            }
        } else {
            
            try {
                await encryptApi.post('/credential-login', {
                    email: email,
                    password: password,
                });
                checkUser();
                setTimeout(() => {
                    navigate('/profile');  
                }, 100);
                setFlash(['Logged In Successfully', 'success']);
            } catch (error) {
                console.error(error); 
                
                if (error.response) {
                    setFlash([error.response.data.message, 'error']);
                } else {
                    
                    setFlash(['An error occurred, please try again later', 'error']);
                }
            }
        }
    };
    

    const GoogleAuthSuccess = async (response) => {
        try {
            await encryptApi.post('/google-login', { tokenId: response.credential })
            .then(() => {
                checkUser();
                setFlash(['Logged In Successfully', 'success']);
            }).catch((error) => {
                setFlash([error.response.data.message, 'error']);
            })
        } catch (error) {
            console.error('Error during Google login:', error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#17212E] px-4 md:px-2">
            <div className="bg-white max-w-md w-full rounded-xl shadow-lg py-10 px-6">
                <div className="text-[#17212E] text-2xl md:text-3xl font-bold text-center mb-6">
                    <div>{isSignup ? 'Sign Up with' : 'Login To'}</div>
                    <div>Altruisty</div>
                    <div>SkillCentre</div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-6">
                    <input
                        className="border border-[#17212E] p-3 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#17212E]"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="border border-[#697381] p-3 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#697381]"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {isSignup && (
                        <input
                            className="border border-[#697381] p-3 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#697381]"
                            type="password"
                            placeholder="Confirm Password one time"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        
                    )}
                    <button
                        type="submit"
                        className="w-full px-4 py-3 bg-[#F5CF6B] text-[#17212E] font-semibold rounded-lg shadow hover:bg-[#f5cc63] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 hover:scale-105 transition duration-300"
                    >
                        {isSignup ? 'Sign Up' : 'Login'}
                    </button>
                </form>
                <div className="mb-6 text-center">
                    <p
                        onClick={() => setIsSignup(!isSignup)}
                        className="mt-4 text-sm text-gray-600 hover:text-black cursor-pointer"
                    >
                        {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
                    </p>
                </div>
                <div className="flex items-center justify-center py-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500">Or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                {/* <div className="flex justify-center">
                    <GoogleOAuthProvider clientId='286309906436-1mhnk8b933efuina84sro4q61prji0p4.apps.googleusercontent.com'>
                        <GoogleLogin
                            onSuccess={GoogleAuthSuccess}
                            onError={(error) => {
                                console.log('Login Failed', error);
                            }}
                        />
                    </GoogleOAuthProvider>
                </div> */}
            </div>
        </div>
    );
};

export default GmailLogin;
