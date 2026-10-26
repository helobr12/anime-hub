function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-6 lg:px-8">
          <a href="#" className="text-2xl font-bold tracking-tight md:text-3xl">
            Anime<span className="text-violet-400">Hub</span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex gap-5 text-sm text-slate-300 lg:gap-8">
              <li><a href="#" className="border-b-2 border-violet-400 pb-1 font-semibold text-white">Início</a></li>
              <li><a href="#" className="hover:text-white">Em alta</a></li>
              <li><a href="#" className="hover:text-white">Gêneros</a></li>
              <li><a href="#" className="hover:text-white">Lançamentos</a></li>
              <li><a href="#" className="hover:text-white">Favoritos</a></li>
            </ul>
          </nav>

          <div className="hidden flex-1 items-center rounded-lg bg-white/10 px-3 py-2 lg:flex lg:max-w-sm">
            <span aria-hidden="true">🔍</span>
            <input
              type="search"
              placeholder="Buscar animes..."
              className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          <a href="#" className="hidden rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold hover:bg-violet-400 md:inline-block">
            Entrar
          </a>

          <button aria-label="Abrir menu" className="md:hidden">
            <span className="block h-0.5 w-7 bg-white"></span>
            <span className="mt-1.5 block h-0.5 w-7 bg-white"></span>
            <span className="mt-1.5 block h-0.5 w-7 bg-white"></span>
          </button>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-4 md:px-6 lg:hidden">
          <div className="flex items-center rounded-lg bg-white/10 px-3 py-2">
            <span aria-hidden="true">🔍</span>
            <input
              type="search"
              placeholder="Buscar animes..."
              className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </header>

      <main></main>
    </div>
  )
}

export default App