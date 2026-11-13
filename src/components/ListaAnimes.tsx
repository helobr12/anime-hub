import type { Anime } from '../data/tipos'
import CardAnime from './CardAnime'

type ListaAnimesProps = {
  titulo: string
  animes: Anime[]
  favoritos: number[]
  onAlternarFavorito: (id: number) => void
}

function ListaAnimes({ titulo, animes, favoritos, onAlternarFavorito }: ListaAnimesProps) {
  return (
    <section className="listagem-principal">
      <h2 className="titulo-secao">{titulo}</h2>

      {animes.length === 0 ? (
        <p className="lista-vazia">Você ainda não favoritou nenhum anime.</p>
      ) : (
        <ul className="grade-animes">
          {animes.map((anime) => (
            <CardAnime
              key={anime.id}
              anime={anime}
              favorito={favoritos.includes(anime.id)}
              onAlternarFavorito={onAlternarFavorito}
            />
          ))}
        </ul>
      )}

      <div className="ver-mais">
        <button className="botao botao-preto">Ver mais</button>
      </div>
    </section>
  )
}

export default ListaAnimes