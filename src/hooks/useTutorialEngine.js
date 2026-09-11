import { useCallback, useState } from 'react';
import { tutorialSteps } from '../data/tutorialSteps';
import { useAudioFeedback } from './useAudioFeedback';

export const SLIDES = {
  COVER: 0,
  INTRO: 1,
  INDEX: 2,
  SIMULATOR: 3,
};

const TOTAL_SLIDES = 4;

export function useTutorialEngine() {
  const [currentSlide, setCurrentSlide] = useState(SLIDES.COVER);
  const [tutorialStarted, setTutorialStarted] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [shakeCount, setShakeCount] = useState(0);
  const { playSuccessSound, playErrorSound } = useAudioFeedback();

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((slide) => Math.min(slide + 1, TOTAL_SLIDES - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((slide) => Math.max(slide - 1, 0));
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
    totalSlides: TOTAL_SLIDES,
    goToSlide,
    nextSlide,
    prevSlide,
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
