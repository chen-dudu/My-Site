import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home_en from "./pages-en/Home";
import Contact_en from "./pages-en/Contact";
import Study_en from "./pages-en/Study";

import Home_cn from "./pages-cn/Home";
import Contact_cn from "./pages-cn/Contact";
import Study_cn from "./pages-cn/Study";

import NotFound_en from "./pages-en/NotFound";
import NotFound_cn from "./pages-cn/NotFound";


function App() {
  return (
    <Router>
        <Switch>
            {/*<Route />*/}

            {/* english pages */}
            <Route exact = {true} path = "/my-site/" component={Home_en}/>
            <Route exact = {true} path = "/my-site/Contact" component={Contact_en}/>
            <Route exact = {true} path = "/my-site/Study" component={Study_en}/>


            {/* chinese pages */}
            <Route exact = {true} path = "/my-site/cn/" component={Home_cn}/>
            <Route exact = {true} path = "/my-site/cn/Contact" component={Contact_cn}/>
            <Route exact = {true} path = "/my-site/cn/Study" component={Study_cn}/>

            {/* 404 page in chinese */}
            {/*<Route exact path = "/a" component={NotFound_cn} />*/}

            {/* 404 page in english */}
            <Route component={NotFound_en}/>
        </Switch>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       {/*Edit <code>src/App.js</code> and save to reload.*/}
    //       Edit src/App.js and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
