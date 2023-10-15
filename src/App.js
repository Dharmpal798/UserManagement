import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import ContactPage from "./pages/contact/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
