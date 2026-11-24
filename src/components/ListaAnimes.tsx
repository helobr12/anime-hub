import type { Anime } from '../data/tipos'
import CardAnime from './CardAnime'

type ListaAnimesProps = {
  titulo: string
  animes: Anime[]
  favoritos: number[]
  carregando: boolean
  erro: boolean
  onAlternarFavorito: (id: number) => void
}

function ListaAnimes({
  titulo,
  animes,
  favoritos,
  carregando,
  erro,
  onAlternarFavorito,
}: ListaAnimesProps) {
  return (
    <section className="listagem-principal">
      <h2 className="titulo-secao">{titulo}</h2>

      {carregando ? (
        <p className="mensagem-estado">Carregando animes...</p>
      ) : erro ? (
        <p className="mensagem-erro">
          Não foi possível carregar os animes. Tente novamente mais tarde.
        </p>
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