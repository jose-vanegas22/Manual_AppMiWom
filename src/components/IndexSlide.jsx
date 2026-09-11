import Slide from './Slide';
import IndexCard from './IndexCard';
import { stages } from '../data/tutorialSteps';
import styles from './IndexSlide.module.css';

export default function IndexSlide({ isActive, onSelectStage }) {
  return (
    <Slide id="slide-index" isActive={isActive}>
      <h2>Índice</h2>
      <p style={{ marginBottom: 0 }}>Selecciona una sección para ir directo a su tutorial interactivo.</p>
      <div className={styles.indexGrid}>
        {stages.map((stage, idx) => (
          <IndexCard key={stage.name} stage={stage} order={idx + 1} onSelect={onSelectStage} />
        ))}
      </div>
    </Slide>
  );
}
