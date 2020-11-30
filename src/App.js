import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home_en from "./pages-en/Home";
import Home_cn from "./pages-cn/Home";
import Contact_en from "./pages-en/Contact";
import Contact_cn from "./pages-cn/Contact";
import NotFound_en from "./pages-en/NotFound";
import NotFound_cn from "./pages-cn/NotFound";


function App() {
  return (
    <Router>
        <Switch>
            {/*<Route />*/}

            {/* english pages */}
            <Route exact path = "/" component={Home_en}/>
            <Route exact path = "/Contact" component={Contact_en}/>


            {/* chinese pages */}
            <Route exact path = "/cn/" component={Home_cn}/>
            <Route exact path = "/cn/Contact" component={Contact_cn}/>
            {/*<Route exact path = "/cn/contact" component={Contact_cn}/>*/}

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
