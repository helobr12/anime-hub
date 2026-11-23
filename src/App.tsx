import { useEffect, useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Destaque from './components/Destaque'
import ListaAnimes from './components/ListaAnimes'
import ListaGeneros from './components/ListaGeneros'
import Rodape from './components/Rodape'
import { animeDestaque } from './data/animes'
import { generos } from './data/generos'
import type { Anime } from './data/tipos'

function App() {
  const [animes, setAnimes] = useState<Anime[]>([])
  const [carregando, setCarregando] = useState(true)
  const [favoritos, setFavoritos] = useState<number[]>([])
  const [apenasFavoritos, setApenasFavoritos] = useState(false)
  const [tema, setTema] = useState<'claro' | 'escuro'>('claro')

  useEffect(() => {
    fetch('/animes.json')
      .then((resposta) => resposta.json())
      .then((dados: Anime[]) => setAnimes(dados))
      .finally(() => setCarregando(false))
  }, [])

  function alternarFavorito(id: number) {
    setFavoritos((atual) =>
      atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id]
    )
  }

  function alternarTema() {
    setTema((atual) => (atual === 'claro' ? 'escuro' : 'claro'))
  }

  const todosAnimes = [...animes, animeDestaque]
  const animesExibidos = apenasFavoritos
    ? todosAnimes.filter((anime) => favoritos.includes(anime.id))
    : animes
  const tituloLista = apenasFavoritos ? 'Meus favoritos' : 'Em alta na temporada'

  return (
    <div className={tema === 'escuro' ? 'pagina tema-escuro' : 'pagina'}>
      <Cabecalho
        totalFavoritos={favoritos.length}
        apenasFavoritos={apenasFavoritos}
        onMudarVisao={setApenasFavoritos}
        tema={tema}
        onAlternarTema={alternarTema}
      />

      <main className="principal">
        <Destaque
          favorito={favoritos.includes(animeDestaque.id)}
          onAlternarFavorito={() => alternarFavorito(animeDestaque.id)}
        />

        <div className="listagens">
          <ListaAnimes
            titulo={tituloLista}
            animes={animesExibidos}
            favoritos={favoritos}
            carregando={carregando}
            onAlternarFavorito={alternarFavorito}
          />
          <ListaGeneros generos={generos} />
        </div>
      </main>

      <Rodape />
    </div>
  )
}

export default App