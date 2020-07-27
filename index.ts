import Readmeio from './src/clients/readmeio'

new Readmeio()
  .getDoc('app-development-guides')
  .then((data) => console.log(data))
