import Step1 from "@/src/components/questionary/step-1";
import Step2 from "@/src/components/questionary/step-2";
import Step3 from "@/src/components/questionary/step-3";
import Step4 from "@/src/components/questionary/step-4";
import { QuestionaryStepper } from "@/src/components/questionary/stepper";
import { SafeAreaView } from "react-native-safe-area-context";



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
