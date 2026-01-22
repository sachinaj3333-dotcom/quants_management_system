import { useEffect, useState } from 'react'
import ResponsiveLogin from '../components/auth/Responsive_login';
import Login from '../components/auth/login';

const Auth = () => {

    const [mobileView, setMobileView] = useState(false);
    useEffect(() => {
            window.addEventListener('resize', () => {
                if (window.innerWidth <= 1000) {
                    setMobileView(true);
                } else {
                    setMobileView(false);
                }
            });
    }, []);


    return (
        <>
            {mobileView ? (
                <ResponsiveLogin />
            ) : (
                <Login />
            )}
        </>
    )
}

export default Auth;