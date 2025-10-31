import Mogo from '@/assets/mogo-1.svg';
import { QuestionaryStepper } from "@/src/app/(public)/register/questionary";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { Text } from "@/src/components/ui/text";
import { useState } from "react";
import { View } from "react-native";

const options = [
    { value: "visual", label: "Visual" },
    { value: "fisica", label: "Física" },
    { value: "intelectual", label: "Intelectual" },
    { value: "auditiva", label: "Auditiva" },
    { value: "psicossocial", label: "Psicossocial" },
    { value: "multipla", label: "Múltipla" },
];

export default function Step1() {
    const { next } = QuestionaryStepper.useStepper();

    const [pcdSelection, setPcdSelection] = useState("true");
    const [terceirosSelection, setTerceirosSelection] = useState<string>("proprio");
    const [disabilityType, setDisabilityType] = useState<string>();

    return (
        <>
            <View className="items-center gap-8 mb-8">
                <Text className="text-3xl font-bold text-center">Nos conhecendo melhor</Text>
                <Mogo width={150} height={150} />
            </View>

            <View className="flex-1 justify-between">
                <View className="gap-3">
                    <View>
                        <Label htmlFor="pcd-radio">Você é PCD?</Label>
                        <RadioGroup
                            value={pcdSelection}
                            className="flex-row gap-6"
                            onValueChange={setPcdSelection}
                            aria-labelledby="pcd-radio"
                            id="pcd-radio"
                        >
                            <View className="flex flex-row items-center gap-3">
                                <RadioGroupItem value="true" id="sim" />
                                <Label htmlFor="sim" className="font-normal">Sim</Label>
                            </View>
                            <View className="flex flex-row items-center gap-3">
                                <RadioGroupItem value="false" id="nao" />
                                <Label htmlFor="nao" className="font-normal">Não</Label>
                            </View>
                        </RadioGroup>
                    </View>

                    <View>
                        <Label htmlFor="terceiros-radio">
                            Você baixou o app para uso próprio ou de terceiros(PCD)?
                        </Label>
                        <RadioGroup
                            value={terceirosSelection}
                            className="flex-row gap-6"
                            onValueChange={setTerceirosSelection}
                            aria-labelledby="terceiros-radio"
                            id="terceiros-radio"
                        >
                            <View className="flex flex-row items-center gap-3">
                                <RadioGroupItem value="proprio" id="proprio" />
                                <Label htmlFor="proprio" className="font-normal">Próprio</Label>
                            </View>
                            <View className="flex flex-row items-center gap-3">
                                <RadioGroupItem value="terceiros" id="terceiros" />
                                <Label htmlFor="terceiros" className="font-normal">Terceiros</Label>
                            </View>
                        </RadioGroup>
                    </View>

                    <View>
                        <Label
                            nativeID="deficiencia-select"
                            htmlFor="deficiencia-select"
                        >
                            Selecione o tipo de deficiência
                        </Label>
                        <Select
                            id="deficiencia-select"
                            aria-labelledby="deficiencia-select"
                            value={{ value: disabilityType ?? '', label: disabilityType ?? 'Selecione' }}
                            onValueChange={(option) => setDisabilityType(option?.value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent align="center" className="w-[90%] mx-auto">
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
                </View>

                <Button onPress={next}>
                    <Text>Continuar</Text>
                </Button>
            </View>
        </>
    );
}
