import {react, useEffect, useState} from 'react'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL;

function Users() {

  const [userData, setUserData] = useState([])

  useEffect(() => {
     axios.get(`${API}/users`).then((response) => {
       setUserData(response.data)
     }).catch((error) => console.warn('catch, error'));

  }, [])

  
    
    console.log(userData)

  return (
    <div className="Users">
      <p>This will show the users and animes</p>
    </div>
  );
}

export default Users;
