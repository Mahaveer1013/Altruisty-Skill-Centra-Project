import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faCashRegister, faCertificate, faHome, faPeopleGroup, faSignOut, faUser, faChevronDown, faNetworkWired, faMessage, faGroupArrowsRotate, faBell } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../AuthContext';
import logo from '../assets/logo.jpg';

const Sidebar = () => {
    const { logout, setIsSidebar, isSidebar } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(0);
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (!isSidebar) {
            setIsDropdownOpen(false);
        }
        // Update the activeLink state when the location changes
        setActiveLink(location.pathname);
    }, [isSidebar, location.pathname]);

    const handleSidebar = () => {
        setIsSidebar(prev => !prev);
    };

    const toggleDropdown = (active) => {
        setIsDropdownOpen(prev => prev === active ? 0 : active);
    };

    const isCommunityActive = location.pathname.startsWith('/community');

    return (
        <>
            <nav className='w-full fixed top-0 h-[70px] bg-white shadow-md z-40 shadow-[#17212E]'>
                <img src={logo} alt="Logo" className='h-full m-auto' />
            </nav>
            <nav className={(isSidebar ? 'w-full md:w-[250px]' : 'w-[60px]') + ' sidebar px-2 h-[100vh] flex flex-col bg-[#17212E] text-white shadow-lg fixed z-50 transition-all duration-200'}>
                <p className='p-3 cursor-pointer mb-5' onClick={handleSidebar}><FontAwesomeIcon icon={faBars} /></p>
                <Link
                    to={'/'}
                    className={` p-3 rounded transition-all duration-300 ${activeLink === '/' ? 'bg-[#F5CF6B] text-black' : 'hover:text-primary hover:text-[#F5CF6B]'}`}
                    onClick={() => setActiveLink('/')}
                >
                    <FontAwesomeIcon className='mr-2' icon={faHome} /> {isSidebar && 'Home'}
                </Link>

                <p onClick={() => toggleDropdown(1)} className={`flex items-center justify-between p-3 cursor-pointer rounded transition-all duration-300 ${(isCommunityActive && isDropdownOpen !== 1) ? 'bg-[#F5CF6B] text-black' : 'hover:text-[#F5CF6B]'} ${isSidebar ? 'text-primary' : ''}`}>
                    <p><FontAwesomeIcon className='mr-2' icon={faUser} /> {isSidebar && 'Profile'}</p>
                    {isSidebar && <FontAwesomeIcon icon={faChevronDown} className={`ml-2 transition-transform ${isDropdownOpen === 1 ? 'rotate-180' : ''}`} />}
                </p>
                <div className={`overflow-hidden ${isDropdownOpen === 1 ? 'dropdown-enter-active' : 'dropdown-enter'}`}>
                    <div className='flex flex-col'>
                        <Link
                            to={'/profile'}
                            className={`pl-10 p-3 rounded transition-all duration-300 ${activeLink === '/profile' ? 'bg-[#F5CF6B] text-black' : 'hover:text-primary hover:text-[#F5CF6B]'}`}
                            onClick={() => setActiveLink('/profile')}
                        >
                            <FontAwesomeIcon className='mr-2' icon={faUser} /> {isSidebar && 'My Profile'}
                        </Link>
                        <Link
                            to={'/profile/events'}
                            className={`pl-10 p-3 rounded transition-all duration-300 ${activeLink === '/events' ? 'bg-[#F5CF6B] text-black' : 'hover:text-primary hover:text-[#F5CF6B]'}`}
                            onClick={() => setActiveLink('/profile/events')}
                        >
                            <FontAwesomeIcon className='mr-2' icon={faBook} /> {isSidebar && 'My Learning'}
                        </Link>
                        <Link
                            to={'/profile/certifications'}
                            className={`pl-10 p-3 rounded transition-all duration-300 ${activeLink === '/internship' ? 'bg-[#F5CF6B] text-black' : 'hover:text-primary hover:text-[#F5CF6B]'}`}
                            onClick={() => setActiveLink('/profile/certifications')}
                        >
                            <FontAwesomeIcon className='mr-2' icon={faCertificate} /> {isSidebar && 'Certifications'}
                        </Link>
                    </div>
                </div>
                <p onClick={() => toggleDropdown(2)} className={`flex items-center justify-between p-3 cursor-pointer rounded transition-all duration-300 ${(isCommunityActive && isDropdownOpen !== 2) ? 'bg-[#F5CF6B] text-black' : 'hover:text-[#F5CF6B]'} ${isSidebar ? 'text-primary' : ''}`}>
                    <p><FontAwesomeIcon className='mr-2' icon={faPeopleGroup} /> {isSidebar && 'Community'}</p>
                    {isSidebar && <FontAwesomeIcon icon={faChevronDown} className={`ml-2 transition-transform ${isDropdownOpen === 2 ? 'rotate-180' : ''}`} />}
                </p>
                <div className={`overflow-hidden ${isDropdownOpen === 2 ? 'dropdown-enter-active' : 'dropdown-enter'}`}>
                    <div className='flex flex-col'>
                        <Link
                            to={'/community'}
                            className={`pl-10 p-3 rounded transition-all duration-300 ${activeLink === '/community' ? 'bg-[#F5CF6B] text-black' : 'hover:text-primary hover:text-[#F5CF6B]'}`}
                            onClick={() => setActiveLink('/community')}
                        >
                            <FontAwesomeIcon className='mr-2' icon={faPeopleGroup} /> {isSidebar && 'Community'}
                        </Link>
                        <Link
                            to={'/community/network'}
                            className={`pl-10 p-3 rounded transition-all duration-300 ${activeLink === '/community/network' ? 'bg-[#F5CF6B] text-black' : 'hover:text-primary hover:text-[#F5CF6B]'}`}
                            onClick={() => setActiveLink('/community/network')}
                        >
                            <FontAwesomeIcon className='mr-2' icon={faNetworkWired} /> {isSidebar && 'Network'}
                        </Link>
                        <Link
                            to={'/community/messages/'}
                            className={`pl-10 p-3 rounded transition-all duration-300 ${activeLink === '/community/messages/' ? 'bg-[#F5CF6B] text-black' : 'hover:text-primary hover:text-[#F5CF6B]'}`}
                            onClick={() => setActiveLink('/community/messages/')}
                        >
                            <FontAwesomeIcon className='mr-2' icon={faMessage} /> {isSidebar && 'Messages'}
                        </Link>
                        <Link
                            to={'/community/colloboration/'}
                            className={`pl-10 p-3 rounded transition-all duration-300 ${activeLink === '/community/colloboration/' ? 'bg-[#F5CF6B] text-black' : 'hover:text-primary hover:text-[#F5CF6B]'}`}
                            onClick={() => setActiveLink('/community/colloboration/')}
                        >
                            <FontAwesomeIcon className='mr-2' icon={faGroupArrowsRotate} /> {isSidebar && 'Collaboration'}
                        </Link>
                        <Link
                            to={'/community/notification/'}
                            className={`pl-10 p-3 rounded transition-all duration-300 ${activeLink === '/community/notification/' ? 'bg-[#F5CF6B] text-black' : 'hover:text-primary hover:text-[#F5CF6B]'}`}
                            onClick={() => setActiveLink('/community/notification/')}
                        >
                            <FontAwesomeIcon className='mr-2' icon={faBell} /> {isSidebar && 'Notifications'}
                        </Link>
                    </div>
                </div>
                <Link
                    to={'/training/Training_program/'}
                    className={`p-3 rounded transition-all duration-300 ${activeLink === '/training/Training_program/' ? 'bg-[#F5CF6B] text-black' : 'hover:text-primary hover:text-[#F5CF6B]'}`}
                    onClick={() => setActiveLink('/training/Training_program/')}
                >
                    <FontAwesomeIcon className='mr-2' icon={faCashRegister} /> {isSidebar && 'Jobs and Internships'}
                </Link>
                <p onClick={logout} className='cursor-pointer p-3 rounded transition-all duration-300 hover:text-primary hover:text-[#F5CF6B]'>
                    <FontAwesomeIcon className='mr-2' icon={faSignOut} /> {isSidebar && 'Logout'}
                </p>
            </nav>
        </>
    );
};

export default Sidebar;
