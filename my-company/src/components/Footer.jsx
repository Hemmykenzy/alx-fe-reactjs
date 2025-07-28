import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      padding: '2rem 0',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {/* Company Info */}
        <div>
          <h3 style={{ color: '#3498db', marginBottom: '1rem' }}>MyCompany</h3>
          <p style={{ lineHeight: '1.6' }}>
            Providing innovative solutions since 2010. We specialize in web development, 
            digital marketing, and business consulting.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><a href="/" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/about" style={{ color: '#ecf0f1', textDecoration: 'none' }}>About Us</a></li>
            <li><a href="/services" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Services</a></li>
            <li><a href="/contact" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Contact Us</h4>
          <div style={{ lineHeight: '2' }}>
            <p>123 Business Street</p>
            <p>City, State 10001</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@mycompany.com</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Follow Us</h4>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
            <a href="#" style={{ color: '#ecf0f1' }}><FaFacebook /></a>
            <a href="#" style={{ color: '#ecf0f1' }}><FaTwitter /></a>
            <a href="#" style={{ color: '#ecf0f1' }}><FaLinkedin /></a>
            <a href="#" style={{ color: '#ecf0f1' }}><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        textAlign: 'center',
        marginTop: '2rem',
        paddingTop: '1rem',
        borderTop: '1px solid #34495e'
      }}>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;