type CabecalhoProps = {
  totalFavoritos: number
  apenasFavoritos: boolean
  onMudarVisao: (apenasFavoritos: boolean) => void
  tema: 'claro' | 'escuro'
  onAlternarTema: () => void
}

function Cabecalho({
  totalFavoritos,
  apenasFavoritos,
  onMudarVisao,
  tema,
  onAlternarTema,
}: CabecalhoProps) {
  return (
    <header className="cabecalho">
      <div className="cabecalho-conteudo">
        <h1 className="logo">
          ANIME<span className="logo-destaque">HUB</span>
        </h1>

        <nav className="menu">
          <ul className="menu-lista">
            <li className={apenasFavoritos ? 'menu-item' : 'menu-item menu-item-ativo'}>
              <button className="menu-botao" onClick={() => onMudarVisao(false)}>
                Início
              </button>
            </li>
            <li className="menu-item">Em alta</li>
            <li className="menu-item">Gêneros</li>
            <li className="menu-item">Lançamentos</li>
            <li className={apenasFavoritos ? 'menu-item menu-item-ativo' : 'menu-item'}>
              <button className="menu-botao" onClick={() => onMudarVisao(true)}>
                Favoritos ({totalFavoritos})
              </button>
            </li>
          </ul>
        </nav>

        <input
          type="search"
          placeholder="Buscar animes..."
          className="busca busca-desktop"
        />

        <button className="botao botao-entrar">Entrar</button>

        <button
          className="botao-tema"
          onClick={onAlternarTema}
          aria-label={tema === 'claro' ? 'Ativar modo escuro' : 'Ativar modo claro'}
        >
          {tema === 'claro' ? '☾' : '☀'}
        </button>

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
  )
}

export default Cabecalho