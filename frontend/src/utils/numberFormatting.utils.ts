function numberFormatting(num: number): string {
  const suffixes: string[] = ['', 'k', 'm', 'b', 't']

  const suffixNum: number = Math.floor(('' + num).length / 3)

  let shortNum: number = parseFloat(
    (suffixNum !== 0 ? num / Math.pow(1000, suffixNum) : num).toPrecision(2)
  )
  if (shortNum % 1 !== 0) {
    shortNum = Number(shortNum.toFixed(1))
  }
  return shortNum + suffixes[suffixNum]
}
