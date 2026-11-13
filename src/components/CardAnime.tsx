import type { Anime } from '../data/tipos'

type CardAnimeProps = {
  anime: Anime
  favorito: boolean
  onAlternarFavorito: (id: number) => void
}

function CardAnime({ anime, favorito, onAlternarFavorito }: CardAnimeProps) {
  const classeCard = favorito ? 'card card-favorito' : 'card'
  const classeImagem = anime.imagemBaixo ? 'card-imagem card-imagem-baixo' : 'card-imagem'
  const classeBotao = favorito ? 'botao-favorito botao-favorito-ativo' : 'botao-favorito'

  return (
    <li className={classeCard}>
      <img src={anime.imagem} alt={anime.titulo} className={classeImagem} />
      <div className="card-info">
        <div className="card-topo">
          <h3 className="card-titulo">{anime.titulo}</h3>
          <button
            className={classeBotao}
            onClick={() => onAlternarFavorito(anime.id)}
            aria-label={favorito ? `Remover ${anime.titulo} dos favoritos` : `Favoritar ${anime.titulo}`}
            aria-pressed={favorito}
          >
            {favorito ? '♥' : '♡'}
          </button>
        </div>
        <p className="card-genero">{anime.genero}</p>
        <p className="card-nota">★ {anime.nota.toFixed(1)} / 10</p>
      </div>
    </li>
  )
}

export default CardAnime