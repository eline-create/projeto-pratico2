
// Extra -  Aprendendo a usar datas no javaScript

const options = { year: "numeric", month: "long", day: "numeric" };
const date = new Date(2020, 11, 31) // 2020-12-31T03:00:00.000Z
console.log(date.toLocaleDateString("pt-br", options))
// 31 de dezembro de 2020
console.log(date.toLocaleDateString("pt-br", { ...options, month: 'numeric'}))
// 31/12/2020

const regex = /^([0-9]{4})[-](0[1-9]|1[0-2])[-](0[0-9]|1[0-9]|2[0-9]|3[0-1])/gm
const dateRx = new Date(2020, 11, 31) // 2020-12-31T03:00:00.000Z
const [full, year, month, day] = regex.exec(dateRx.toISOString())

console.log(`${day}/${month}/${year}`)
// 31/12/2020