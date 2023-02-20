import {Switch, Route} from 'react-router-dom'
import BankLogin from './components/BankLogin'
import './App.css'
import Ebank from './components/Ebank'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/ebank/login" component={BankLogin} />
      <ProtectedRoute exact path="/" component={Ebank} />
      <Route exact component={NotFound} />
    </Switch>
  </>
)

export default App
