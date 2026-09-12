import styles from './GlobalControls.module.css';

export default function GlobalControls({ isLinearSlide, linearIndex, linearTotal, onPrev, onNext }) {
  if (!isLinearSlide) return null;

  return (
    <div className={styles.controls}>
      <button
        className={`${styles.btnControl} ${styles.secondary}`}
        onClick={onPrev}
        disabled={linearIndex === 0}
      >
        ◀ Anterior
      </button>
      <button className={styles.btnControl} onClick={onNext} disabled={linearIndex === linearTotal - 1}>
        Siguiente ▶
      </button>
    </div>
  );
}
