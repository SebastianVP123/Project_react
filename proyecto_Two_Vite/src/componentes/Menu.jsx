import { Link } from 'react-router-dom';
const Menu = () => {
return (
<nav style={{ margin: '1rem 0' }}>
{/* Usamos Link en lugar de <a> para navegación interna */}
<Link to="/Inicio">Inicio</Link>
<Link to="/Nosotros">Nosotros</Link>
</nav>
);
};
export default Menu;