import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff', display: 'inline', justifyContent: 'center' }}>
      <Link to="/" style={{ margin: '0 15px', color: '#fff' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 15px', color: '#fff' }}>About</Link>
      <Link to="/services" style={{ margin: '0 15px', color: '#fff' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 15px', color: '#fff' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;