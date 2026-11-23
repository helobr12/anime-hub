import type { Anime } from '../data/tipos'
import CardAnime from './CardAnime'

type ListaAnimesProps = {
  titulo: string
  animes: Anime[]
  favoritos: number[]
  carregando: boolean
  onAlternarFavorito: (id: number) => void
}

function ListaAnimes({ titulo, animes, favoritos, carregando, onAlternarFavorito }: ListaAnimesProps) {
  return (
    <section className="listagem-principal">
      <h2 className="titulo-secao">{titulo}</h2>

      {carregando ? (
        <p className="mensagem-estado">Carregando animes...</p>
      ) : animes.length === 0 ? (
        <p className="mensagem-estado">Você ainda não favoritou nenhum anime.</p>
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