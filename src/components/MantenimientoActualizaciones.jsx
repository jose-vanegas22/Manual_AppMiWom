import Slide from './Slide';
import BackToIndexButton from './BackToIndexButton';
import styles from './MantenimientoActualizaciones.module.css';

export default function MantenimientoActualizaciones({ isActive, onGoToIndex }) {
  return (
    <Slide id="slide-mantenimiento" isActive={isActive} className={styles.mantenimientoSlide}>
      <h2>Mantenimiento y Actualizaciones</h2>
      <ul className={styles.list}>
        <li>
          <strong>Cómo actualizar el software:</strong> Ingresa periódicamente a la App Store, busca "Mi
          Wom" y si aparece el botón Actualizar, presiónalo para disfrutar de las últimas mejoras de
          seguridad, estabilidad y nuevas funciones de la versión 4.9.5.
        </li>
        <li>
          <strong>Copias de seguridad:</strong> Al estar vinculada directamente al servidor de Wom a
          través de tu número de línea y cuenta, tus configuraciones y métodos de pago se almacenan en la
          nube de forma segura, por lo que no requieres respaldos manuales locales.
        </li>
      </ul>
      <BackToIndexButton onClick={onGoToIndex} />
    </Slide>
  );
}
