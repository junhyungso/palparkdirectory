import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Homepage from './pages/Homepage';
import Layout from './layout/Layout';
import Restaurants from './pages/Restaurants';
import Doctors from './pages/Doctors';
import Entertainment from './pages/Entertainment';
import Others from './pages/Others';

function App() {
  return (
    <Router>
      <Layout>
				<Switch>
				<Route path='/' exact>
						<Homepage />
					</Route>
					<Route path='/restaurants'>
						<Restaurants />
					</Route>
					<Route path='/doctors'>
						<Doctors />
					</Route>
					<Route path='/entertainment'>
						<Entertainment />
					</Route>
					<Route path='/others'>
						<Others />
					</Route>
				</Switch>
			</Layout>
    </Router>

  );
}

export default App;
