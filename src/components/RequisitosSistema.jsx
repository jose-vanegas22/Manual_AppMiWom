import Slide from './Slide';
import BackToIndexButton from './BackToIndexButton';
import styles from './RequisitosSistema.module.css';

export default function RequisitosSistema({ isActive, onGoToIndex }) {
  return (
    <Slide id="slide-requisitos" isActive={isActive} className={styles.requisitosSlide}>
      <h2>Requisitos del Sistema</h2>
      <p>Especificaciones mínimas y recomendadas:</p>
      <ul className={styles.specList}>
        <li>
          <strong>Dispositivos compatibles:</strong> iPhone SE (2ª gen. o posterior), iPhone 8 en
          adelante.
        </li>
        <li>
          <strong>Sistema Operativo:</strong> iOS 15.0 o versiones posteriores recomendadas para un
          rendimiento óptimo de la versión 4.9.5.
        </li>
        <li>
          <strong>Espacio de almacenamiento disponible:</strong> Mínimo 150 MB libres para la instalación
          y almacenamiento temporal de caché.
        </li>
        <li>
          <strong>Conectividad:</strong> Conexión a internet activa (mediante datos móviles Wom o red
          Wi-Fi) para el uso de consultas en tiempo real y transacciones.
        </li>
      </ul>
      <BackToIndexButton onClick={onGoToIndex} />
    </Slide>
  );
}
