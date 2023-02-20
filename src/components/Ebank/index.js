import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Ebank extends Component {
  render() {
    const logoutData = () => {
      const {history} = this.props
      Cookies.remove('jwt_token')
      history.replace('/ebank/login')
    }

    return (
      <div className="home-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png "
            alt="website logo"
            className="home-logo"
          />
          <button type="button" className="logout-btn" onClick={logoutData}>
            Logout
          </button>
        </div>
        <div className="home-content">
          <h1 className="home-head">Your Flexibility, Our Excellence</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
            className="home-img"
          />
        </div>
      </div>
    )
  }
}

export default withRouter(Ebank)
