import Slide from './Slide';

export default function CoverSlide({ isActive }) {
  return (
    <Slide id="slide-cover" isActive={isActive}>
      <h1>Manual de Usuario Interactivo</h1>
      <h2>Aplicación MiWom (iOS)</h2>
      <p>
        <strong>Versión:</strong> 4.9.5
      </p>
      <p>
        <strong>Fecha:</strong> 10 de septiembre del 2026
      </p>
      <p>
        <strong>Autores y colaboradores:</strong> Jose David Vanegas Martinez, Wilson David Gómez Gómez,
        Elkin, Jhonnier Hernandez.
      </p>
      <p>
        <i>Un proyecto de autogestión digital, validación de interfaces y diseño centrado en el usuario.</i>
      </p>
    </Slide>
  );
}
