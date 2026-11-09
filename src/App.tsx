import './App.css'

function App() {
  return (
    <div className="pagina">
      <header className="cabecalho">
        <div className="cabecalho-conteudo">
          <h1 className="logo">
            ANIME<span className="logo-destaque">HUB</span>
          </h1>

          <nav className="menu">
            <ul className="menu-lista">
              <li className="menu-item menu-item-ativo">Início</li>
              <li className="menu-item">Em alta</li>
              <li className="menu-item">Gêneros</li>
              <li className="menu-item">Lançamentos</li>
              <li className="menu-item">Favoritos</li>
            </ul>
          </nav>

          <input
            type="search"
            placeholder="Buscar animes..."
            className="busca busca-desktop"
          />

          <button className="botao botao-entrar">Entrar</button>

          <button className="botao-menu">☰</button>
        </div>

        <div className="busca-mobile-area">
          <input
            type="search"
            placeholder="Buscar animes..."
            className="busca"
          />
        </div>
      </header>

      <main className="principal">
        <section className="destaque">
          <div className="destaque-texto">
            <p className="destaque-rotulo">Destaque da temporada</p>
            <h2 className="destaque-titulo">Solo Leveling</h2>

            <div className="destaque-tags">
              <span className="tag">Ação</span>
              <span className="tag">Fantasia</span>
              <span className="nota">★ 8.7 / 10</span>
            </div>

            <p className="destaque-descricao">
              Sung Jin-woo é o caçador mais fraco do mundo, até ser escolhido por um sistema misterioso que
              o faz subir de nível sozinho.
            </p>

            <div className="destaque-botoes">
              <button className="botao botao-vermelho">Ver detalhes</button>
              <button className="botao botao-branco">+ Favoritos</button>
            </div>
          </div>

          <img
            src="/animes/sololeveling.png"
            alt="Solo Leveling"
            className="destaque-imagem"
          />
        </section>

        <div className="listagens">
          <section className="listagem-principal">
            <h2 className="titulo-secao">Em alta na temporada</h2>

            <ul className="grade-animes">
              <li className="card">
                <img src="/animes/demon%20slayer.jpeg" alt="Demon Slayer" className="card-imagem" />
                <div className="card-info">
                  <h3 className="card-titulo">Demon Slayer</h3>
                  <p className="card-genero">Ação</p>
                  <p className="card-nota">★ 8.4 / 10</p>
                </div>
              </li>

              <li className="card">
                <img src="/animes/tokyo.jpeg" alt="Tokyo Revengers" className="card-imagem" />
                <div className="card-info">
                  <h3 className="card-titulo">Tokyo Revengers</h3>
                  <p className="card-genero">Ação</p>
                  <p className="card-nota">★ 7.8 / 10</p>
                </div>
              </li>

              <li className="card">
                <img src="/animes/jujutsu.jpeg" alt="Jujutsu Kaisen" className="card-imagem" />
                <div className="card-info">
                  <h3 className="card-titulo">Jujutsu Kaisen</h3>
                  <p className="card-genero">Ação</p>
                  <p className="card-nota">★ 8.6 / 10</p>
                </div>
              </li>

              <li className="card">
                <img src="/animes/diario.jpeg" alt="Diários de uma Apotecária" className="card-imagem" />
                <div className="card-info">
                  <h3 className="card-titulo">Diários de uma Apotecária</h3>
                  <p className="card-genero">Mistério</p>
                  <p className="card-nota">★ 8.8 / 10</p>
                </div>
              </li>

              <li className="card">
                <img src="/animes/frieren.jpeg" alt="Frieren" className="card-imagem" />
                <div className="card-info">
                  <h3 className="card-titulo">Frieren</h3>
                  <p className="card-genero">Fantasia</p>
                  <p className="card-nota">★ 9.3 / 10</p>
                </div>
              </li>

              <li className="card">
                <img src="/animes/spy.jpeg" alt="Spy x Family" className="card-imagem" />
                <div className="card-info">
                  <h3 className="card-titulo">Spy x Family</h3>
                  <p className="card-genero">Comédia</p>
                  <p className="card-nota">★ 8.6 / 10</p>
                </div>
              </li>

              <li className="card">
                <img src="/animes/dandandan.jpeg" alt="Dandadan" className="card-imagem" />
                <div className="card-info">
                  <h3 className="card-titulo">Dandadan</h3>
                  <p className="card-genero">Ação</p>
                  <p className="card-nota">★ 8.5 / 10</p>
                </div>
              </li>

              <li className="card">
                <img src="/animes/bluelock.jpeg" alt="Blue Lock" className="card-imagem" />
                <div className="card-info">
                  <h3 className="card-titulo">Blue Lock</h3>
                  <p className="card-genero">Esporte</p>
                  <p className="card-nota">★ 8.2 / 10</p>
                </div>
              </li>

              <li className="card">
                <img src="/animes/haik.jpeg" alt="Haikyuu!!" className="card-imagem" />
                <div className="card-info">
                  <h3 className="card-titulo">Haikyuu!!</h3>
                  <p className="card-genero">Esporte</p>
                  <p className="card-nota">★ 8.7 / 10</p>
                </div>
              </li>

              <li className="card">
                <img src="/animes/man.jpeg" alt="Chainsaw Man" className="card-imagem card-imagem-baixo" />
                <div className="card-info">
                  <h3 className="card-titulo">Chainsaw Man</h3>
                  <p className="card-genero">Ação</p>
                  <p className="card-nota">★ 8.3 / 10</p>
                </div>
              </li>
            </ul>

            <div className="ver-mais">
              <button className="botao botao-preto">Ver mais</button>
            </div>
          </section>

          <section className="listagem-secundaria">
            <h2 className="titulo-secao">Explore por gênero</h2>

            <ul className="lista-generos">
              <li className="genero">
                <div>
                  <h3 className="genero-nome">Ação</h3>
                  <p className="genero-quantidade">120 animes</p>
                </div>
                <span className="genero-seta">›</span>
              </li>

              <li className="genero">
                <div>
                  <h3 className="genero-nome">Romance</h3>
                  <p className="genero-quantidade">85 animes</p>
                </div>
                <span className="genero-seta">›</span>
              </li>

              <li className="genero">
                <div>
                  <h3 className="genero-nome">Fantasia</h3>
                  <p className="genero-quantidade">64 animes</p>
                </div>
                <span className="genero-seta">›</span>
              </li>

              <li className="genero">
                <div>
                  <h3 className="genero-nome">Mistério</h3>
                  <p className="genero-quantidade">42 animes</p>
                </div>
                <span className="genero-seta">›</span>
              </li>

              <li className="genero genero-tablet">
                <div>
                  <h3 className="genero-nome">Comédia</h3>
                  <p className="genero-quantidade">78 animes</p>
                </div>
                <span className="genero-seta">›</span>
              </li>

              <li className="genero genero-tablet">
                <div>
                  <h3 className="genero-nome">Terror</h3>
                  <p className="genero-quantidade">36 animes</p>
                </div>
                <span className="genero-seta">›</span>
              </li>

              <li className="genero genero-desktop">
                <div>
                  <h3 className="genero-nome">Esporte</h3>
                  <p className="genero-quantidade">29 animes</p>
                </div>
                <span className="genero-seta">›</span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="rodape">© 2026 AnimeHub</footer>
    </div>
  )
}

export default App