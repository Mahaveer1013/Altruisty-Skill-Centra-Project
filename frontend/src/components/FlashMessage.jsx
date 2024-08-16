import React, { useEffect } from 'react'
import { useAuth } from '../AuthContext'

const FlashMessage = () => {

    const { flash, setFlash } = useAuth();

    useEffect(() => {
        setTimeout(() => {
            setFlash(null);
        }, 4000)
    }, [flash])
    return (
        flash &&
        <div className={flash[type] === 'error' ? 'bg-red-500' : 'bg-green-600'}>Login Successfull</div>
    )
}

export default FlashMessage