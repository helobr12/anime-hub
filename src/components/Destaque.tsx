type DestaqueProps = {
  favorito: boolean
  onAlternarFavorito: () => void
}

function Destaque({ favorito, onAlternarFavorito }: DestaqueProps) {
  return (
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
          <button
            className={favorito ? 'botao botao-branco botao-favoritado' : 'botao botao-branco'}
            onClick={onAlternarFavorito}
            aria-pressed={favorito}
          >
            {favorito ? '♥ Favoritado' : '+ Favoritos'}
          </button>
        </div>
      </div>

      <img
        src="/animes/sololeveling.png"
        alt="Solo Leveling"
        className="destaque-imagem"
      />
    </section>
  )
}

export default Destaque