import Slide from './Slide';
import BackToIndexButton from './BackToIndexButton';
import styles from './Glosario.module.css';

const terminos = [
  {
    termino: 'Dashboard',
    definicion: 'Panel de control visual que resume la información más importante de tu cuenta en una sola pantalla.',
  },
  {
    termino: 'Face ID / Touch ID',
    definicion: 'Sistemas de autenticación biométrica de Apple basados en reconocimiento facial o huella dactilar.',
  },
  {
    termino: 'Latencia',
    definicion: 'Es el tiempo de respuesta de tu conexión. Mientras más baja sea, más rápido reaccionan la app.',
  },
  {
    termino: 'Velocidad de subida',
    definicion: 'Es la rapidez con la que recibes datos de internet, como ver videos, abrir páginas o descargar archivos.',
  },
  {
    termino: 'Velocidad de bajada',
    definicion: 'Es la rapidez con la que envías datos a internet, como subir fotos, mandar mensajes o compartir archivos en la nube.',
  },
];

export default function Glosario({ isActive, onGoToIndex }) {
  return (
    <Slide id="slide-glosario" isActive={isActive} className={styles.glosarioSlide}>
      <h2>Glosario</h2>
      <ul className={styles.list}>
        {terminos.map((item) => (
          <li key={item.termino}>
            <strong>{item.termino}:</strong> {item.definicion}
          </li>
        ))}
      </ul>
      <BackToIndexButton onClick={onGoToIndex} />
    </Slide>
  );
}
