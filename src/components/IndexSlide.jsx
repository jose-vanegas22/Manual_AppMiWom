import { Fragment } from 'react';
import Slide from './Slide';
import IndexCard from './IndexCard';
import { manualOutline } from '../data/manualOutline';
import { stages } from '../data/tutorialSteps';
import styles from './IndexSlide.module.css';

function stageMeta(stageName) {
  const stage = stages.find((s) => s.name === stageName);
  if (!stage) return { firstIndex: null, meta: null };
  return { firstIndex: stage.firstIndex, meta: `Pasos ${stage.firstIndex + 1} - ${stage.lastIndex + 1}` };
}

export default function IndexSlide({ isActive, onSelectStatic, onSelectStage }) {
  const renderCard = (item) => {
    if (item.type === 'stage') {
      const { firstIndex, meta } = stageMeta(item.stageName);
      return (
        <IndexCard
          key={item.number}
          number={item.number}
          title={item.title}
          description={item.description}
          meta={meta}
          disabled={firstIndex === null}
          onSelect={() => onSelectStage(firstIndex)}
        />
      );
    }

    if (item.type === 'section') {
      return (
        <h3 key={item.number} className={styles.sectionTitle}>
          {item.number}. {item.title}
        </h3>
      );
    }

    if (item.type === 'placeholder') {
      return (
        <IndexCard key={item.number} number={item.number} title={item.title} description={item.description} disabled />
      );
    }

    // Cualquier otro tipo ('intro', 'requisitos', ...) es una pantalla
    // estática ya construida: el tipo se usa como clave de navegación.
    return (
      <IndexCard
        key={item.number}
        number={item.number}
        title={item.title}
        description={item.description}
        onSelect={() => onSelectStatic(item.type)}
      />
    );
  };

  const renderItem = (item) => {
    const card = item.type === 'section' ? [renderCard(item), ...item.children.map(renderItem)] : renderCard(item);

    if (item.dividerBefore) {
      return (
        <Fragment key={`wrap-${item.number}`}>
          <div className={styles.divider} />
          {card}
        </Fragment>
      );
    }
    return card;
  };

  return (
    <Slide id="slide-index" isActive={isActive} className={styles.indexSlide}>
      <h2>Índice</h2>
      <p style={{ marginBottom: 0 }}>Selecciona una sección para ir directo a su contenido.</p>
      <div className={styles.indexGrid}>{manualOutline.map(renderItem)}</div>
    </Slide>
  );
}
