import GoogleSvg from '@/assets/google.svg';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';
import { Text } from '@/src/components/ui/text';
import { Pressable, View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { ArrowLeft } from 'lucide-react-native';

export default function Register() {
    // Expo router e useRouter para navegação programática (navegação mais complexa)
  const router = useRouter();

  const handleContinuar = () => {
    // Lógica para continuar o registro
    console.log('Continuar registro');
  };
  return (
    <SafeAreaView>
      <View className="p-5">
        <Pressable onPress={() => router.back()}>
          <ArrowLeft size={24} />
        </Pressable>
      </View>
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
