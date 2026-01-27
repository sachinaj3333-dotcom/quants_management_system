import Styles from "../../styles/Admin/Dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <div className={`${Styles.header} container-fluid align-items-center d-flex `}>
        <h4 className={`ms-4 ${Styles.headername}`}>Dashboard</h4>
      </div>

      <div className={`${Styles.dashboard_main} container-fluid p-4`}>
        <div className="row p-3">
          <div className="col-3 p-3">
            <div className={`${Styles.dashboard_card} bg-success p-3`}>
              <div className="row">
                <div className="col-4">
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg></span>
                </div>
                <div className="col-8">
                  <h5>Total Students</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;