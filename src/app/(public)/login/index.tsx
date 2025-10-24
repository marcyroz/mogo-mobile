import GoogleSvg from '@/assets/google.svg';
import LogoSvg from '@/assets/logo.svg';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';
import { Text } from '@/src/components/ui/text';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function Login() {
  const handleEntrar = () => {
    console.log('Receba a entrada');
  };
  return (
    <SafeAreaView className="flex-1">
      <LogoSvg width="100%" height={424} />
      <View className="gap-3 p-5">
        <View>
          <Text className="font-semibold">Email</Text>
          <Input placeholder="Digite aqui..." />
        </View>
        <View className="gap-1">
          <Text className="font-semibold">Senha</Text>
          <Input placeholder="Digite aqui..." />
          <Text className="text-link">Esqueceu a senha?</Text>
        </View>
        <Button onPress={handleEntrar}>
          <Text>Entrar</Text>
        </Button>
        <Button variant="secondary">
          <GoogleSvg width={20} />
          <Text>Entrar com Google</Text>
        </Button>
        <Link href="/(public)/register">
          <Text className="self-center">
            Não tem conta? <Text className="text-link">Cadastre-se</Text>
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
