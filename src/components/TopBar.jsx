import { SLIDES } from '../hooks/useTutorialEngine';
import styles from './TopBar.module.css';

export default function TopBar({ onGoToIndex }) {
  return (
    <div className={styles.topBar}>
      <div className={styles.brand}>
        Manual<span>MiWom</span> · Interactivo
      </div>
      <button className={styles.topBarBtn} onClick={() => onGoToIndex(SLIDES.INDEX)}>
        📑 Ir al Índice
      </button>
    </div>
  );
}
