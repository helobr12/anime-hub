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

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
        {/* Destaque da temporada (só tablet e desktop, como nos wireframes) */}
        <section
          aria-labelledby="destaque-titulo"
          className="hidden overflow-hidden rounded-3xl bg-gradient-to-br from-violet-900/60 to-slate-900 p-8 md:grid md:grid-cols-2 md:items-center md:gap-8"
        >
          <div>
            <p className="text-sm text-slate-300">Destaque da temporada</p>
            <h2 id="destaque-titulo" className="mt-1 text-3xl font-extrabold lg:text-5xl">
              Solo Leveling
            </h2>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/15 px-3 py-1 text-sm">Ação</span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-sm">Fantasia</span>
              <span className="ml-1 text-sm font-semibold text-amber-300">★ 8.7 / 10</span>
            </div>

            <p className="mt-4 max-w-md text-sm text-slate-300">
              Em um mundo onde caçadores enfrentam monstros mortais, o mais fraco de todos
              recebe um poder misterioso e começa a subir de nível.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#" className="rounded-lg bg-violet-500 px-5 py-2 text-sm font-semibold hover:bg-violet-400">
                Ver detalhes
              </a>
              <a href="#" className="rounded-lg bg-white/10 px-5 py-2 text-sm font-semibold hover:bg-white/20">
                + Favoritos
              </a>
            </div>
          </div>

          <div className="flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-700 text-5xl lg:h-72">
            <span aria-hidden="true">⚔️</span>
          </div>
        </section>

        <div className="mt-8 lg:grid lg:grid-cols-[1fr_320px] lg:items-start lg:gap-8">
          {/* Listagem principal */}
          <section aria-labelledby="principal-titulo" className="rounded-3xl bg-white/5 p-5 md:p-6">
            <p className="text-sm text-slate-400">Listagem principal</p>
            <h2 id="principal-titulo" className="text-xl font-bold md:text-2xl">Em alta na temporada</h2>

            <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <li>
                <article className="overflow-hidden rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30">
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-red-500 to-orange-700 text-3xl md:h-44">🗡️</div>
                  <div className="p-3">
                    <h3 className="font-bold">Demon Slayer</h3>
                    <p className="text-sm text-slate-400">Ação</p>
                    <p className="text-sm font-semibold text-amber-300">★ 8.4 / 10</p>
                  </div>
                </article>
              </li>

              <li>
                <article className="overflow-hidden rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30">
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-800 text-3xl md:h-44">🏍️</div>
                  <div className="p-3">
                    <h3 className="font-bold">Tokyo Revengers</h3>
                    <p className="text-sm text-slate-400">Ação</p>
                    <p className="text-sm font-semibold text-amber-300">★ 7.8 / 10</p>
                  </div>
                </article>
              </li>

              <li>
                <article className="overflow-hidden rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30">
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-purple-500 to-blue-900 text-3xl md:h-44">👁️</div>
                  <div className="p-3">
                    <h3 className="font-bold">Jujutsu Kaisen</h3>
                    <p className="text-sm text-slate-400">Ação</p>
                    <p className="text-sm font-semibold text-amber-300">★ 8.6 / 10</p>
                  </div>
                </article>
              </li>

              <li>
                <article className="overflow-hidden rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30">
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-800 text-3xl md:h-44">🌿</div>
                  <div className="p-3">
                    <h3 className="font-bold">Diários de uma Apotecária</h3>
                    <p className="text-sm text-slate-400">Mistério</p>
                    <p className="text-sm font-semibold text-amber-300">★ 8.8 / 10</p>
                  </div>
                </article>
              </li>

              <li>
                <article className="overflow-hidden rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30">
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-sky-400 to-cyan-700 text-3xl md:h-44">🧝</div>
                  <div className="p-3">
                    <h3 className="font-bold">Frieren</h3>
                    <p className="text-sm text-slate-400">Fantasia</p>
                    <p className="text-sm font-semibold text-amber-300">★ 9.3 / 10</p>
                  </div>
                </article>
              </li>

              <li>
                <article className="overflow-hidden rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30">
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-pink-400 to-rose-700 text-3xl md:h-44">🥜</div>
                  <div className="p-3">
                    <h3 className="font-bold">Spy x Family</h3>
                    <p className="text-sm text-slate-400">Comédia</p>
                    <p className="text-sm font-semibold text-amber-300">★ 8.6 / 10</p>
                  </div>
                </article>
              </li>

              <li>
                <article className="overflow-hidden rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30">
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-fuchsia-500 to-purple-800 text-3xl md:h-44">👽</div>
                  <div className="p-3">
                    <h3 className="font-bold">Dandadan</h3>
                    <p className="text-sm text-slate-400">Ação</p>
                    <p className="text-sm font-semibold text-amber-300">★ 8.5 / 10</p>
                  </div>
                </article>
              </li>

              <li>
                <article className="overflow-hidden rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30">
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-yellow-400 to-green-700 text-3xl md:h-44">⚽</div>
                  <div className="p-3">
                    <h3 className="font-bold">Blue Lock</h3>
                    <p className="text-sm text-slate-400">Esporte</p>
                    <p className="text-sm font-semibold text-amber-300">★ 8.2 / 10</p>
                  </div>
                </article>
              </li>

              <li>
                <article className="overflow-hidden rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30">
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-orange-400 to-red-700 text-3xl md:h-44">🏐</div>
                  <div className="p-3">
                    <h3 className="font-bold">Haikyuu!!</h3>
                    <p className="text-sm text-slate-400">Esporte</p>
                    <p className="text-sm font-semibold text-amber-300">★ 8.7 / 10</p>
                  </div>
                </article>
              </li>

              <li>
                <article className="overflow-hidden rounded-2xl bg-white/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30">
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-rose-500 to-red-900 text-3xl md:h-44">🪚</div>
                  <div className="p-3">
                    <h3 className="font-bold">Chainsaw Man</h3>
                    <p className="text-sm text-slate-400">Ação</p>
                    <p className="text-sm font-semibold text-amber-300">★ 8.3 / 10</p>
                  </div>
                </article>
              </li>
            </ul>

            <div className="mt-6 text-center">
              <a href="#" className="inline-block rounded-lg bg-white/10 px-8 py-2 text-sm font-semibold hover:bg-white/20">
                Ver mais
              </a>
            </div>
          </section>

          {/* Listagem secundária */}
          <section aria-labelledby="secundaria-titulo" className="mt-6 rounded-3xl bg-white/5 p-5 md:p-6 lg:mt-0">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-slate-400">Listagem secundária</p>
                <h2 id="secundaria-titulo" className="text-xl font-bold md:text-2xl">Explore por gênero</h2>
              </div>
              <a href="#" className="text-sm text-violet-300 hover:text-violet-200 lg:hidden">Ver todos &gt;</a>
            </div>

            <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-1 lg:gap-3">
              <li>
                <a href="#" className="block rounded-2xl bg-white/10 p-3 transition hover:bg-white/20 lg:flex lg:items-center lg:justify-between">
                  <div>
                    <h3 className="font-bold">Ação</h3>
                    <p className="text-sm text-slate-400">120 animes</p>
                  </div>
                  <span aria-hidden="true" className="hidden text-slate-400 lg:block">&gt;</span>
                </a>
              </li>

              <li>
                <a href="#" className="block rounded-2xl bg-white/10 p-3 transition hover:bg-white/20 lg:flex lg:items-center lg:justify-between">
                  <div>
                    <h3 className="font-bold">Romance</h3>
                    <p className="text-sm text-slate-400">85 animes</p>
                  </div>
                  <span aria-hidden="true" className="hidden text-slate-400 lg:block">&gt;</span>
                </a>
              </li>

              <li>
                <a href="#" className="block rounded-2xl bg-white/10 p-3 transition hover:bg-white/20 lg:flex lg:items-center lg:justify-between">
                  <div>
                    <h3 className="font-bold">Fantasia</h3>
                    <p className="text-sm text-slate-400">64 animes</p>
                  </div>
                  <span aria-hidden="true" className="hidden text-slate-400 lg:block">&gt;</span>
                </a>
              </li>

              <li>
                <a href="#" className="block rounded-2xl bg-white/10 p-3 transition hover:bg-white/20 lg:flex lg:items-center lg:justify-between">
                  <div>
                    <h3 className="font-bold">Mistério</h3>
                    <p className="text-sm text-slate-400">42 animes</p>
                  </div>
                  <span aria-hidden="true" className="hidden text-slate-400 lg:block">&gt;</span>
                </a>
              </li>

              <li className="hidden md:block">
                <a href="#" className="block rounded-2xl bg-white/10 p-3 transition hover:bg-white/20 lg:flex lg:items-center lg:justify-between">
                  <div>
                    <h3 className="font-bold">Comédia</h3>
                    <p className="text-sm text-slate-400">78 animes</p>
                  </div>
                  <span aria-hidden="true" className="hidden text-slate-400 lg:block">&gt;</span>
                </a>
              </li>

              <li className="hidden md:block">
                <a href="#" className="block rounded-2xl bg-white/10 p-3 transition hover:bg-white/20 lg:flex lg:items-center lg:justify-between">
                  <div>
                    <h3 className="font-bold">Terror</h3>
                    <p className="text-sm text-slate-400">36 animes</p>
                  </div>
                  <span aria-hidden="true" className="hidden text-slate-400 lg:block">&gt;</span>
                </a>
              </li>

              <li className="hidden lg:block">
                <a href="#" className="block rounded-2xl bg-white/10 p-3 transition hover:bg-white/20 lg:flex lg:items-center lg:justify-between">
                  <div>
                    <h3 className="font-bold">Esporte</h3>
                    <p className="text-sm text-slate-400">29 animes</p>
                  </div>
                  <span aria-hidden="true" className="hidden text-slate-400 lg:block">&gt;</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="mt-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-slate-400 md:px-6 lg:px-8">
          © 2026 AnimeHub · Trabalho de Conclusão da Disciplina
        </div>
      </footer>
    </div>
  )
}

export default App