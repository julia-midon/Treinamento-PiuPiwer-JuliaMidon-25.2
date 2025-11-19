import Sidebar from "@/components/ui/sidebar"

export default function PerfilPage() {
  // Dados mockados - depois virão do backend
  const usuario = {
    nome: "Julia Midon",
    username: "@juliamidon",
    bio: "Desenvolvedora frontend e amante de tecnologia! 🚀",
    seguidores: 127,
    seguindo: 89,
    posts: 23
  }

  const postsUsuario = [
    { id: 1, texto: "Resenha demais esse PiuPiwer", horario: "2h atrás", likes: 15 },
    { id: 2, texto: "Amassei no testinho de SD hj", horario: "1 dia atrás", likes: 8 },
    { id: 3, texto: "To doida pra ir pra Vitória logo", horario: "3 dias atrás", likes: 12 },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-6">
        {/*Perfil*/}
        <section className="mb-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-linear-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                JM
              </div>
              
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900">{usuario.nome}</h1>
                <p className="text-gray-600">{usuario.username}</p>
                <p className="text-gray-700 mt-2">{usuario.bio}</p>
                
                {/* Estatísticas */}
                <div className="flex gap-6 mt-4">
                  <div className="text-center">
                    <div className="font-bold text-lg text-gray-900">{usuario.posts}</div>
                    <div className="text-sm text-gray-600">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-gray-900">{usuario.seguidores}</div>
                    <div className="text-sm text-gray-600">Seguidores</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-gray-900">{usuario.seguindo}</div>
                    <div className="text-sm text-gray-600">Seguindo</div>
                  </div>
                </div>
              </div>
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Editar Perfil
              </button>
            </div>
          </div>
        </section>

        {/* Posts do Usuário */}
        <section>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Meus Posts</h2>
            
            <div className="space-y-4">
              {postsUsuario.map((post) => (
                <div key={post.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="text-gray-800 mb-2">{post.texto}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.horario}</span>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                        ♥️ {post.likes}
                      </button>
                      <button className="hover:text-blue-500 transition-colors">
                        🔄
                      </button>
                      <button className="hover:text-green-500 transition-colors">
                        💬
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}