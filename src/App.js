import './App.css';

// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// Components
import TestNavBar from './components/TestNavBar';


// Screens
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import EditScreen from './screens/EditScreen';
import BrowseScreen from './screens/BrowseScreen';

function App() {
  return (
    <div className="App">
      <h1>VerseVS</h1>
      <Router>
        <TestNavBar />
        <Routes>
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
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
