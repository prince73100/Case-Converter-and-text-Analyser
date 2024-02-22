//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Component/About';
import Navebar from './Component/Navebar';
import Textform from './Component/Textform';
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [mode, Setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      Setmode('dark')
      document.body.style.backgroundColor = '#09233f'
      showAlert("Dark mode is enable", "succese");
      //document.title ='Dark Mode'
    }
    else {
      Setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enable", "succese");
      //document.title = 'Light mode'
    }
  }

  return (

    <Router>
      <Navebar title="Text-Util" text_about="About text" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <Textform text="Enter the text to analyze" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
