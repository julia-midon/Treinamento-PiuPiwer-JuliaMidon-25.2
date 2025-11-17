'use client'
import { useState } from "react"
import LoginForm from "@/frontend/(auth)/login/_components/LoginForm"
import CadastroForm from "@/frontend/(auth)/cadastro/_components/CadastroForm"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">piupiwer</h1>
          <p className="text-gray-600 mt-2">Conectando a comunidade Poli</p>
        </div>

        {/* Tabs Switch */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 font-medium text-center ${
              isLogin 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Entrar
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 font-medium text-center ${
              !isLogin 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Cadastrar
          </button>
        </div>

        {/* Forms */}
        {isLogin ? <LoginForm /> : <CadastroForm />}
        
      </div>
    </div>
  )
}