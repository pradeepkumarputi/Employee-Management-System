import './App.css'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage.jsx';
import React,{ useContext, useEffect,useState } from 'react';
import { AuthContext } from './context/AuthProvider.jsx';
function App() {

// useEffect(() => {
//     setLocalStorage();
//     getLocalStorage();
    
// }, )

const [user, setUser] = useState(null);
const [loggedInUserData, setLoggedInUserData] = useState(null);
const authData = useContext(AuthContext);

// useEffect(() => {
//   if (authData) {
//     const loggedInUser = localStorage.getItem('loggedInUser');
//     if (loggedInUser) {
//       setUser(loggedInUser.role);
//     }
//   }
// }, [authData]);





const handleLogin = (email,password) => {
  if(email =='admin@me.com' && password=='123'){
    setUser('admin');
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
   

  }else if(authData){
    const employee = authData.employees.find((e) =>email == e.email && password == e.password);
    if(employee){
      setUser('employee');
      setLoggedInUserData(employee);  
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
    }
    
    
  }
  else{
    alert('Invalid credentials');
  }
}



  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard/> :'' }
      {user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : ''}
      
      {/* <Login/> */}

      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
