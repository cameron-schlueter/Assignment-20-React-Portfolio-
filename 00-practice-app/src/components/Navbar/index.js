import Nav from 'react-bootstrap/Nav';

function NavBar({currentPage, handlePageChange}) {
  return (
    <Nav className='border-3'
      activeKey="/home"
      onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="#home" onClick={() => handlePageChange("home")}>Home</Nav.Link>
        
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#about" onClick={() => handlePageChange("about")}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#portfolio" onClick={() => handlePageChange("portfolio")}>Portfolio</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;