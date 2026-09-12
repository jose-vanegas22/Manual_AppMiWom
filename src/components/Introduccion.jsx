import Slide from './Slide';

export default function IntroSlide({ isActive }) {
  return (
    <Slide id="slide-intro" isActive={isActive}>
      <h2>Introducción</h2>
      <p>
        MiWom es la aplicación móvil oficial de Wom: un canal digital centralizado de autogestión que
        permite administrar tu línea, consultar consumos en tiempo real, adquirir productos, gestionar
        métodos de pago y recibir soporte desde tu iPhone.
      </p>
      <p>
        Este manual interactivo recorre, paso a paso, todo el flujo real de la app: instalación desde la
        App Store, inicio de sesión, compra de un paquete, pago en línea, medición de señal y preguntas
        frecuentes.
      </p>
      <ul style={{ textAlign: 'left', fontSize: '1.1em', color: '#333', maxWidth: 650, margin: '10px auto 0' }}>
        <li>✅ 25 pantallas reales de la aplicación, en orden de uso.</li>
        <li>✅ Navegación guiada mediante efecto "Spotlight" sobre la pantalla completa.</li>
        <li>✅ Panel lateral con la explicación de cada paso, siempre visible y clickeable.</li>
        <li>✅ Índice funcional: entra directo a la sección que necesitas y vuelve cuando quieras.</li>
        <li>✅ Audio sintetizado (Web Audio API) para feedback de aciertos y errores.</li>
      </ul>
    </Slide>
  );
}
