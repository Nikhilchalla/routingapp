
import {Routes,Route,NavLink,Navigate} from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import Technologies from './components/Technologies'
import ContactUs from './components/ContactUs'
import HTML from './components/Html'
import Javascript from './components/Javascript'
import Footer from './components/Footer'
import Register from './components/Registration'

function App() {
  return (
    <div>
      {/*links to routes*/}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MyApp</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="users">Users</NavLink>
              </li>
    
              <li className="nav-item">
                <NavLink className="nav-link " to="contactus">ContactUs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="register">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="technologies">Technologies</NavLink>
              </li>
              
            </ul>
          
          </div>
       </div>
</nav>
 

      {/*define routes for childern*/}
      <Routes>
        {/*route for home*/}
        <Route path="/" element={<Home/>}/>
        {/*route for users*/}
        <Route path="/users" element={<Users/>}/>
        {/*route for  registrations */}
        <Route path="/register" element={<Register/>}/>
        {/*route for technologies*/}
        <Route path="/technologies" element={<Technologies/>}>
            <Route path="" element={<HTML />}/>
            {/*redirect to html by default */}
            <Route path='' element={<Navigate replace to="html" />}/>
            <Route path="javascript" element={<Javascript />} />
        </Route>
        {/*route for contactus*/}
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
      {/* <Footer/> */} 
    </div>
  );
}

export default App;
