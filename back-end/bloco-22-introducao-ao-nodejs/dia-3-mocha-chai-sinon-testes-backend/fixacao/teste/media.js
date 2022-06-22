module.exports = (media) => {
  if (media > 7) {
    return 'Aprovado'
  } else if (media < 7) {
    return 'Reprovado'
  } else {
    return 'Recuperação'
  }
}