import { Redirect } from 'expo-router';

export default function Index() {
  // Como ainda não temos a lógica de persistência de sessão pronta,
  // vamos forçar o redirecionamento direto para a tela de login por enquanto.
  
  // No Expo Router, grupos com parenteses como (auth) não precisam ir na URL,
  // mas como queremos ser específicos, vamos apontar para o arquivo login.
  return <Redirect href="/login" />;
}