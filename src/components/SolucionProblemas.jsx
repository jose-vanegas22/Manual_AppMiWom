import Slide from './Slide';
import BackToIndexButton from './BackToIndexButton';
import styles from './SolucionProblemas.module.css';

const items = [
  {
    problema: 'El código de verificación por SMS no llega.',
    solucion:
      'Asegúrate de tener señal móvil activa, verifica que el número escrito sea correcto y espera 60 segundos para solicitar un nuevo reenvío de código.',
  },
  {
    problema: 'La aplicación se cierra inesperadamente en iOS.',
    solucion: 'Asegúrate de tener actualizada la app a su versión más reciente (4.9.5) desde la App Store y reinicia tu iPhone.',
  },
  {
    problema: 'Error al procesar el pago de un paquete o plan.',
    solucion:
      'Verifica con tu entidad bancaria que tu tarjeta esté habilitada para compras por internet o intenta registrar otro método de pago alternativo.',
  },
];

export default function SolucionProblemas({ isActive, onGoToIndex }) {
  return (
    <Slide id="slide-solucion-problemas" isActive={isActive} className={styles.solucionSlide}>
      <h2>Solución de Problemas (FAQ)</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.problema}>
            <p className={styles.problema}>
              <strong>Problema:</strong> {item.problema}
            </p>
            <p className={styles.solucion}>
              <em>Solución:</em> {item.solucion}
            </p>
          </li>
        ))}
      </ul>
      <BackToIndexButton onClick={onGoToIndex} />
    </Slide>
  );
}
