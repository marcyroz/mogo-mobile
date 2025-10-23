import GoogleSvg from '@/assets/google.svg';
import LogoSvg from '@/assets/logo.svg';
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Text } from "../components/ui/text";

export default function Home() {
  return (
    <SafeAreaView className="flex-1">
      <LogoSvg width="100%" height={424} />
      <View className="p-5 gap-3">
        <View>
          <Text className="font-semibold">
            Email
          </Text>
          <Input placeholder="Digite aqui..." />
        </View>
        <View className="gap-1">
          <Text className="font-semibold">
            Senha
          </Text>
          <Input placeholder="Digite aqui..." />
          <Text className="text-link">
            Esqueceu a senha?
          </Text>
        </View>
        <Button>
          <Text>Entrar</Text>
        </Button>
        <Button variant="secondary">
          <GoogleSvg width={20} />
          <Text>Entrar com Google</Text>
        </Button>
        <Text className="self-center">
          Não tem conta? <Text className="text-link">Cadastre-se</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}