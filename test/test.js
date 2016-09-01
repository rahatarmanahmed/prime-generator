import test from 'ava'
import split from 'split'
import fs from 'fs'
import path from 'path'
import primes from '../lib/index'

test.cb('should generate first 10000 primes', t => {
  const P = primes()
  fs.createReadStream(path.join(__dirname, 'primes.txt'))
  .pipe(split())
  .on('data', line => {
    const p = Number(line.toString())

    // primes.txt ends with a newline, this means last value will be 0
    if(p === 0) return t.end()

    t.is(P.next().value, p)
  })
  .on('error', t.end)
})
