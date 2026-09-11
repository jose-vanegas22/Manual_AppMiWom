import { stageDescriptions } from '../data/tutorialSteps';
import styles from './IndexCard.module.css';

export default function IndexCard({ stage, order, onSelect }) {
  return (
    <div className={styles.indexCard} onClick={() => onSelect(stage.firstIndex)}>
      <span className={styles.num}>{order}</span>
      <h3>{stage.name}</h3>
      <p>{stageDescriptions[stage.name] || ''}</p>
      <span className={styles.stepsRange}>
        Pasos {stage.firstIndex + 1} - {stage.lastIndex + 1}
      </span>
    </div>
  );
}
