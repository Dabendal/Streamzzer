
import './Home.css';
import {data} from './mockdata';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';







const Home = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );

    return ( 
      
        <div className="home">
                <img className='w-full h-[440px] object-cover'src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80' 
                 alt=''>
                </img>
                <div className="relative flex items-center">
                    <MdChevronLeft className='opacity-100 cursor-pointer hover:opacity-100' onClick={slideLeft}  size={40}/>
                    <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {data.map((item)=>(
                        <img className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt='/' />
                    ))}
                    </div>
                    <MdChevronRight className='opacity-100 cursor-pointer hover:opacity-100'onClick={slideRight} size={40}/>
                </div> 
                <ColoredLine color="white" />
                <Navbar variant="dark">
      <Container maxWidth='full'>
        <Navbar.Brand >Sort by</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown id="nav-dropdown-dark-example" title="Name" menuVariant="dark" >
              <NavDropdown.Item >Ascending</NavDropdown.Item>
              <NavDropdown.Item >Descending</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown id="nav-dropdown-dark-example" title="Release Date" menuVariant="dark" >
            <NavDropdown.Item >Ascending</NavDropdown.Item>
              <NavDropdown.Item >Descending</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown id="nav-dropdown-dark-example" title="Genre" menuVariant="dark" >
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item > Adventure</NavDropdown.Item>
              <NavDropdown.Item >Fiction</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container fluid>
      <Row>
      <div class="col-md-3 light-panel mt-4"><img src="https://i.imgur.com/mqrSBpt.jpg" alt=""/> <a href="/create" class="text-white text-decoration-none"  >John Wick Chapter 4</a></div>
      <div class="col-md-3 light-panel mt-4"><img src="https://i.imgur.com/R1THVsE.jpg" alt=""/> <a href="/create" class="text-white text-decoration-none" q  >                       Life</a></div>
      <div class="col-md-3 light-panel mt-4"><img src="https://i.imgur.com/Xh5ZzUA.jpg" alt=""/> <a href="/create" class="text-white text-decoration-none"  >SpiderHead</a></div>
      
      </Row>
      <Row>
      <div class="col-md-3 light-panel mt-4"><img src="https://i.imgur.com/6d8wBaZ.jpg" alt=""/> <a href="/create" class="text-white text-decoration-none"  >Titanic</a></div>
      <div class="col-md-3 light-panel mt-4"><img src="https://i.imgur.com/4jS1WTn.jpg" alt=""/> <a href="/create" class="text-white text-decoration-none"  >John Wick</a></div>
      <div class="col-md-3 light-panel mt-4"><img src="https://i.imgur.com/ggoCHx8.jpg" alt=""/> <a href="/create" class="text-white text-decoration-none"  >Kings of the Future</a></div>
      
      </Row>
      <Row>
      <div class="col-md-3 light-panel mt-4"><img src="https://i.imgur.com/0cYnyRh.jpg" alt=""/> <a href="/create" class="text-white text-decoration-none"  >Replicas</a></div>
      <div class="col-md-3 light-panel mt-4"><img src="https://i.imgur.com/bBsv4pB.png" alt=""/> <a href="/create" class="text-white text-decoration-none"  >The Gray Man</a></div>
      <div class="col-md-3 light-panel mt-4"><img src="https://i.imgur.com/iKnM66l.jpg" alt=""/> <a href="/create" class="text-white text-decoration-none"  >Jack Mimoun : Les secrets de Valverde</a></div>
      
      </Row>
    </Container>

        </div>
     );
}   

 
export default Home;