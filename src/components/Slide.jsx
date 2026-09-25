import styles from './Slide.module.css';

export default function Slide({ isActive, children, id, className = '' }) {
  return (
    <div id={id} className={`${styles.slide} ${isActive ? styles.active : ''} ${className}`}>
      {children}
    </div>
  );
}
