import { useCallback, useState } from 'react';
import { tutorialSteps } from '../data/tutorialSteps';
import { useAudioFeedback } from './useAudioFeedback';

export const SLIDES = {
  COVER: 0,
  INDEX: 1,
  INTRO: 2,
  SIMULATOR: 3,
  REQUISITOS: 4,
  SOLUCION_PROBLEMAS: 5,
  MANTENIMIENTO: 6,
  SOPORTE: 7,
  GLOSARIO: 8,
  APENDICES: 9,
};

// Solo Portada e Índice se recorren con los botones Anterior/Siguiente.
// El resto de pantallas se abren desde una tarjeta del índice y se
// vuelve con su propio botón "Volver al índice".
const LINEAR_SLIDES = [SLIDES.COVER, SLIDES.INDEX];

export function useTutorialEngine() {
  const [currentSlide, setCurrentSlide] = useState(SLIDES.COVER);
  const [tutorialStarted, setTutorialStarted] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [shakeCount, setShakeCount] = useState(0);
  const { playSuccessSound, playErrorSound } = useAudioFeedback();

  const isLinearSlide = LINEAR_SLIDES.includes(currentSlide);
  const linearIndex = LINEAR_SLIDES.indexOf(currentSlide);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((slide) => {
      const idx = LINEAR_SLIDES.indexOf(slide);
      if (idx === -1) return slide;
      return LINEAR_SLIDES[Math.min(idx + 1, LINEAR_SLIDES.length - 1)];
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((slide) => {
      const idx = LINEAR_SLIDES.indexOf(slide);
      if (idx === -1) return slide;
      return LINEAR_SLIDES[Math.max(idx - 1, 0)];
    });
  }, []);

  const loadStep = useCallback((index) => {
    if (index >= tutorialSteps.length) {
      window.alert(
        '¡Proceso completado exitosamente! Has recorrido todo el flujo de MiWom: instalación, inicio de sesión, compra, pago, medición de señal y preguntas frecuentes.'
      );
      index = tutorialSteps.length - 1;
    }
    if (index < 0) index = 0;
    setCurrentStepIndex(index);
  }, []);

  const goToStage = useCallback(
    (stepIndex) => {
      setCurrentSlide(SLIDES.SIMULATOR);
      setTutorialStarted(true);
      loadStep(stepIndex);
    },
    [loadStep]
  );

  const enterSimulatorIfNeeded = useCallback(() => {
    if (!tutorialStarted) {
      setTutorialStarted(true);
      loadStep(0);
    }
  }, [tutorialStarted, loadStep]);

  const handleSuccessClick = useCallback(() => {
    playSuccessSound();
    loadStep(currentStepIndex + 1);
  }, [playSuccessSound, loadStep, currentStepIndex]);

  const handleErrorClick = useCallback(() => {
    playErrorSound();
    setShakeCount((count) => count + 1);
  }, [playErrorSound]);

  const goNextStep = handleSuccessClick;
  const goPrevStep = useCallback(() => loadStep(currentStepIndex - 1), [loadStep, currentStepIndex]);

  return {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    isLinearSlide,
    linearIndex,
    linearTotal: LINEAR_SLIDES.length,
    currentStep: tutorialSteps[currentStepIndex],
    currentStepIndex,
    totalSteps: tutorialSteps.length,
    shakeCount,
    goToStage,
    enterSimulatorIfNeeded,
    handleSuccessClick,
    handleErrorClick,
    goNextStep,
    goPrevStep,
  };
}
