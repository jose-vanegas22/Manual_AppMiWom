import { useEffect } from 'react';
import TopBar from './components/TopBar';
import GlobalControls from './components/GlobalControls';
import CoverSlide from './components/CoverSlide';
import IntroSlide from './components/IntroSlide';
import IndexSlide from './components/IndexSlide';
import SimulatorSlide from './components/SimulatorSlide';
import { useTutorialEngine, SLIDES } from './hooks/useTutorialEngine';

export default function App() {
  const {
    currentSlide,
    totalSlides,
    goToSlide,
    nextSlide,
    prevSlide,
    currentStep,
    currentStepIndex,
    totalSteps,
    shakeCount,
    goToStage,
    enterSimulatorIfNeeded,
    handleSuccessClick,
    handleErrorClick,
    goNextStep,
    goPrevStep,
  } = useTutorialEngine();

  useEffect(() => {
    if (currentSlide === SLIDES.SIMULATOR) {
      enterSimulatorIfNeeded();
    }
  }, [currentSlide, enterSimulatorIfNeeded]);

  return (
    <>
      <TopBar onGoToIndex={goToSlide} />

      <CoverSlide isActive={currentSlide === SLIDES.COVER} />
      <IntroSlide isActive={currentSlide === SLIDES.INTRO} />
      <IndexSlide isActive={currentSlide === SLIDES.INDEX} onSelectStage={goToStage} />
      <SimulatorSlide
        isActive={currentSlide === SLIDES.SIMULATOR}
        step={currentStep}
        stepIndex={currentStepIndex}
        totalSteps={totalSteps}
        shakeCount={shakeCount}
        onSuccessClick={handleSuccessClick}
        onErrorClick={handleErrorClick}
        onPrevStep={goPrevStep}
        onNextStep={goNextStep}
        onGoToIndex={() => goToSlide(SLIDES.INDEX)}
      />

      <GlobalControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
      />
    </>
  );
}
