import styles from './Slide.module.css';

export default function Slide({ isActive, children, id }) {
  return (
    <div id={id} className={`${styles.slide} ${isActive ? styles.active : ''}`}>
      {children}
    </div>
  );
}
