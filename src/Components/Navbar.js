import {Navbar,Container,Nav,NavDropdown, Form, FormControl} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function Navb({setSearchTitle,setSearchRate}) {
    const ratingChanged = (newRating) => {
        setSearchRate(newRating);
        };
    
    return(
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#">Movies Show</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Nav.Link as={Link} to='/' >Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => {setSearchTitle(e.target.value)}}
                    />
                </Form>
                <ReactStars count={5} size={30} isHalf={true} activeColor="#ffd700" onChange={ratingChanged} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navb