import type { Genero } from '../data/tipos'
import ItemGenero from './ItemGenero'

type ListaGenerosProps = {
  generos: Genero[]
}

function ListaGeneros({ generos }: ListaGenerosProps) {
  return (
    <section className="listagem-secundaria">
      <h2 className="titulo-secao">Explore por gênero</h2>

      <ul className="lista-generos">
        {generos.map((genero) => (
          <ItemGenero key={genero.id} genero={genero} />
        ))}
      </ul>
    </section>
  )
}

export default ListaGeneros