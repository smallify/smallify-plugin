const Smallify = require('smallify')
const smallifyPlugin = require('./index')
const smallify = Smallify({
  pino: {
    level: 'info',
    prettyPrint: true
  }
})

const p1 = smallifyPlugin(
  (ins1, opts, done) => {
    console.log(`smallify==ins1 :${smallify === ins1}`)
    done()
  },
  {
    name: 'p1'
    // prefix: 'pp1',
    // beanify: '<2.0.0'
  }
)

const p2 = smallifyPlugin(
  (ins2, opts, done) => {
    console.log(`smallify==ins2 :${smallify === ins2}`)
    done()
  },
  {
    // name: 'p2',
    prefix: 'pp2'
  }
)

smallify
  .register(p1, { name: 'np1', prefix: 'npp1', smallify: '>=1.0.0' })
  .register(p2)
  .ready(e => {
    e && smallify.$log.error(e.message)
    smallify.print()
  })
