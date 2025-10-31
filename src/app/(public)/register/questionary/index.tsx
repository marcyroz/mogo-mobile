import Step1 from "@/src/components/questionary/step-1";
import Step2 from "@/src/components/questionary/step-2";
import Step3 from "@/src/components/questionary/step-3";
import Step4 from "@/src/components/questionary/step-4";
import { defineStepper } from "@stepperize/react";
import { SafeAreaView } from "react-native-safe-area-context";

export const QuestionaryStepper = defineStepper(
    { id: "step-1", title: "Step 1", description: "First step" },
    { id: "step-2", title: "Step 2", description: "Second step" },
    { id: "step-3", title: "Step 3", description: "Third step" },
    { id: "step-4", title: "Step 4", description: "Fourth step" }
);

export default function Questionary() {
    return (
        <QuestionaryStepper.Scoped>
            <QuestionaryContent />
        </QuestionaryStepper.Scoped>
    );
}

const QuestionaryContent = () => {
    const { when } = QuestionaryStepper.useStepper();

    return (
        <SafeAreaView className="flex-1 p-5 items-center justify-center">
            {when("step-1", () => (
                <Step1 />
            ))}
            {when("step-2", () => (
                <Step2 />
            ))}
            {when("step-3", () => (
                <Step3 />
            ))}
            {when("step-4", () => (
                <Step4 />
            ))}
        </SafeAreaView>
    );
};
