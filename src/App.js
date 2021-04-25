
import './App.css';
import axios from 'axios'
import UserList from "./UserList";
import React, { useEffect, useState } from 'react'

function App() {
  const [error, setError] = useState(null);
  const [listOfUSer, setListOfUSer] = useState()
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users?fbclid=IwAR2Sc2y02uOvhU4SaTNRYv12GXb5Hs1QmGF5vpzm4rz6pQXngVJdj91sWC8")
         
        .then(res=>{setListOfUSer(res.data); console.log(res.data)})
        .catch(err=>{setError(err); console.log(error)})
        },[])
        console.log(listOfUSer)
  return (
    <div className="App">
      {listOfUSer && listOfUSer.map((el)=> <div className="user"><UserList el= {el}/></div>) }
     

    </div>
  );
}

export default App;
