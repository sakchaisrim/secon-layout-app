import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
// import Cart from './pages/Cart'
import Cart2 from './pages/Cart2'
import Count from './pages/Count'
import Home from "./pages/Home"

const App = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/cart2" component={Cart2} />
      <Route path="/count" component={Count} />
      
    </Switch>
  )
}

export default App





