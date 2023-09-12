import React from "react";
import {
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
} from "@chakra-ui/react";
import { classNames } from "../../utilities/classNames";
const HorizontalStepIndicator = ({
  steps,
  size,
  colorScheme,
  activeStep,
  className,
}) => {
  /*const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });*/
  return (
    <Stepper
      size={size}
      colorScheme={colorScheme}
      index={activeStep}
      className={classNames(`w-full`, className)}
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={`✅`} active={`📍`} />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default HorizontalStepIndicator;
