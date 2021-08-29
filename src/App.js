import LandingPage from './views/landing-page/LandingPage';
import Payments from './views/payments-page/Payments';
import Pricing from './views/pricing-page/Pricing';
import { Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/pricing' component={Pricing} />
        <Route path='/payment' component={Payments} />
        <Route><h1>Not Found</h1></Route>
      </Switch>
    </div>
  );
}

export default App;
