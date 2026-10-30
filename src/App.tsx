function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="border-b-4 border-black bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-6">
          <h1 className="font-display text-4xl tracking-wide">
            ANIME<span className="text-red-600">HUB</span>
          </h1>

          <nav className="hidden md:block">
            <ul className="flex gap-6 text-sm font-bold uppercase tracking-wide">
              <li className="border-b-4 border-red-600">Início</li>
              <li>Em alta</li>
              <li>Gêneros</li>
              <li>Lançamentos</li>
              <li>Favoritos</li>
            </ul>
          </nav>

          <input
            type="search"
            placeholder="Buscar animes..."
            className="hidden w-64 border-2 border-black bg-white px-3 py-2 text-sm lg:block"
          />

          <button className="hidden border-2 border-black bg-black px-5 py-2 text-sm font-bold uppercase text-white md:block">
            Entrar
          </button>

          <button className="text-3xl md:hidden">☰</button>
        </div>

        <div className="px-4 pb-3 md:px-6 lg:hidden">
          <input
            type="search"
            placeholder="Buscar animes..."
            className="w-full border-2 border-black bg-white px-3 py-2 text-sm"
          />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <section className="hidden gap-8 border-2 border-black bg-white p-8 shadow-[6px_6px_0_0_#000] md:grid md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">Destaque da temporada</p>
            <h2 className="font-display text-6xl leading-none lg:text-8xl">Solo Leveling</h2>

            <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase">
              <span className="border border-black px-2 py-1">Ação</span>
              <span className="border border-black px-2 py-1">Fantasia</span>
              <span className="ml-2 text-base text-red-600">★ 8.7 / 10</span>
            </div>

            <p className="mt-4 max-w-md text-stone-600">
              Sung Jin-woo é o caçador mais fraco do mundo, até ser escolhido por um sistema misterioso que
              o faz subir de nível sozinho.
            </p>

            <div className="mt-6 flex gap-3 text-sm font-bold uppercase">
              <button className="border-2 border-black bg-red-600 px-5 py-2 text-white">Ver detalhes</button>
              <button className="border-2 border-black bg-white px-5 py-2">+ Favoritos</button>
            </div>
          </div>

          <img
            src="/animes/sololeveling.png"
            alt="Solo Leveling"
            className="aspect-video w-full border-2 border-black object-cover object-center"
          />
        </section>

        <div className="mt-10 lg:grid lg:grid-cols-[1fr_300px] lg:items-start lg:gap-8">
          <section>
            <h2 className="border-b-4 border-black pb-1 font-display text-4xl">Em alta na temporada</h2>

            <ul className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              <li className="relative border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                <span className="absolute left-0 top-0 bg-black px-2 font-display text-xl text-white">01</span>
                <img src="/animes/demon%20slayer.jpeg" alt="Demon Slayer" className="aspect-[3/4] w-full border-b-2 border-black object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold leading-tight">Demon Slayer</h3>
                  <p className="text-sm text-stone-500">Ação</p>
                  <p className="text-sm font-bold text-red-600">★ 10 / 10</p>
                </div>
              </li>

              <li className="relative border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                <span className="absolute left-0 top-0 bg-black px-2 font-display text-xl text-white">02</span>
                <img src="/animes/tokyo.jpeg" alt="Tokyo Revengers" className="aspect-[3/4] w-full border-b-2 border-black object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold leading-tight">Tokyo Revengers</h3>
                  <p className="text-sm text-stone-500">Ação</p>
                  <p className="text-sm font-bold text-red-600">★ 9.8 / 10</p>
                </div>
              </li>

              <li className="relative border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                <span className="absolute left-0 top-0 bg-black px-2 font-display text-xl text-white">03</span>
                <img src="/animes/jujutsu.jpeg" alt="Jujutsu Kaisen" className="aspect-[3/4] w-full border-b-2 border-black object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold leading-tight">Jujutsu Kaisen</h3>
                  <p className="text-sm text-stone-500">Ação</p>
                  <p className="text-sm font-bold text-red-600">★ 9.6 / 10</p>
                </div>
              </li>

              <li className="relative border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                <span className="absolute left-0 top-0 bg-black px-2 font-display text-xl text-white">04</span>
                <img src="/animes/diario.jpeg" alt="Diários de uma Apotecária" className="aspect-[3/4] w-full border-b-2 border-black object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold leading-tight">Diários de uma Apotecária</h3>
                  <p className="text-sm text-stone-500">Mistério</p>
                  <p className="text-sm font-bold text-red-600">★ 8.8 / 10</p>
                </div>
              </li>

              <li className="relative border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                <span className="absolute left-0 top-0 bg-black px-2 font-display text-xl text-white">05</span>
                <img src="/animes/frieren.jpeg" alt="Frieren" className="aspect-[3/4] w-full border-b-2 border-black object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold leading-tight">Frieren</h3>
                  <p className="text-sm text-stone-500">Fantasia</p>
                  <p className="text-sm font-bold text-red-600">★ 8.9 / 10</p>
                </div>
              </li>

              <li className="relative border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                <span className="absolute left-0 top-0 bg-black px-2 font-display text-xl text-white">06</span>
                <img src="/animes/spy.jpeg" alt="Spy x Family" className="aspect-[3/4] w-full border-b-2 border-black object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold leading-tight">Spy x Family</h3>
                  <p className="text-sm text-stone-500">Comédia</p>
                  <p className="text-sm font-bold text-red-600">★ 8.6 / 10</p>
                </div>
              </li>

              <li className="relative border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                <span className="absolute left-0 top-0 bg-black px-2 font-display text-xl text-white">07</span>
                <img src="/animes/dandandan.jpeg" alt="Dandadan" className="aspect-[3/4] w-full border-b-2 border-black object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold leading-tight">Dandadan</h3>
                  <p className="text-sm text-stone-500">Ação</p>
                  <p className="text-sm font-bold text-red-600">★ 9.0 / 10</p>
                </div>
              </li>

              <li className="relative border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                <span className="absolute left-0 top-0 bg-black px-2 font-display text-xl text-white">08</span>
                <img src="/animes/bluelock.jpeg" alt="Blue Lock" className="aspect-[3/4] w-full border-b-2 border-black object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold leading-tight">Blue Lock</h3>
                  <p className="text-sm text-stone-500">Esporte</p>
                  <p className="text-sm font-bold text-red-600">★ 8.2 / 10</p>
                </div>
              </li>

              <li className="relative border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                <span className="absolute left-0 top-0 bg-black px-2 font-display text-xl text-white">09</span>
                <img src="/animes/haik.jpeg" alt="Haikyuu!!" className="aspect-[3/4] w-full border-b-2 border-black object-cover object-top" />
                <div className="p-3">
                  <h3 className="font-bold leading-tight">Haikyuu!!</h3>
                  <p className="text-sm text-stone-500">Esporte</p>
                  <p className="text-sm font-bold text-red-600">★ 8.7 / 10</p>
                </div>
              </li>

              <li className="relative border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                <span className="absolute left-0 top-0 bg-black px-2 font-display text-xl text-white">10</span>
                <img src="/animes/man.jpeg" alt="Chainsaw Man" className="aspect-[3/4] w-full border-b-2 border-black object-cover object-bottom" />
                <div className="p-3">
                  <h3 className="font-bold leading-tight">Chainsaw Man</h3>
                  <p className="text-sm text-stone-500">Ação</p>
                  <p className="text-sm font-bold text-red-600">★ 8.3 / 10</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 text-center">
              <button className="border-2 border-black bg-white px-10 py-2 text-sm font-bold uppercase hover:bg-black hover:text-white">
                Ver mais
              </button>
            </div>
          </section>

          <section className="mt-10 lg:mt-0">
            <h2 className="border-b-4 border-black pb-1 font-display text-4xl">Explore por gênero</h2>

            <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-1">
              <li className="flex items-center justify-between border-2 border-black bg-white p-3 hover:bg-red-600 hover:text-white">
                <div>
                  <h3 className="font-bold">Ação</h3>
                  <p className="text-sm opacity-60">55 animes</p>
                </div>
                <span className="hidden font-bold lg:block">›</span>
              </li>

              <li className="flex items-center justify-between border-2 border-black bg-white p-3 hover:bg-red-600 hover:text-white">
                <div>
                  <h3 className="font-bold">Romance</h3>
                  <p className="text-sm opacity-60">45 animes</p>
                </div>
                <span className="hidden font-bold lg:block">›</span>
              </li>

              <li className="flex items-center justify-between border-2 border-black bg-white p-3 hover:bg-red-600 hover:text-white">
                <div>
                  <h3 className="font-bold">Fantasia</h3>
                  <p className="text-sm opacity-60">34 animes</p>
                </div>
                <span className="hidden font-bold lg:block">›</span>
              </li>

              <li className="flex items-center justify-between border-2 border-black bg-white p-3 hover:bg-red-600 hover:text-white">
                <div>
                  <h3 className="font-bold">Mistério</h3>
                  <p className="text-sm opacity-60">77 animes</p>
                </div>
                <span className="hidden font-bold lg:block">›</span>
              </li>

              <li className="hidden items-center justify-between border-2 border-black bg-white p-3 hover:bg-red-600 hover:text-white md:flex">
                <div>
                  <h3 className="font-bold">Comédia</h3>
                  <p className="text-sm opacity-60">19 animes</p>
                </div>
                <span className="hidden font-bold lg:block">›</span>
              </li>

              <li className="hidden items-center justify-between border-2 border-black bg-white p-3 hover:bg-red-600 hover:text-white md:flex">
                <div>
                  <h3 className="font-bold">Terror</h3>
                  <p className="text-sm opacity-60">36 animes</p>
                </div>
                <span className="hidden font-bold lg:block">›</span>
              </li>

              <li className="hidden items-center justify-between border-2 border-black bg-white p-3 hover:bg-red-600 hover:text-white lg:flex">
                <div>
                  <h3 className="font-bold">Esporte</h3>
                  <p className="text-sm opacity-60">29 animes</p>
                </div>
                <span className="font-bold">›</span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="mt-10 border-t-4 border-black bg-black py-6 text-center text-sm text-stone-400">
        © 2026 AnimeHub
      </footer>
    </div>
  )
}

export default App