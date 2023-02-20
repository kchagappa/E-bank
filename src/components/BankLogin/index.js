import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class BankLogin extends Component {
  state = {userId: '', pin: '', error: '', isError: false}

  changeUserId = event => {
    this.setState({userId: event.target.value})
  }

  changePin = event => {
    this.setState({pin: event.target.value})
  }

  getSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  errorData = errMsg => {
    this.setState({error: errMsg, isError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {
      user_id: userId,
      pin,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/ebank/login', options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.getSuccess(data.jwt_token)
    } else {
      this.errorData(data.error_msg)
    }
  }

  render() {
    const {error, isError, userId, pin} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="login-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="login-img"
          />
        </div>
        <div className="login-form">
          <h1 className="login-heading">Welcome Back!</h1>

          <form className="form" onSubmit={this.submitForm}>
            <label htmlFor="userid" className="label">
              User ID
            </label>
            <input
              type="text"
              id="userid"
              placeholder="Enter User ID"
              className="input"
              value={userId}
              onChange={this.changeUserId}
            />
            <label htmlFor="pin" className="label">
              PIN
            </label>
            <input
              type="password"
              id="pin"
              placeholder="Enter PIN"
              className="input"
              value={pin}
              onChange={this.changePin}
            />
            {isError && <p className="error">{error}</p>}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default BankLogin
