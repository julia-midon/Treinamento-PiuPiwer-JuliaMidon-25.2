import { useState } from "react";
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  ActivityIndicator, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView 
} from "react-native";
import { Link, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CadastroScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    // Simula cadastro
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View className="px-6 w-full max-w-md mx-auto">
          
          {/* LOGO E TEXTOS */}
          <View className="items-center mb-8">
            <View className="w-16 h-16 bg-amber-500 rounded-2xl items-center justify-center mb-4 shadow-lg shadow-amber-200">
               <MaterialCommunityIcons name="bird"  size={32} color="white" />
            </View>
            <Text className="text-3xl font-bold text-gray-800 tracking-tight">Piupiwer</Text>
            <Text className="text-gray-500 mt-1 text-sm">Conecte-se, compartilhe, descubra</Text>
          </View>

          {/* CARD DO FORMULÁRIO */}
          <View className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xl shadow-gray-100/50">
            
            <Text className="text-xl font-bold text-gray-800 mb-1">Bem-vindo</Text>
            <Text className="text-gray-400 text-xs mb-6">Entre ou crie sua conta para começar</Text>

            {/* ABAS (TABS) */}
            <View className="flex-row bg-gray-100 p-1 rounded-xl mb-6">
              <Link href="/login" asChild>
                <TouchableOpacity className="flex-1 py-2 items-center">
                  <Text className="text-gray-500 font-medium text-sm">Entrar</Text>
                </TouchableOpacity>
              </Link>
              <View className="flex-1 bg-white rounded-lg py-2 shadow-sm items-center">
                <Text className="text-gray-800 font-semibold text-sm">Cadastrar</Text>
              </View>
            </View>

            {/* INPUTS */}
            <View className="space-y-4">
              <View>
                <Text className="text-gray-700 text-xs font-bold mb-1.5 ml-1">Nome</Text>
                <TextInput
                  className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 text-gray-700 focus:border-amber-500"
                  placeholder="Seu nome"
                  placeholderTextColor="#9ca3af"
                  value={name}
                  onChangeText={setName}
                />
              </View>

              <View>
                <Text className="text-gray-700 text-xs font-bold mb-1.5 ml-1">Email</Text>
                <TextInput
                  className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 text-gray-700 focus:border-amber-500"
                  placeholder="seu@email.com"
                  placeholderTextColor="#9ca3af"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                />
              </View>

              <View>
                <Text className="text-gray-700 text-xs font-bold mb-1.5 ml-1">Senha</Text>
                <TextInput
                  className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 text-gray-700 focus:border-amber-500"
                  placeholder="********"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              {/* BOTÃO CRIAR CONTA (LARANJA/AMBER) */}
              <TouchableOpacity
                onPress={handleRegister}
                className="w-full h-12 bg-amber-500 rounded-xl justify-center items-center mt-2 shadow-lg shadow-amber-200"
              >
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text className="text-white font-bold text-sm">Criar conta</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}