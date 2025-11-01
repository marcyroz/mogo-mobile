import { defineStepper } from "@stepperize/react";

export const QuestionaryStepper = defineStepper(
    { id: "step-1", title: "Step 1", description: "First step" },
    { id: "step-2", title: "Step 2", description: "Second step" },
    { id: "step-3", title: "Step 3", description: "Third step" },
    { id: "step-4", title: "Step 4", description: "Fourth step" }
);