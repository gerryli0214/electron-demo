const Storage = require('../class/storage')

let args = process.argv

let instance = new Storage()

for (let i = 0; i < 10; i++) {
  instance.set(`test_${i}_${args[2]}`, `${args[2]}_${i}`)
  console.log(instance.get(`test_${i}`))
}