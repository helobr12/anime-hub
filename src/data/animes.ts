import type { Anime } from './tipos'

export const animes: Anime[] = [
  { id: 1, titulo: 'Demon Slayer', genero: 'Ação', nota: 8.4, imagem: '/animes/demon%20slayer.jpeg' },
  { id: 2, titulo: 'Tokyo Revengers', genero: 'Ação', nota: 7.8, imagem: '/animes/tokyo.jpeg' },
  { id: 3, titulo: 'Jujutsu Kaisen', genero: 'Ação', nota: 8.6, imagem: '/animes/jujutsu.jpeg' },
  { id: 4, titulo: 'Diários de uma Apotecária', genero: 'Mistério', nota: 8.8, imagem: '/animes/diario.jpeg' },
  { id: 5, titulo: 'Frieren', genero: 'Fantasia', nota: 9.3, imagem: '/animes/frieren.jpeg' },
  { id: 6, titulo: 'Spy x Family', genero: 'Comédia', nota: 8.6, imagem: '/animes/spy.jpeg' },
  { id: 7, titulo: 'Dandadan', genero: 'Ação', nota: 8.5, imagem: '/animes/dandandan.jpeg' },
  { id: 8, titulo: 'Blue Lock', genero: 'Esporte', nota: 8.2, imagem: '/animes/bluelock.jpeg' },
  { id: 9, titulo: 'Haikyuu!!', genero: 'Esporte', nota: 8.7, imagem: '/animes/haik.jpeg' },
  { id: 10, titulo: 'Chainsaw Man', genero: 'Ação', nota: 8.3, imagem: '/animes/man.jpeg', imagemBaixo: true },
]

export const animeDestaque: Anime = {
  id: 11,
  titulo: 'Solo Leveling',
  genero: 'Ação',
  nota: 8.7,
  imagem: '/animes/sololeveling.png',
}