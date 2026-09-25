// Tabla de contenido del manual, en el mismo orden que el documento
// impreso. Cada entrada "stage" enlaza con una sección ya construida
// en tutorialSteps.js (por su nombre); cada entrada "placeholder"
// todavía no tiene contenido y se muestra como tarjeta deshabilitada
// hasta que se agregue.
export const manualOutline = [
  {
    number: '1',
    title: 'Introducción',
    type: 'intro',
    description: 'Qué es MiWom y qué encontrarás en este manual interactivo.',
  },
  {
    number: '2',
    title: 'Requisitos del sistema',
    type: 'requisitos',
    description: 'Versión de iOS, espacio y datos móviles necesarios.',
  },
  {
    number: '3',
    title: 'Alcance del manual',
    type: 'alcance',
    description: 'Qué cubre este manual y qué queda fuera de su alcance.',
  },
  {
    number: '4',
    title: 'Instalación',
    type: 'stage',
    stageName: 'Instalación',
    description: 'Descarga e instala MiWom desde la App Store, paso a paso.',
  },
  {
    number: '5',
    title: 'Descripción de la interfaz',
    type: 'stage',
    stageName: 'Descripción de la interfaz',
    description: 'Recorrido por el menú principal y sus secciones.',
  },
  {
    number: '6',
    title: 'Funciones y características principales',
    type: 'section',
    description: 'Las tareas más comunes dentro de la app.',
    children: [
      {
        number: '6.1',
        title: 'Cómo iniciar sesión',
        type: 'stage',
        stageName: 'Cómo iniciar sesión',
        description: 'Ingresa tu línea, valida el código SMS y entra a tu cuenta.',
      },
      {
        number: '6.2',
        title: 'Cómo comprar un paquete',
        type: 'stage',
        stageName: 'Cómo comprar un paquete',
        description: 'Explora, compra y paga el paquete que necesites.',
      },
      {
        number: '6.3',
        title: 'Cómo activar el pago automático',
        type: 'stage',
        stageName: 'Cómo activar el pago automático',
        description: 'Activa el cobro automático de tu plan cada mes.',
      },
      {
        number: '6.4',
        title: 'Cómo medir la señal',
        type: 'stage',
        stageName: 'Cómo medir la señal',
        description: 'Corre el test de conectividad y revisa tu reporte de red.',
      },
      {
        number: '6.5',
        title: 'Cómo encontrar puntos presenciales según las necesidades',
        type: 'stage',
        stageName: 'Cómo encontrar puntos presenciales según las necesidades',
        description: 'Ubica tiendas y puntos de atención cercanos.',
      },
    ],
  },
  {
    number: '7',
    title: 'Solución de problemas (FAQ)',
    type: 'solucion_problemas',
    description: 'Resuelve dudas comunes sobre el uso de la app.',
    dividerBefore: true,
  },
  {
    number: '8',
    title: 'Mantenimiento y actualizaciones',
    type: 'mantenimiento',
    description: 'Cómo mantener la app actualizada y funcionando bien.',
  },
  {
    number: '9',
    title: 'Soporte técnico',
    type: 'soporte',
    description: 'Canales de contacto si algo no funciona.',
  },
  {
    number: '10',
    title: 'Glosario',
    type: 'glosario',
    description: 'Términos técnicos usados a lo largo del manual.',
  },
  {
    number: '11',
    title: 'Apéndices',
    type: 'apendices',
    description: 'Material adicional de referencia.',
  },
];
