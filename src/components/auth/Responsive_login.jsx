import Styles from "../../styles/auth/Responsivelogin.module.css";
import logo from "../../assets/images/quantslogo.jpg";
import { Link } from "react-router-dom";

const ResponsiveLogin = () => {
    return (
        <>
            <div className="container-fluid g-0">
                <div className={`${Styles.backgroundimg}`}></div>
                <div className={`${Styles.loginform}`}>
                    <form className="w-100 p-4 d-flex flex-column align-items-center">
                        <span className={`${Styles.login}`}>Login</span>
                        <div className={`form-group ${Styles.formgroup} w-50`}>
                            <span className={` ${Styles.inputicon}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg></span>
                            <input type="text" className={`form-control ${Styles.formcontrol}`} placeholder="Type your user id" />
                        </div>

                        <div className={`form-group ${Styles.formgroup} w-50 `}>
                            <span className={`${Styles.inputicon}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3" />
                            </svg></span>
                            <input type="password" className={`form-control ${Styles.formcontrol}`} placeholder="Type your password" />
                        </div>

                        <div className="text-end mb-3 w-50">
                            <Link to={"#"} className="text-decoration-none">Forgot password?</Link>
                        </div>

                        <button type="submit" className={` ${Styles.login_btn} w-50`}>Log in</button>

                        <span className="mt-4"><img src={logo} alt="image" height={40} /> <span className={`${Styles.text} text-muted`}> Staff-only access to the management portal.</span> </span>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ResponsiveLogin;