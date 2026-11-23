import type { Genero } from './tipos'

export const generos: Genero[] = [
  { id: 1, nome: 'Ação', quantidade: 120 },
  { id: 2, nome: 'Romance', quantidade: 85 },
  { id: 3, nome: 'Fantasia', quantidade: 64 },
  { id: 4, nome: 'Mistério', quantidade: 42 },
  { id: 5, nome: 'Comédia', quantidade: 78, visivelEm: 'tablet' },
  { id: 6, nome: 'Terror', quantidade: 36, visivelEm: 'tablet' },
  { id: 7, nome: 'Esporte', quantidade: 29, visivelEm: 'desktop' },
]