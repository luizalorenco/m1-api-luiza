class Competidor {
    constructor(
      id,
      nome,
      pais,
      cidade,
      idade,
      peso,
      altura,
      rankMundial,
      pontos,
      saidas,
      paradas,
      eventosGanhos,
      dinheiroGanho
    ) {
      this.id = id
      this.nome = nome
      this.pais = pais
      this.cidade = cidade
      this.idade = idade
      this.peso = peso
      this.altura = altura
      this.rankMundial = rankMundial
      this.pontos = pontos
      this.saidas = saidas
      this.paradas = paradas
      this.eventosGanhos = eventosGanhos
      this.dinheiroGanho = dinheiroGanho
    }
  }
  
  module.exports = Competidor