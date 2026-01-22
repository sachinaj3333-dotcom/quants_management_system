import img from "../../assets/images/login_image.avif";
import logo from "../../assets/images/quantslogo.jpg";
import Styles from "../../styles/auth//Login.module.css";

const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row vh-100">

          <div className="col-lg-6  d-flex justify-content-center align-items-center">
            <img src={img} alt="image" height={"65%"} />
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <span className={`${Styles.login}`}>Login</span>
            <form className="w-100 p-4 d-flex flex-column align-items-center">
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
                <i className={`bi bi-lock input-icon ${Styles.inputicon}`}></i>
                <input type="password" className={`form-control ${Styles.formcontrol}`} placeholder="Type your password" />
              </div>

              <div className="text-end mb-3 w-50">
                <a href="#" className="text-decoration-none">Forgot password?</a>
              </div>

              <button type="submit" className={` ${Styles.login_btn} w-50`}>Log in</button>
            </form>
              <span><img src={logo} alt="image" height={50} /><span className={`${Styles.text} text-muted`}> Staff-only access to the management portal.</span></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;