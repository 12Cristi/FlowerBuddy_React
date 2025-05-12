import { Link } from 'react-router'
import './NavBarList.css'

const NavBarList = () => {
  return (<>
    <div id='navbar-list'>
      <Link to='/buchete-flori' style={{ textDecoration: 'none' }}>Buchete flori</Link>
      <Link to='/aranjamente-florale' style={{ textDecoration: 'none' }}>Aranjamente florale</Link>
      <Link to='/flori-artificiale' style={{ textDecoration: 'none' }}>Flori artificiale</Link>
      <Link to='/flori-uscate' style={{ textDecoration: 'none' }}>Flori uscate</Link>
      <Link to='/plante-interior' style={{ textDecoration: 'none' }}>Plante de interior</Link>
      <Link to='/evenimente' style={{ textDecoration: 'none' }}>Evenimente</Link>
      <Link to='/ingrijire-plante' style={{ textDecoration: 'none' }}>Ingrijire plante</Link>
    </div>
  </>
  )
}

export default NavBarList