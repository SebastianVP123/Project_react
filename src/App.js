import logo from './logo.svg';
import Footer from './componentes/Footer';
import Menu from './componentes/Menu';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Bienvenido a mi App</h1>
        <Menu />
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src="https://www.elespectador.com/resizer/v2/2EFJ2P7JPVGURJLT7QLCSD6P74.png?auth=f89383a3fccb031c9bfed4f27520be5c8b546da03570994f889d1d0a19d600e8&width=920&height=613&smart=true&quality=60" alt="Descripción de la imagen" className="imagen-header" />

      </main>
      <Footer />
    </div>
  );
}

export default App;
