import styles from './IndexCard.module.css';

export default function IndexCard({ number, title, description, meta, disabled, onSelect }) {
  return (
    <div
      className={`${styles.indexCard} ${disabled ? styles.disabled : ''}`}
      onClick={disabled ? undefined : onSelect}
    >
      <span className={styles.num}>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {(disabled || meta) && (
        <span className={disabled ? styles.badge : styles.stepsRange}>
          {disabled ? 'Próximamente' : meta}
        </span>
      )}
    </div>
  );
}
