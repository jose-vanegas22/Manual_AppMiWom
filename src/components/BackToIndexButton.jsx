import styles from './BackToIndexButton.module.css';

export default function BackToIndexButton({ onClick }) {
  return (
    <button className={styles.btnBackToIndex} onClick={onClick}>
      📑 Volver al Índice
    </button>
  );
}
