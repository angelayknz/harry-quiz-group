export function getRandomNumber() {
  const randomNumbers = []

  for (var i = 0; i < 30; i++) {
    const number = Math.floor(Math.random() * 30)
    var genNumber = randomNumbers.indexOf(number)
    if (genNumber === -1) {
      randomNumber.push(number)
    }
  }
  return randomNumber
}
