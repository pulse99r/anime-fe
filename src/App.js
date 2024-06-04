import react from 'react'
import Nav from './components/nav'
import Users from './components/Users'
import MainPage from './components/pages/main-page'

import './App.css';

function App() {

  return (
    <div className="App">
      <Nav />
      <MainPage/>
      {/* <Users/> */}
    </div>
  );
}

export default App;
