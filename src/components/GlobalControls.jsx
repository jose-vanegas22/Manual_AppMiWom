import { SLIDES } from '../hooks/useTutorialEngine';
import styles from './GlobalControls.module.css';

export default function GlobalControls({ currentSlide, totalSlides, onPrev, onNext }) {
  const isHidden = currentSlide === SLIDES.SIMULATOR;

  return (
    <div className={styles.controls} style={{ display: isHidden ? 'none' : 'flex' }}>
      <button
        className={`${styles.btnControl} ${styles.secondary}`}
        onClick={onPrev}
        disabled={currentSlide === 0}
      >
        ◀ Anterior
      </button>
      <button className={styles.btnControl} onClick={onNext} disabled={currentSlide === totalSlides - 1}>
        Siguiente ▶
      </button>
    </div>
  );
}
