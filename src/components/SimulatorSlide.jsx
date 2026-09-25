import Slide from './Slide';
import PhoneSimulator from './PhoneSimulator';
import InfoPanel from './InfoPanel';
import styles from './SimulatorSlide.module.css';

export default function SimulatorSlide({
  isActive,
  step,
  stepIndex,
  totalSteps,
  shakeCount,
  onSuccessClick,
  onErrorClick,
  onPrevStep,
  onNextStep,
  onGoToIndex,
}) {
  return (
    <Slide id="slide-simulator" isActive={isActive}>
      <div className={styles.demoLayout}>
        <PhoneSimulator step={step} onSuccessClick={onSuccessClick} onErrorClick={onErrorClick} />
        <InfoPanel
          step={step}
          stepIndex={stepIndex}
          totalSteps={totalSteps}
          shakeCount={shakeCount}
          onPrevStep={onPrevStep}
          onNextStep={onNextStep}
          onGoToIndex={onGoToIndex}
        />
      </div>
    </Slide>
  );
}
