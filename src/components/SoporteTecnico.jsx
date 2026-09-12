import Slide from './Slide';
import BackToIndexButton from './BackToIndexButton';
import styles from './SoporteTecnico.module.css';

export default function SoporteTecnico({ isActive, onGoToIndex }) {
  return (
    <Slide id="slide-soporte" isActive={isActive} className={styles.soporteSlide}>
      <h2>Soporte Técnico</h2>
      <p>
        Si presentas inconvenientes complejos que no logres resolver mediante este manual, puedes
        comunicarte con los canales oficiales de atención Wom:
      </p>
      <ul className={styles.list}>
        <li>
          <strong>Línea telefónica de atención:</strong> Marca sin costo desde tu línea Wom al{' '}
          <strong>114</strong> o a nivel nacional al <strong>301 555 0114</strong>.
        </li>
        <li>
          <strong>Correo electrónico de soporte:</strong> soporte.digital@wom.co
        </li>
        <li>
          <strong>Horarios de atención:</strong> Disponible las 24 horas del día, los 7 días de la semana
          a través de los canales digitales de la aplicación.
        </li>
      </ul>
      <BackToIndexButton onClick={onGoToIndex} />
    </Slide>
  );
}
