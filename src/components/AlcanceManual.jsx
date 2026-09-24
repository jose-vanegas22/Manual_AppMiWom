import Slide from './Slide';
import BackToIndexButton from './BackToIndexButton';
import styles from './AlcanceManual.module.css';

export default function AlcanceManual({ isActive, onGoToIndex }) {
  return (
    <Slide id="slide-alcance" isActive={isActive} className={styles.alcanceSlide}>
      <h2>Alcance del manual</h2>

      <h3 className={styles.subheading}>Este manual cubre:</h3>
      <ul className={styles.list}>
        <li>El uso de la aplicación MiWom (Wom Colombia) en su versión 4.9.5, exclusivamente para dispositivos iOS.</li>
        <li>La instalación de la app desde la App Store y el inicio de sesión con tu línea Wom.</li>
        <li>La navegación por la interfaz principal (dashboard, menú y barra de navegación).</li>
        <li>La compra y el pago de paquetes, y la activación del pago automático.</li>
        <li>La medición de señal y la búsqueda de puntos de atención presenciales.</li>
        <li>La solución de problemas comunes documentados en la sección de preguntas frecuentes.</li>
      </ul>

      <h3 className={styles.subheading}>Este manual no incluye:</h3>
      <ul className={styles.list}>
        <li>El uso de MiWom en dispositivos Android.</li>
        <li>La solución de problemas de hardware del teléfono (batería, pantalla, señal física, etc.).</li>
        <li>La configuración de cuentas bancarias o métodos de pago fuera de la aplicación.</li>
        <li>Soporte técnico avanzado o personalizado; para eso debes contactar a la línea oficial de Wom (ver la sección Soporte Técnico).</li>
      </ul>

      <BackToIndexButton onClick={onGoToIndex} />
    </Slide>
  );
}
