import Styles from "../../styles/Admin/Sidebar.module.css";
import logo from "../../assets/images/quantslogo.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className={`${Styles.sidebar_nav}`}>
                <div className="container-fluid d-flex align-items-center h-100">
                    <span>
                        <img src={logo} alt="image" height={40} className={`${Styles.logo}`} />
                    </span>
                    <span className={`${Styles.institute_name} ms-3`}>Quants Academy</span>
                </div>
            </div>

            <div className={`${Styles.sidebar_body}`}>
                <ul className={`${Styles.sidebar_ul}`}>
                    <Link to={"#"}>
                        <li className={`${Styles.sidebar_li} mx-3`}>Dashboard</li>
                    </Link>
                    <Link to={"#"}> 
                        <li className={`${Styles.sidebar_li} mx-3`}>Registration</li>
                    </Link>
                    <Link to={"#"}>
                        <li className={`${Styles.sidebar_li} mx-3`}>Overview</li>
                    </Link>
                    <Link to={"#"}>
                        <li className={`${Styles.sidebar_li} mx-3`}>Details</li>
                    </Link>
                    <Link to={"#"}>
                        <li className={`${Styles.sidebar_li} mx-3`}>Setting</li>
                    </Link>
                    <Link to={"#"}>
                        <li className={`${Styles.sidebar_li} mx-3`}>Logout</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;