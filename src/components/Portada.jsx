import Slide from './Slide';

export default function Portada({ isActive }) {
  return (
    <Slide id="slide-cover" isActive={isActive}>
      <h1>Manual de usuario para la aplicación Mi Wom</h1>
      <h2>Solo en sistema operativo (iOS)</h2>
      <p>
        <strong>Versión:</strong> 4.9.5
      </p>
      <p>
        <strong>Fecha:</strong> 10 de septiembre del 2026
      </p>
      <p>
        <strong>Autores y colaboradores:</strong> Jose David Vanegas Martinez, Wilson David Gómez Gómez,
        Jhonnier Albeiro Hernandez.
      </p>
    </Slide>
  );
}
