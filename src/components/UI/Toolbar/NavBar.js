import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {

	const history = useNavigate();

    const userlogout = ()=>{
		localStorage.removeItem("user_login")
		history("/")
	}
return(
	<>
	<Navbar bg="dark" variant="dark">
	<Container>
        <Nav className='mx2'>
			<NavLink to="/home" className="text-decoration-none text-light mx-2 ">Home</NavLink>
			<NavLink to="/employees" className="text-decoration-none text-light mx-2">Employees</NavLink>
			<NavLink to="/projects" className="text-decoration-none text-light mx-2">Projects</NavLink>
			{/* <NavLink to="/tasks" className="text-decoration-none text-light mx-2">Tasks</NavLink> */}
			</Nav>
			<Nav>
			<Button className='danger' onClick={userlogout}>LogOut</Button>
			</Nav>
      </Container>

	</Navbar>
	</>
)
}

export default NavBar;