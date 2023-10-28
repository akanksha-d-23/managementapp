import React, {useEffect , useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
      })
    })
  },[])
  return (
    <>
    <div className="App">
      <div className='container' style={{color : 'darkcyan'}}>
        <h2 style={{color : 'darkcyan'} }>Users Data</h2>
        <table className='table table-bordered'style={{color : 'darkindigo'}}>
        <thead>
        <tr className='col-md-6'>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Street</th>
          <th>Suite</th>
          <th>City</th>
          <th>Zipcode</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company Name</th>
          <th>Catch Phrase</th>
          <th>Business</th>
        </tr>
      </thead>
      <tbody className='col-md-6'>
        { data.map((userData)=>
        <tr className='col-md-6'>
          <td className='col-md-6'>{userData.id}</td>
          <td className='col-md-6'>{userData.name}</td>
          <td className='col-md-6'>{userData.username}</td>
          <td className='col-md-6'>{userData.email}</td>
          <td className='col-md-6'>{userData.address.street}</td>
          <td className='col-md-6'>{userData.address.suite}</td>
          <td className='col-md-6'>{userData.address.city}</td>
          <td className='col-md-6'>{userData.address.zipcode}</td>
          <td className='col-md-6'>{userData.address.geo.lat}</td>
          <td className='col-md-6'>{userData.address.geo.lng}</td>
          <td className='col-md-6'>{userData.phone}</td>
          <td className='col-md-6'>{userData.website}</td>
          <td className='col-md-6'>{userData.company.name}</td>
          <td className='col-md-6'>{userData.company.catchPhrase}</td>
          <td className='col-md-6'>{userData.company.bs}</td>
        </tr>

)}
      </tbody>
        </table>
        </div>
    </div>
    </>
  );
}

export default App;
