import styles from './PhoneSimulator.module.css';

export default function PhoneSimulator({ step, onSuccessClick, onErrorClick }) {
  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneScreen}>
        <img src={step.image} alt="Pantalla MiWom" />
        <div className={styles.errorLayer} onClick={onErrorClick} />
        <div
          className={styles.spotlightTarget}
          onClick={onSuccessClick}
          style={{
            top: step.target.top,
            left: step.target.left,
            width: step.target.width,
            height: step.target.height,
          }}
        />
      </div>
    </div>
  );
}
