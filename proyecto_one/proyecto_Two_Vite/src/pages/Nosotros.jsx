const Nosotros = () => {
  return (
    <section className="nosotros-container">
      <h2>Sobre Nosotros</h2>
      <p>Somos una empresa dedicada a enseñar React de forma práctica.</p>
      
      <div className="content-section">
        <h3>¿Qué es Vite?</h3>
        <p>
          <strong>Vite</strong> (pronunciado "veet", que significa "rápido" en francés) 
          es una herramienta de construcción y desarrollo creada por Evan You (creador de Vue.js). 
          Es un build tool moderno que proporciona un entorno de desarrollo extremadamente 
          rápido y un proceso de construcción optimizado.
        </p>
        
        <div className="descripcion">
          <h4>¿Cómo funciona?</h4>
          <p>
            Vite aprovecha las capacidades nativas de ES modules del navegador y 
            herramientas como esbuild para proporcionar una experiencia de desarrollo 
            ultrarrápida con Hot Module Replacement (HMR) instantáneo.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h3>Características Principales de Vite</h3>
        <div className="caracteristicas-grid">
          <div className="caracteristica">
            <h4>🚀 Inicio Rápido</h4>
            <p>Servidor de desarrollo que inicia instantáneamente, sin importar el tamaño del proyecto.</p>
          </div>
          
          <div className="caracteristica">
            <h4>⚡ Hot Module Replacement</h4>
            <p>HMR ultrarrápido que mantiene el estado de la aplicación durante las actualizaciones.</p>
          </div>
          
          <div className="caracteristica">
            <h4>📦 Bundling Optimizado</h4>
            <p>Utiliza Rollup para el build de producción, generando bundles optimizados.</p>
          </div>
          
          <div className="caracteristica">
            <h4>🔧 TypeScript Nativo</h4>
            <p>Soporte nativo para TypeScript, JSX, CSS y muchos otros tipos de archivo.</p>
          </div>
          
          <div className="caracteristica">
            <h4>🎯 ES Modules</h4>
            <p>Aprovecha los ES modules nativos del navegador para un desarrollo más rápido.</p>
          </div>
          
          <div className="caracteristica">
            <h4>🔌 Plugins Rica</h4>
            <p>Ecosistema extenso de plugins basado en Rollup con API simple y potente.</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h3>Ventajas de Usar Vite</h3>
        
        <div className="ventajas-section">
          <h4>🎯 Ventajas en Desarrollo</h4>
          <ul>
            <li><strong>Velocidad extrema:</strong> Inicio del servidor en milisegundos</li>
            <li><strong>HMR instantáneo:</strong> Cambios reflejados al instante sin perder el estado</li>
            <li><strong>Menos configuración:</strong> Funciona out-of-the-box para la mayoría de casos</li>
            <li><strong>Mejor experiencia de desarrollo:</strong> Tiempos de recarga mínimos</li>
          </ul>
        </div>

        <div className="ventajas-section">
          <h4>📦 Ventajas en Producción</h4>
          <ul>
            <li><strong>Bundles optimizados:</strong> Code splitting automático y tree shaking</li>
            <li><strong>Mejor performance:</strong> Archivos más pequeños y carga más rápida</li>
            <li><strong>Compatibilidad moderna:</strong> Aprovecha las últimas características del navegador</li>
            <li><strong>Build reproducibles:</strong> Construcciones consistentes y confiables</li>
          </ul>
        </div>

        <div className="ventajas-section">
          <h4>🔧 Ventajas Técnicas</h4>
          <ul>
            <li><strong>Zero config:</strong> Configuración mínima requerida para empezar</li>
            <li><strong>Framework agnóstico:</strong> Compatible con React, Vue, Svelte, etc.</li>
            <li><strong>Extensible:</strong> Sistema de plugins robusto y flexible</li>
            <li><strong>Moderno:</strong> Utiliza las herramientas más avanzadas del ecosistema</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h3>Comparación: Vite vs Otras Herramientas</h3>
        <div className="comparison-table">
          <div className="comparison-item">
            <h4>Vite vs Create React App</h4>
            <ul>
              <li>✅ Inicio 10-100x más rápido</li>
              <li>✅ HMR instantáneo vs recarga completa</li>
              <li>✅ Builds más rápidos y optimizados</li>
              <li>✅ Menor tamaño de bundle final</li>
            </ul>
          </div>
          
          <div className="comparison-item">
            <h4>Vite vs Webpack</h4>
            <ul>
              <li>✅ Configuración más simple</li>
              <li>✅ Mejor experiencia de desarrollo</li>
              <li>✅ Menos dependencias</li>
              <li>✅ Arquitectura más moderna</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h3>¿Por qué elegir Vite para React?</h3>
        <div className="conclusion">
          <p>
            Vite se ha convertido en la herramienta preferida para proyectos React modernos 
            debido a su velocidad excepcional, configuración mínima y excelente experiencia 
            de desarrollo. Es especialmente beneficioso para:
          </p>
          <ul>
            <li>Proyectos nuevos que buscan la mejor experiencia de desarrollo</li>
            <li>Equipos que valoran la velocidad y productividad</li>
            <li>Aplicaciones que requieren builds optimizados</li>
            <li>Desarrolladores que prefieren herramientas modernas y eficientes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;