import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes/Routes';
import NavBar from './Navigation/NavBar';
import userContext from './Context/userContext';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function App() {
  
  const INITIAL_USER_STATE = {
    firstName: '',
    lastName: '',
    email: ''
  }

  // State to hold current user data. 
  const [user, setUser] = useState(INITIAL_USER_STATE);

  // History object used to go back to home page. 
  const history = useHistory();

  // List of user functions used throughout the entire app via useContext().
  const userFunctions = {
    register: register,
    user: user
  }
  
  /** Handle user registers. */
  async function register(newUser) {
    setUser(newUser);
    await axios.post('http://localhost:3001/users', newUser);
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <userContext.Provider value={userFunctions}>
          <NavBar/>
          <Routes/>
        </userContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
