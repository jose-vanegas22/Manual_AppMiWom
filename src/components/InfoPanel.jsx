import { useEffect, useState } from 'react';
import styles from './InfoPanel.module.css';

export default function InfoPanel({
  step,
  stepIndex,
  totalSteps,
  shakeCount,
  onPrevStep,
  onNextStep,
  onGoToIndex,
}) {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (shakeCount === 0) return;
    setIsShaking(true);
    const timeout = setTimeout(() => setIsShaking(false), 400);
    return () => clearTimeout(timeout);
  }, [shakeCount]);

  const progressPercent = ((stepIndex + 1) / totalSteps) * 100;

  return (
    <div className={`${styles.infoPanel} ${isShaking ? styles.shake : ''}`}>
      <span className={styles.stageLabel}>{step.stage}</span>
      <h4 className={styles.title}>{step.title}</h4>
      <p className={styles.descText}>{step.desc}</p>
      <div className={styles.hintBox}>
        👆 Haz clic dentro del recuadro resaltado en la pantalla para avanzar, o usa el botón "Siguiente
        paso".
      </div>
      <div className={styles.progressBarTrack}>
        <div className={styles.progressBarFill} style={{ width: `${progressPercent}%` }} />
      </div>
      <span className={styles.stepCounter}>
        Paso {stepIndex + 1} de {totalSteps}
      </span>
      <div className={styles.panelNavBtns}>
        <button className={styles.btnBack} onClick={onPrevStep}>
          ◀ Paso anterior
        </button>
        <button className={styles.btnIndex} onClick={onNextStep}>
          Siguiente paso ▶
        </button>
      </div>
      <div className={styles.panelNavBtns}>
        <button className={styles.btnBack} style={{ flex: '1 1 100%' }} onClick={onGoToIndex}>
          📑 Volver al Índice
        </button>
      </div>
    </div>
  );
}
