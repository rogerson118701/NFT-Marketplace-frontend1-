import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/header/header';
import Navbar from './component/navbar';
import Colleaction from './component/colleaction/Colleaction';
import FeaturedArtworks from './component/featuredartworks/FeaturedArtworks';
import TopCreator from './component/topcreator/TopCreator';
// import { WagmiConfig, createConfig, mainnet } from 'wagmi'
// import { createPublicClient, http } from 'viem'

// const config = createConfig({
//   autoConnect: true,
//   publicClient: createPublicClient({
//     chain: mainnet,
//     transport: http()
//   }),
// })

const routes = [
  { path: "/", component: Header, exact: true },
  { path: "/Products", component: Colleaction },
  { path: "/Pricing", component: FeaturedArtworks },
  { path: "/Blog", component: TopCreator },
];


function App() {
  return (

      <Router>
        <Navbar></Navbar>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={index}
              />
            );
          })}
        </Switch>
      </Router>
  );
}

export default App;
