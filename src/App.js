
import './App.css';
import Users from './components/Users';
import Profile from './components/Profile/Profile';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />}/>
        <Route path="/user/:UserId" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
