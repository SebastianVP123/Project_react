const Inicio = () => {
  return (
    <section className="inicio-container">
      <h2>Página de Inicio</h2>
      <p>Bienvenido a la página principal del sitio.</p>
      
      <div className="content-section">
        <h3>Componentes React</h3>
        <p>
          Los <strong>componentes</strong> son la base de React. Son funciones o clases de JavaScript 
          que devuelven elementos JSX para describir qué debe aparecer en la pantalla. 
          Son como piezas reutilizables de tu interfaz de usuario.
        </p>
        <div className="ejemplo">
          <h4>Ejemplo de componente:</h4>
          <pre>
{`function Saludo() {
  return <h1>¡Hola mundo!</h1>;
}`}
          </pre>
        </div>
      </div>

      <div className="content-section">
        <h3>¿Qué es Layout?</h3>
        <p>
          El <strong>layout</strong> se refiere a la estructura y disposición de los elementos 
          en tu aplicación. En React, puedes crear componentes de layout que definan la 
          estructura general de tu página (header, sidebar, contenido principal, footer, etc.).
        </p>
        <div className="ejemplo">
          <h4>Ejemplo de Layout:</h4>
          <pre>
{`function Layout({ children }) {
  return (
    <div>
      <header>Mi Header</header>
      <main>{children}</main>
      <footer>Mi Footer</footer>
    </div>
  );
}`}
          </pre>
        </div>
      </div>

      <div className="content-section">
        <h3>¿Qué es JSX?</h3>
        <p>
          <strong>JSX (JavaScript XML)</strong> es una extensión de sintaxis para JavaScript 
          que permite escribir elementos HTML dentro del código JavaScript. Es lo que hace 
          que React sea tan intuitivo para crear interfaces de usuario.
        </p>
        <div className="caracteristicas">
          <h4>Características de JSX:</h4>
          <ul>
            <li>Sintaxis similar a HTML pero dentro de JavaScript</li>
            <li>Permite expresiones JavaScript entre llaves {`{}`}</li>
            <li>Se transpila a JavaScript puro</li>
            <li>Hace el código más legible y fácil de mantener</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h3>Diferencias entre JS y JSX</h3>
        <div className="comparison">
          <div className="js-column">
            <h4>JavaScript (.js)</h4>
            <ul>
              <li>Lenguaje de programación estándar</li>
              <li>Sintaxis pura de JavaScript</li>
              <li>No incluye elementos HTML directamente</li>
              <li>Usa métodos como createElement() para crear elementos</li>
            </ul>
            <div className="ejemplo">
              <strong>Ejemplo JS:</strong>
              <pre>
{`React.createElement(
  'h1', 
  null, 
  'Hola mundo'
)`}
              </pre>
            </div>
          </div>
          
          <div className="jsx-column">
            <h4>JSX (.jsx)</h4>
            <ul>
              <li>Extensión de JavaScript para React</li>
              <li>Permite escribir HTML dentro de JavaScript</li>
              <li>Más intuitivo y fácil de leer</li>
              <li>Se transpila automáticamente a JavaScript</li>
            </ul>
            <div className="ejemplo">
              <strong>Ejemplo JSX:</strong>
              <pre>
{`<h1>Hola mundo</h1>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h3>Ventajas de JSX</h3>
        <ul>
          <li><strong>Legibilidad:</strong> Más fácil de leer y escribir</li>
          <li><strong>Familiaridad:</strong> Similar a HTML, fácil de aprender</li>
          <li><strong>Detección de errores:</strong> Errores detectados en tiempo de compilación</li>
          <li><strong>Expresiones dinámicas:</strong> Permite JavaScript dentro del markup</li>
          <li><strong>Componentes reutilizables:</strong> Facilita la creación de componentes</li>
        </ul>
      </div>
    </section>
  );
};

export default Inicio;