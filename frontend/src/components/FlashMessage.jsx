import React, { useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const FlashMessage = () => {
    const { flash, setFlash } = useAuth();

    useEffect(() => {
        if (flash) {
            const timer = setTimeout(() => {
                setFlash(null);
            }, 4000); // Change this to the desired duration

            return () => clearTimeout(timer); // Cleanup the timer on component unmount
        }
    }, [flash, setFlash]);

    return (
        flash &&
        <div className={`${flash[1] === 'error' ? 'bg-red-500' : 'bg-green-600'} flash fixed right-5 w-auto h-[50px] my-[10px] min-w-[350px] px-4 rounded-md text-white flex justify-between items-center z-[100] transition-transform transform translate-x-full animate-slide-in`}>
            {flash[0]}
            <FontAwesomeIcon icon={faTimes} onClick={() => setFlash(null)} className="cursor-pointer" />
            <div className="absolute bottom-0 left-0 h-1 bg-white animate-progress-bar"></div>
        </div>
    );
};

export default FlashMessage;
