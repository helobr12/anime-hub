function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-6">
          <h1 className="text-2xl font-bold">
            Anime<span className="text-purple-400">Hub</span>
          </h1>

          <nav className="hidden md:block">
            <ul className="flex gap-6 text-sm text-gray-300">
              <li className="border-b-2 border-purple-400 pb-1 text-white">Início</li>
              <li>Em alta</li>
              <li>Gêneros</li>
              <li>Lançamentos</li>
              <li>Favoritos</li>
            </ul>
          </nav>

          <input
            type="search"
            placeholder="Buscar animes..."
            className="hidden w-64 rounded-lg bg-gray-800 px-3 py-2 text-sm lg:block"
          />

          <button className="hidden rounded-lg bg-purple-600 px-4 py-2 text-sm md:block">
            Entrar
          </button>

          <button className="text-2xl md:hidden">☰</button>
        </div>

        <div className="px-4 pb-4 md:px-6 lg:hidden">
          <input
            type="search"
            placeholder="Buscar animes..."
            className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm"
          />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <section className="hidden gap-8 rounded-2xl bg-gray-900 p-8 md:grid md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm text-gray-400">Destaque da temporada</p>
            <h2 className="mt-1 text-3xl font-bold lg:text-5xl">Solo Leveling</h2>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="rounded-full bg-gray-800 px-3 py-1">Ação</span>
              <span className="rounded-full bg-gray-800 px-3 py-1">Fantasia</span>
              <span className="text-yellow-400">★ 8.7 / 10</span>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              O caçador mais fraco do mundo recebe um poder misterioso e começa a ficar cada vez mais forte.
            </p>

            <div className="mt-6 flex gap-3 text-sm">
              <button className="rounded-lg bg-purple-600 px-5 py-2">Ver detalhes</button>
              <button className="rounded-lg bg-gray-800 px-5 py-2">+ Favoritos</button>
            </div>
          </div>

          <img
            src="/animes/sololeveling.png"
            alt="Solo Leveling"
            className="aspect-video w-full rounded-xl object-cover object-center"
          />
        </section>

        <div className="mt-8 lg:grid lg:grid-cols-[1fr_320px] lg:items-start lg:gap-8">
          <section className="rounded-2xl bg-gray-900 p-5">
            <p className="text-sm text-gray-400">Listagem principal</p>
            <h2 className="text-xl font-bold">Em alta na temporada</h2>

            <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <li className="overflow-hidden rounded-xl bg-gray-800">
                <img src="/animes/demon%20slayer.jpeg" alt="Demon Slayer" className="aspect-[3/4] w-full object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold">Demon Slayer</h3>
                  <p className="text-sm text-gray-400">Ação</p>
                  <p className="text-sm text-yellow-400">★ 8.4 / 10</p>
                </div>
              </li>

              <li className="overflow-hidden rounded-xl bg-gray-800">
                <img src="/animes/tokyo.jpeg" alt="Tokyo Revengers" className="aspect-[3/4] w-full object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold">Tokyo Revengers</h3>
                  <p className="text-sm text-gray-400">Ação</p>
                  <p className="text-sm text-yellow-400">★ 7.8 / 10</p>
                </div>
              </li>

              <li className="overflow-hidden rounded-xl bg-gray-800">
                <img src="/animes/jujutsu.jpeg" alt="Jujutsu Kaisen" className="aspect-[3/4] w-full object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold">Jujutsu Kaisen</h3>
                  <p className="text-sm text-gray-400">Ação</p>
                  <p className="text-sm text-yellow-400">★ 8.6 / 10</p>
                </div>
              </li>

              <li className="overflow-hidden rounded-xl bg-gray-800">
                <img src="/animes/diario.jpeg" alt="Diários de uma Apotecária" className="aspect-[3/4] w-full object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold">Diários de uma Apotecária</h3>
                  <p className="text-sm text-gray-400">Mistério</p>
                  <p className="text-sm text-yellow-400">★ 8.8 / 10</p>
                </div>
              </li>

              <li className="overflow-hidden rounded-xl bg-gray-800">
                <img src="/animes/frieren.jpeg" alt="Frieren" className="aspect-[3/4] w-full object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold">Frieren</h3>
                  <p className="text-sm text-gray-400">Fantasia</p>
                  <p className="text-sm text-yellow-400">★ 9.3 / 10</p>
                </div>
              </li>

              <li className="overflow-hidden rounded-xl bg-gray-800">
                <img src="/animes/spy.jpeg" alt="Spy x Family" className="aspect-[3/4] w-full object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold">Spy x Family</h3>
                  <p className="text-sm text-gray-400">Comédia</p>
                  <p className="text-sm text-yellow-400">★ 8.6 / 10</p>
                </div>
              </li>

              <li className="overflow-hidden rounded-xl bg-gray-800">
                <img src="/animes/dandandan.jpeg" alt="Dandadan" className="aspect-[3/4] w-full object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold">Dandadan</h3>
                  <p className="text-sm text-gray-400">Ação</p>
                  <p className="text-sm text-yellow-400">★ 8.5 / 10</p>
                </div>
              </li>

              <li className="overflow-hidden rounded-xl bg-gray-800">
                <img src="/animes/bluelock.jpeg" alt="Blue Lock" className="aspect-[3/4] w-full object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold">Blue Lock</h3>
                  <p className="text-sm text-gray-400">Esporte</p>
                  <p className="text-sm text-yellow-400">★ 8.2 / 10</p>
                </div>
              </li>

              <li className="overflow-hidden rounded-xl bg-gray-800">
                <img src="/animes/haik.jpeg" alt="Haikyuu!!" className="aspect-[3/4] w-full object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold">Haikyuu!!</h3>
                  <p className="text-sm text-gray-400">Esporte</p>
                  <p className="text-sm text-yellow-400">★ 8.7 / 10</p>
                </div>
              </li>

              <li className="overflow-hidden rounded-xl bg-gray-800">
                <img src="/animes/man.jpeg" alt="Chainsaw Man" className="aspect-[3/4] w-full object-cover object-bottom" />
                <div className="p-3">
                  <h3 className="font-bold">Chainsaw Man</h3>
                  <p className="text-sm text-gray-400">Ação</p>
                  <p className="text-sm text-yellow-400">★ 8.3 / 10</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 text-center">
              <button className="rounded-lg bg-gray-800 px-8 py-2 text-sm">Ver mais</button>
            </div>
          </section>

          <section className="mt-6 rounded-2xl bg-gray-900 p-5 lg:mt-0">
            <p className="text-sm text-gray-400">Listagem secundária</p>
            <h2 className="text-xl font-bold">Explore por gênero</h2>

            <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-1">
              <li className="rounded-xl bg-gray-800 p-3">
                <h3 className="font-bold">Ação</h3>
                <p className="text-sm text-gray-400">43 animes</p>
              </li>

              <li className="rounded-xl bg-gray-800 p-3">
                <h3 className="font-bold">Romance</h3>
                <p className="text-sm text-gray-400">55 animes</p>
              </li>

              <li className="rounded-xl bg-gray-800 p-3">
                <h3 className="font-bold">Fantasia</h3>
                <p className="text-sm text-gray-400">23 animes</p>
              </li>

              <li className="rounded-xl bg-gray-800 p-3">
                <h3 className="font-bold">Mistério</h3>
                <p className="text-sm text-gray-400">12 animes</p>
              </li>

              <li className="hidden rounded-xl bg-gray-800 p-3 md:block">
                <h3 className="font-bold">Comédia</h3>
                <p className="text-sm text-gray-400">78 animes</p>
              </li>

              <li className="hidden rounded-xl bg-gray-800 p-3 md:block">
                <h3 className="font-bold">Terror</h3>
                <p className="text-sm text-gray-400">36 animes</p>
              </li>

              <li className="hidden rounded-xl bg-gray-800 p-3 lg:block">
                <h3 className="font-bold">Esporte</h3>
                <p className="text-sm text-gray-400">29 animes</p>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
        © 2026 AnimeHub
      </footer>
    </div>
  )
}

export default App