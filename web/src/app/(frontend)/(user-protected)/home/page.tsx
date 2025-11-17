// (user-protected)/home/page.tsx
import Sidebar from "@/components/ui/sidebar"

export default function HomePage() {
  // Dados mockados - depois vêm do backend
  const posts = [
    { 
      id: 1, 
      usuario: "Toni", 
      username: "@tonisilva", 
      texto: "Acabei de ver o loki no passeio", 
      horario: "5 min atrás", 
      likes: 8,
      comentarios: 2 
    },
    { 
      id: 2, 
      usuario: "Loki", 
      username: "@lokilindo", 
      texto: "Acabei de ver o toni no passeio", 
      horario: "1h atrás", 
      likes: 15,
      comentarios: 5 
    },
    { 
      id: 3, 
      usuario: "Turminha top", 
      username: "@turminhatop", 
      texto: "Fizemos 90/90 no ENEM, somos muito inteligentes!", 
      horario: "3h atrás", 
      likes: 23,
      comentarios: 7 
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-6 max-w-2xl mx-auto w-full">
        {/* Carrossel de Notícias */}
        <section className="mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">📰 Notícias da Poli</h3>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="shrink-0 w-64 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg p-4 text-white">
                  <h4 className="font-semibold">Evento de Tecnologia {item}</h4>
                  <p className="text-sm opacity-90 mt-2">Participe do maior evento de tech da universidade!</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Input para Publicações */}
        <section className="mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                JM
              </div>
              <textarea 
                placeholder="O que você está pensando?"
                className="flex-1 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <button className="p-2 text-gray-500 hover:text-blue-500 transition-colors">
                  📷
                </button>
                <button className="p-2 text-gray-500 hover:text-green-500 transition-colors">
                  🎵
                </button>
                <button className="p-2 text-gray-500 hover:text-red-500 transition-colors">
                  ❤️
                </button>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Publicar
              </button>
            </div>
          </div>
        </section>

        {/* Feed de Posts */}
        <section>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">📝 Feed</h3>
            
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  {/* Header do Post */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-linear-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {post.usuario[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{post.usuario}</div>
                      <div className="text-sm text-gray-500">{post.username} · {post.horario}</div>
                    </div>
                  </div>
                  
                  {/* Conteúdo do Post */}
                  <p className="text-gray-800 mb-3">{post.texto}</p>
                  
                  {/* Interações */}
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                      ♥️ {post.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                      💬 {post.comentarios}
                    </button>
                    <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                      🔄
                    </button>
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