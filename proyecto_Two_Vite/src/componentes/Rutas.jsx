import { Routes, Route } from 'react-router-dom';

// Routes S= Agrupa todas las rutas
//Route = Define cada ruta o cada enlace
import Inicio from '../pages/Inicio';
import Nosotros from '../pages/Nosotros';

const Rutas = () => {
  return (
<Routes>
<Route path="/" element={<Inicio />} />
<Route path="/Inicio" element={<Inicio />} />
<Route path="/Nosotros" element={<Nosotros />} />
</Routes>
  );
}

export default Rutas;