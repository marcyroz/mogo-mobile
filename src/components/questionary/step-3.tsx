import Mogo from '@/assets/mogo-3.svg';
import { QuestionaryStepper } from "@/src/app/(public)/register/questionary";
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Label } from "@/src/components/ui/label";
import { Text } from "@/src/components/ui/text";
import { useState } from "react";
import { View } from 'react-native';
import { } from "react-native-safe-area-context";

const options = [
    { value: "tactile", label: "Pisos táteis" },
    { value: "signes", label: "Placas" },
    { value: "ramps", label: "Rampas" },
    { value: "elevators", label: "Elevadores" },
]
export default function Step3() {
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
    const { next, prev } = QuestionaryStepper.useStepper();

    const toggleChecked = (value: string) => {
        setCheckedValues((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };
    return (
        <>
            <View className="items-center gap-8 mb-8">
                <Text className="text-3xl font-bold text-center">Nos conhecendo melhor</Text>
                <Mogo width={150} height={150} />
            </View>

            <View className="flex-1 justify-between">
                <View className="gap-1">
                    <Label nativeID="resources-checkbox">
                        Quais recursos fazem mais diferença para você?
                    </Label>
                    {options.map((option) => (
                        <View className="flex flex-row items-center gap-2" key={option.value}>
                            <Checkbox
                                checked={checkedValues.includes(option.value)}
                                onCheckedChange={() => toggleChecked(option.value)}
                            />
                            <Label
                                onPress={() => toggleChecked(option.value)}
                                className="font-normal"
                            >
                                {option.label}
                            </Label>
                        </View>
                    ))}
                </View>

                <View className="gap-3">
                    <Button onPress={next}>
                        <Text>Continuar</Text>
                    </Button>
                    <Button onPress={prev} variant="outline">
                        <Text>Voltar</Text>
                    </Button>
                </View>
            </View>
        </>
    )
}