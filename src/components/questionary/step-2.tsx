import Mogo from "@/assets/questionary/mogo-2.svg";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { Text } from "@/src/components/ui/text";
import { useState } from 'react';
import { View } from 'react-native';
import { QuestionaryStepper } from "./stepper";

const options = [
    { value: "walk", label: "A pé" },
    { value: "car", label: "Carro" },
    { value: "public", label: "Transporte público" },
    { value: "other", label: "Outro" },
];

export default function Step2() {
    const { next, prev } = QuestionaryStepper.useStepper();
    const [locomotion, setLocomotion] = useState<string>();


    return (
        <>
            <View className="items-center gap-8 mb-8">
                <Text className="text-3xl font-bold text-center">Nos conhecendo melhor</Text>
                <Mogo width={150} height={150} />
            </View>

            <View className="flex-1 w-full justify-between">
                <View>
                    <Label
                        nativeID="deficiencia-select"
                        htmlFor="deficiencia-select"
                    >
                        Como costuma se locomover?
                    </Label>
                    <Select
                        id="deficiencia-select"
                        aria-labelledby="deficiencia-select"
                        value={{ value: locomotion ?? '', label: locomotion ?? 'Selecione' }}
                        onValueChange={(option) => setLocomotion(option?.value)}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent side="bottom" align="center" className="w-[90%] mx-auto">
                            <SelectGroup>
                                {options.map((disability) => (
                                    <SelectItem
                                        key={disability.value}
                                        label={disability.label}
                                        value={disability.value}
                                    >
                                        {disability.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
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