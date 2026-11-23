import type { Genero } from '../data/tipos'

type ItemGeneroProps = {
  genero: Genero
}

function ItemGenero({ genero }: ItemGeneroProps) {
  const classe = genero.visivelEm ? `genero genero-${genero.visivelEm}` : 'genero'

  return (
    <li className={classe}>
      <div>
        <h3 className="genero-nome">{genero.nome}</h3>
        <p className="genero-quantidade">{genero.quantidade} animes</p>
      </div>
      <span className="genero-seta">›</span>
    </li>
  )
}

export default ItemGenero