import { useEffect } from 'react';
import TopBar from './components/TopBar';
import GlobalControls from './components/GlobalControls';
import Portada from './components/Portada';
import Introduccion from './components/Introduccion';
import RequisitosSistema from './components/RequisitosSistema';
import SolucionProblemas from './components/SolucionProblemas';
import MantenimientoActualizaciones from './components/MantenimientoActualizaciones';
import SoporteTecnico from './components/SoporteTecnico';
import Glosario from './components/Glosario';
import Apendices from './components/Apendices';
import IndexSlide from './components/IndexSlide';
import SimulatorSlide from './components/SimulatorSlide';
import { useTutorialEngine, SLIDES } from './hooks/useTutorialEngine';

// Mapea el "type" de una tarjeta estática del índice (manualOutline.js)
// a la pantalla que debe abrir.
const STATIC_SLIDES = {
  intro: SLIDES.INTRO,
  requisitos: SLIDES.REQUISITOS,
  solucion_problemas: SLIDES.SOLUCION_PROBLEMAS,
  mantenimiento: SLIDES.MANTENIMIENTO,
  soporte: SLIDES.SOPORTE,
  glosario: SLIDES.GLOSARIO,
  apendices: SLIDES.APENDICES,
};

export default function App() {
  const {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    isLinearSlide,
    linearIndex,
    linearTotal,
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

  const goToIndex = () => goToSlide(SLIDES.INDEX);

  return (
    <>
      <TopBar onGoToIndex={goToSlide} />

      <Portada isActive={currentSlide === SLIDES.COVER} />
      <IndexSlide
        isActive={currentSlide === SLIDES.INDEX}
        onSelectStatic={(key) => goToSlide(STATIC_SLIDES[key])}
        onSelectStage={goToStage}
      />
      <Introduccion isActive={currentSlide === SLIDES.INTRO} onGoToIndex={goToIndex} />
      <RequisitosSistema isActive={currentSlide === SLIDES.REQUISITOS} onGoToIndex={goToIndex} />
      <SolucionProblemas isActive={currentSlide === SLIDES.SOLUCION_PROBLEMAS} onGoToIndex={goToIndex} />
      <MantenimientoActualizaciones isActive={currentSlide === SLIDES.MANTENIMIENTO} onGoToIndex={goToIndex} />
      <SoporteTecnico isActive={currentSlide === SLIDES.SOPORTE} onGoToIndex={goToIndex} />
      <Glosario isActive={currentSlide === SLIDES.GLOSARIO} onGoToIndex={goToIndex} />
      <Apendices isActive={currentSlide === SLIDES.APENDICES} onGoToIndex={goToIndex} />
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
        onGoToIndex={goToIndex}
      />

      <GlobalControls
        isLinearSlide={isLinearSlide}
        linearIndex={linearIndex}
        linearTotal={linearTotal}
        onPrev={prevSlide}
        onNext={nextSlide}
      />
    </>
  );
}
