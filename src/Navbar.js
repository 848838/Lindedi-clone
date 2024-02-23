import React from 'react'
import { useState } from 'react'
import content from './assets2/main.jpg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar(props) {
    let Navigate = useNavigate()
    const handlelogout = ()=>{
        localStorage.removeItem('token')
        Navigate('/login')
    }
    
    const host = "localhost:5000"
    const [displayon, setdisplayon] = useState(true)
    const display = () => {
        if (!displayon) {
            setdisplayon(true)
        } else {
            setdisplayon(false)
        }
    }
    const [displayontwo, setdisplayontwo] = useState(true)
    const displaytwo = () => {
        if (!displayontwo) {
            setdisplayontwo(true)
        } else {
            setdisplayontwo(false)
        }
    }
    const [displayonthree, setdisplayonthree] = useState(true)
    const displaythree = () => {
        if (!displayonthree) {
            setdisplayonthree(true)
        } else {
            setdisplayonthree(false)
        }
    }
    return (
        <>
            <div>

                <nav className="navbar navbar-expand-lg bg-body-tertiary   " >
                    <div className="container-fluid  mx-5">
                        <a className="navbar-brand" to="#"><img style={{ width: '5vh' }} src={content}></img></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>



                        {/* home start here */}

                        <div className="collapse navbar-collapse mx-5  " id="navbarSupportedContent"  >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li><NavLink to='/home'>{
                                    //    home
                                    displayon ?
                                        (<i to='/home' onClick={display} style={{ fontSize: 25, cursor: 'pointer', }} className="bi bi-house-door mx-3 " > </i>) : (<i onClick={display} style={{ fontSize: 24, cursor: 'pointer', transition: '0.1s' }} className="bi bi-house-door-fill mx-3"></i>)
                                }   </NavLink> </li>
                                <li className="nav-item mx-4      ">
                                    {/* posot */}
                                    {
                                        displayontwo ?
                                            (<i onClick={displaytwo} style={{ fontSize: 25, cursor: 'pointer' }} className="bi bi-reception-3 mx-2"></i>) : (<i onClick={displaytwo} style={{ fontSize: 24, cursor: 'pointer', transition: '0.1s' }} class="bi bi-reception-2 mx-2"></i>)

                                    }
                                </li>
                                <li className="nav-item dropdown mx-4   ">
                                    {/* jobs     */}
                                    {
                                        displayonthree ?
                                            (<i to='/' onClick={displaythree} style={{ fontSize: 25, cursor: 'pointer' }} className="bi bi-briefcase-fill mx-2"></i>) : (<i onClick={displaythree} style={{ fontSize: 24, cursor: 'pointer', transition: '0.1s' }} className="bi bi-wallet-fill mx-2"></i>)
                                    }


                                </li>
                                <li className="nav-item dropdown mx-4    ">

                                    {/*message */}
                                    <i style={{ fontSize: 25, cursor: 'pointer', transition: '3s' }} className="bi bi-chat-dots-fill mx-2"></i>


                                </li>
                                <li className="nav-item dropdown mx-4    ">

                                    {/* noti */}

                                    <span style={{ fontSize: "10px" }} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger my-2 mx-0">  99+</span>
                                    <i style={{ fontSize: 25, cursor: 'pointer', transition: '3s' }} className="bi bi-bell mx-2"></i>

                                </li>
                                <li className="nav-item dropdown mx-">

                                    <li className="nav-item dropdown mx-5  mb-2 mb-lg-0" style={{ listStyle: 'none', borderLeft: '2px solid #b5abaa' }} >
                                        <a className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Profile
                                            <i style={{ fontSize: 19 }} className="bi bi-circle mx-2"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" to="/">Profile View</a></li>
                                            <li><a className="dropdown-item" to="/">Privacy</a></li>
                                            <li><a className="dropdown-divider"></a></li>
                                            {
                                               !localStorage.getItem('token')?
                                            (<li><NavLink className="dropdown-item" to="/login">Login</NavLink></li>):(<li><NavLink onClick={handlelogout} className="dropdown-item" to="/login">Log-out</NavLink></li>)
                                        }
                                        <li><NavLink className="dropdown-item" to="/Signup">Signup</NavLink></li>
                                            
                                        </ul>
                                    </li>

                                </li>

                            </ul>


                            <li className="nav-item dropdown mx-5  mb-2 mb-lg-0" style={{ listStyle: 'none', borderLeft: '1px solid #b5abaa' }} >
                                <a className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-building"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" to="/">Action</a></li>
                                    <li><a className="dropdown-item" to="/">Another action</a></li>
                                    <li><a className="dropdown-divider"></a></li>
                                    <li><a className="dropdown-item" to="/">Something else here</a></li>
                                </ul>
                            </li>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                            </form>
                            <button className='btn btn-primary'>

                            </button>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar
