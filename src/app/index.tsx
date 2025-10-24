import { Redirect } from 'expo-router';

export default function App() {
  // Redireciona para login por padrão
  return <Redirect href="/(public)/login" />;
}