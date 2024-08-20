import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { fetchCurrentUser, handleCredentialLogin, handleCredentialSignup, handleGoogleLogin } from '../api/auth';

const GmailLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/SkillCentre';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup forms

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSignup) {
            await handleCredentialSignup(username, password);
            console.log('Login Successfull');
        } else {
            await handleCredentialLogin(username, password);
            await fetchCurrentUser()
            navigate(from);
        }
    };

    const handleGoogleLoginFunction = async () => {
        try {
            await handleGoogleLogin();
            await fetchCurrentUser()
            navigate(from);
        } catch (error) {
            console.error('Google sign-in error:', error);
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
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                <div className="flex justify-center">
                    <button
                        onClick={handleGoogleLoginFunction}
                        className="w-full max-w-sm flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#4285F4] to-[#3367D6] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                    >
                        <FontAwesomeIcon icon={faGoogle} className="mr-3 text-lg" />
                        <span className="text-sm md:text-base">Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GmailLogin;
