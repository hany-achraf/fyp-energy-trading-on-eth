import React, { useEffect, useState } from "react"
import { Container, Navbar, NavItem, Nav, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { GiElectric } from "react-icons/gi"

const CustomNavbar = ({ isAdmin, logout }) => {
    const [active, setActive] = useState('/')

    useEffect(() => {
      setActive(window.location.pathname)
    }, [])
    
    const navigate = useNavigate()

    const handleLogout = (e) => {
      e.preventDefault()
      logout()
      navigate('/', { replace: true })
    }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h4 className="d-inline"><GiElectric /> Energy Trading on Blockchain</h4>
          {isAdmin && <p className="d-inline text-muted"> (You're logged in as Admin)</p>}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" activeKey={active} onSelect={(selectedKey) => setActive(selectedKey)}>
            {
              isAdmin 
                ?
                  <NavItem>
                    <Nav.Link as={Link} to="/conflicts" eventKey="/conflicts" >Conflicts</Nav.Link>
                  </NavItem>
                :
                  <>
                    <NavItem>
                      <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
                    </NavItem>
                    <NavItem>
                      <Nav.Link as={Link} to="/my-opened-trades" eventKey="/my-opened-trades">My Opened Trades</Nav.Link>
                    </NavItem>
                  </>
            }
            <NavItem>
              <Nav.Link as={Link} to="/closed-trades" eventKey="/closed-trades" >View Closed Trades</Nav.Link>
            </NavItem>
            <NavItem>
              <Button variant="danger" className="text-light lead" onClick={(e) => handleLogout(e)}>Logout</Button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar