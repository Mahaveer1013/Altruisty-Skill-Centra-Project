import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useAuth } from './AuthContext';
import Logo from '../pageimg/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const GmailLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();
    const from = location.state?.from || '/SkillCentre';

    // Handle Google login using signInWithPopup
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            handleUser(result.user);
        } catch (error) {
            console.error('Google sign-in error:', error);
        }
    };

    // Handle user data after successful sign-in
    const handleUser = (user) => {
        const userData = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        };
        login(userData);
        navigate(from);
    };

    return (
        <div className='bg-[#17212E] pt-20 md:py-5'>
            <div className='bg-white mx-5 md:mx-80 rounded-xl py-6'>
                <div className='flex items-center justify-center'>
                    <img src={Logo} alt="logo" height={300} width={300} />
                </div>
                <div className='text-[#17212E] text-3xl font-bold text-center py-4'>
                    <div>Login</div>
                    <div>To</div>
                    <div>Altruisty</div>
                    <div>SkillCentra</div>
                </div>
                <div className='flex flex-col items-center justify-center mx-10 md:mx-40'>
                    <input className='border-[#17212E] border-2 p-1 my-2 rounded-lg w-full' type="text" placeholder='Email' />
                    <input className='border-[#697381] border-2 p-1 my-2 rounded-lg w-full' type="password" placeholder='Password' />
                    <div>
                        <button 
                            onClick={() => {/* Handle email/password login */}}
                            className='px-10 py-1 bg-[#F5CF6B] font-semibold rounded-md shadow hover:bg-[#f5cc63] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 hover:scale-105 transition duration-300'
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div className='flex items-center justify-center py-4'>
                    <hr className='flex-grow border-gray-400' />
                    <span className='px-2 text-gray-500'>Or</span>
                    <hr className='flex-grow border-gray-400' />
                </div>
                <div className='flex items-center justify-center'>
                    <button 
                        onClick={handleGoogleLogin}
                        className='px-10 py-1 bg-[#4285F4] text-white font-semibold rounded-md shadow hover:bg-[#4285e3] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 hover:scale-105 transition duration-300'
                    >
                        <FontAwesomeIcon icon={faGoogle} className='mr-2' />Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GmailLogin;