import GoogleSvg from '@/assets/google.svg';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Text } from '@/src/components/ui/text';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Register() {
  const router = useRouter();

  const handleContinuar = () => {
    router.push('/(public)/register/questionary');
  };

  return (
    <SafeAreaView edges={['bottom']} className="flex-1">
      <View className="gap-3 p-5">
        <Text className="mt-8 text-3xl font-bold">Criar conta</Text>
        <View>
          <Text className="font-semibold">
            Nome <Text className="text-red-500">*</Text>
          </Text>
          <Input placeholder="Digite aqui..." />
        </View>
        <View>
          <Text className="font-semibold">
            Sobrenome <Text className="text-red-500">*</Text>
          </Text>
          <Input placeholder="Digite aqui..." />
        </View>
        <View>
          <Text className="font-semibold">
            E-mail <Text className="text-red-500">*</Text>
          </Text>
          <Input placeholder="Digite aqui..." />
        </View>
        <View>
          <Text className="font-semibold">
            Senha <Text className="text-red-500">*</Text>
          </Text>
          <Input placeholder="Digite aqui..." />
        </View>
        <View>
          <Text className="font-semibold">
            Confirmar senha <Text className="text-red-500">*</Text>
          </Text>
          <Input placeholder="Digite aqui..." />
        </View>
        <Button className="mt-4" onPress={handleContinuar}>
          <Text>Continuar</Text>
        </Button>
        <Button variant="secondary">
          <GoogleSvg width={20} />
          <Text>Entrar com Google</Text>
        </Button>
        <Link href="/(public)/login">
          <Text className="self-center">
            Já tem uma conta? <Text className="text-link">Faça login</Text>
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
