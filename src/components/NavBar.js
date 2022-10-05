import { Container, Nav, Navbar } from  "react-bootstrap"
import { Link } from "react-router-dom";
import './NavBar.css';
import CartWidget from "./CartWidget/CartWidget";
import logo from '../assets/132030120-logotipo-de-icono-de-mascota-de-amor-rastro-de-perro-con-corazón-aislado-sobre-fondo-blanco-.webp'

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light" className="navbar">
            <Container>
                <Navbar.Brand as={Link}to='/' >
                  
                    PetShop
                    <img className="logo" src ={logo} />

                </Navbar.Brand> 
                <Nav>
                    <Nav.Link as={Link}to='/' className="home">
            
                        Home
    
                       
                        </Nav.Link>
                    <Nav.Link as={Link}to='/category/alimentos' >Alimentos</Nav.Link>
                    <Nav.Link as={Link}to='/category/juguetes' >Juguetes</Nav.Link>
                    <Nav.Link as={Link}to='/category/ropa' >Ropa</Nav.Link>
                    </Nav>  
                    <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;