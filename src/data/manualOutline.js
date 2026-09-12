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
    title: 'Requisitos del Sistema',
    type: 'requisitos',
    description: 'Versión de iOS, espacio y datos móviles necesarios.',
  },
  {
    number: '3',
    title: 'Instalación',
    type: 'stage',
    stageName: 'Instalación',
    description: 'Descarga e instala MiWom desde la App Store, paso a paso.',
  },
  {
    number: '4',
    title: 'Descripción de la Interfaz',
    type: 'stage',
    stageName: 'Descripción de la Interfaz',
    description: 'Recorrido por el menú principal y sus secciones.',
  },
  {
    number: '5',
    title: 'Funciones y Características Principales',
    type: 'section',
    description: 'Las tareas más comunes dentro de la app.',
    children: [
      {
        number: '5.1',
        title: 'Cómo Iniciar Sesión',
        type: 'stage',
        stageName: 'Cómo Iniciar Sesión',
        description: 'Ingresa tu línea, valida el código SMS y entra a tu cuenta.',
      },
      {
        number: '5.2',
        title: 'Cómo Comprar un Paquete',
        type: 'stage',
        stageName: 'Cómo Comprar un Paquete',
        description: 'Explora, compra y paga el paquete que necesites.',
      },
      {
        number: '5.3',
        title: 'Cómo Activar el Pago Automático (Pago Automático)',
        type: 'stage',
        stageName: 'Cómo Activar el Pago Automático',
        description: 'Activa el cobro automático de tu plan cada mes.',
      },
      {
        number: '5.4',
        title: 'Cómo Medir la Señal',
        type: 'stage',
        stageName: 'Cómo Medir la Señal',
        description: 'Corre el test de conectividad y revisa tu reporte de red.',
      },
      {
        number: '5.5',
        title: 'Cómo Encontrar Puntos Presenciales según las Necesidades',
        type: 'stage',
        stageName: 'Cómo Encontrar Puntos Presenciales según las Necesidades',
        description: 'Ubica tiendas y puntos de atención cercanos.',
      },
    ],
  },
  {
    number: '6',
    title: 'Solución de Problemas (FAQ)',
    type: 'solucion_problemas',
    description: 'Resuelve dudas comunes sobre el uso de la app.',
    dividerBefore: true,
  },
  {
    number: '7',
    title: 'Mantenimiento y Actualizaciones',
    type: 'mantenimiento',
    description: 'Cómo mantener la app actualizada y funcionando bien.',
  },
  {
    number: '8',
    title: 'Soporte Técnico',
    type: 'soporte',
    description: 'Canales de contacto si algo no funciona.',
  },
  {
    number: '9',
    title: 'Glosario',
    type: 'glosario',
    description: 'Términos técnicos usados a lo largo del manual.',
  },
  {
    number: '10',
    title: 'Apéndices',
    type: 'apendices',
    description: 'Material adicional de referencia.',
  },
];
