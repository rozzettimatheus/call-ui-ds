/* eslint-disable prettier/prettier */
import { Label, MultiStepContainer, Step, Steps } from './styles'

export type MultiStepProps = {
  size: number
  currentStep?: number
}

const createArrayFrom = (size: number) =>
  Array.from({ length: size }, (_, i) => i + 1)

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  const current = currentStep <= size ? currentStep : size

  return (
    <MultiStepContainer>
      <Label>
        Passo {current} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {createArrayFrom(size).map(step => (
          <Step key={step} active={current >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
