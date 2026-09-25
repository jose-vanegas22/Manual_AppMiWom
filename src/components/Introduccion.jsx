import Slide from './Slide';
import BackToIndexButton from './BackToIndexButton';
import styles from './Introduccion.module.css';

export default function Introduccion({ isActive, onGoToIndex }) {
  return (
    <Slide id="slide-intro" isActive={isActive} className={styles.introSlide}>
      <h2>Introducción</h2>
      <p>
        MiWom es la aplicación oficial de Wom para iOS, creada para que los usuarios puedan gestionar de
        forma sencilla sus líneas móviles, consultar consumos, realizar pagos, adquirir productos y
        acceder a herramientas como mapas de cobertura y puntos de atención.
      </p>
      <p>
        El manual tiene como objetivo explicar, paso a paso, el uso de MiWom versión 4.9.5, incluyendo la
        navegación, configuración y principales funcionalidades. Está dirigido a usuarios de iPhone, tanto
        principiantes como avanzados, y no contempla problemas físicos del dispositivo, configuración
        externa a la aplicación ni el uso de MiWom en Android.
      </p>
      <BackToIndexButton onClick={onGoToIndex} />
    </Slide>
  );
}
