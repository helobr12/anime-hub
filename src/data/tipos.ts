export type Anime = {
  id: number
  titulo: string
  genero: string
  nota: number
  imagem: string
  imagemBaixo?: boolean
}

export type Genero = {
  id: number
  nome: string
  quantidade: number
  visivelEm?: 'tablet' | 'desktop'
}