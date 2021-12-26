

import './App.css';
import './fonts.css';


import 'bootstrap/dist/css/bootstrap.min.css';


// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// Screens
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import EditScreen from './screens/EditScreen';
import BrowseScreen from './screens/BrowseScreen';
import NewPoemScreen from './screens/NewPoemScreen';
import ViewPoemScreen from './screens/ViewPoemScreen';
import ChangelogScreen from './screens/ChangelogScreen';


function App() {

  let footerStyle = {
    paddingTop: "60px",
    paddingBottom: "60px"
  }

  return (
    <div className="App">
      <Router>
        {/*<TestNavBar />*/}
        <Routes>
          <Route path="/" element={<HomeScreen />}>
          </Route>
          <Route path="/home" element={<HomeScreen />}>
          </Route>
          <Route path="/register" element={<RegisterScreen />}>
          </Route>
          <Route path="/login" element={<LoginScreen />}>
          </Route>
          <Route path="/browse" element={<BrowseScreen />}>
          </Route>
          <Route path="/edit" element={<EditScreen />}>
          </Route>
          <Route path="/new" element={<NewPoemScreen />}>
          </Route>
          <Route path="/view" element={<ViewPoemScreen />}>
          </Route>
          <Route path="/changelog" element={<ChangelogScreen />}>
          </Route>
        </Routes>
      </Router>

      <div style={footerStyle}>
        <p>verse-vs.com is designed by Joshua Maza, Hannah Maza, and John Maza 2021</p>
        <p>© Joshua Maza. All rights reserved.</p>
      </div>

      
    </div>
  );
}

export default App;
