import Slide from './Slide';
import BackToIndexButton from './BackToIndexButton';
import styles from './Apendices.module.css';

export default function Apendices({ isActive, onGoToIndex }) {
  return (
    <Slide id="slide-apendices" isActive={isActive} className={styles.apendicesSlide}>
      <h2>Apéndices</h2>
      <ul className={styles.list}>
        <li>
          <strong>Apéndice A:</strong> Guía rápida de optimización de red móvil en dispositivos iOS para
          mejorar la velocidad de navegación de datos.{' '}
          <a
            className={styles.link}
            href="https://support.apple.com/es-co/guide/iphone/iph3dd5f213/ios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver guía oficial de Apple ↗
          </a>
        </li>
      </ul>
      <BackToIndexButton onClick={onGoToIndex} />
    </Slide>
  );
}
