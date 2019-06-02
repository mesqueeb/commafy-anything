import test from 'ava'
import commafy from '../dist/index.cjs'

test('defaults', t => {
  t.is(commafy(1), '1')
  t.is(commafy(10), '10')
  t.is(commafy(100), '100')
  t.is(commafy(1000), '1000')
  t.is(commafy(10000), '10,000')
  t.is(commafy(100000), '100,000')
  t.is(commafy(1000000), '1,000,000')
  t.is(commafy(10000000), '10,000,000')
  t.is(commafy(100000000), '100,000,000')
  t.is(commafy(1000000000), '1,000,000,000')
  t.is(commafy(10000000000), '10,000,000,000')
  t.is(commafy(100000000000), '100,000,000,000')
  t.is(commafy(1000000000000), '1,000,000,000,000')
})

test('thousands', t => {
  t.is(commafy(1000), '1000')
  t.is(commafy(9999), '9999')
  t.is(commafy(1000.0001), '1000.0001')

  const options = {thousands: true}
  t.is(commafy(1000, options), '1,000')
  t.is(commafy(9999, options), '9,999')
  t.is(commafy(1000.0001, options), '1,000.0001')
  t.is(
    commafy(1000.0001, {thousands: true, spacedDecimals: false}),
    '1,000.0001'
  )
  t.is(
    commafy(1000.0001, {thousands: true, spacedDecimals: true}),
    '1,000.000 1'
  )
  t.is(
    commafy(1000.0001, {thousands: false, spacedDecimals: true}),
    '1000.0001'
  )
})

test('defaults - decimals', t => {
  t.is(commafy(1), '1')
  t.is(commafy(1.1), '1.1')
  t.is(commafy(1.01), '1.01')
  t.is(commafy(1.001), '1.001')
  t.is(commafy(1.0001), '1.0001')
  t.is(commafy(1.00001), '1.00001')
  t.is(commafy(1.000001), '1.000001')
  t.is(commafy(1.0000001), '1.0000001')
  t.is(commafy(1.00000001), '1.00000001')
  t.is(commafy(1.000000001), '1.000000001')
  t.is(commafy(1.0000000001), '1.0000000001')
  t.is(commafy(1.00000000001), '1.00000000001')
  t.is(commafy(1.000000000001), '1.000000000001')
})

test('spaced decimals', t => {
  const options = {spacedDecimals: true}
  t.is(commafy(1, options), '1')
  t.is(commafy(1.1, options), '1.1')
  t.is(commafy(1.01, options), '1.01')
  t.is(commafy(1.001, options), '1.001')
  t.is(commafy(1.0001, options), '1.0001')
  t.is(commafy(1.00001, options), '1.000 01')
  t.is(commafy(1.000001, options), '1.000 001')
  t.is(commafy(1.0000001, options), '1.000 000 1')
  t.is(commafy(1.00000001, options), '1.000 000 01')
  t.is(commafy(1.000000001, options), '1.000 000 001')
  t.is(commafy(1.0000000001, options), '1.000 000 000 1')
  t.is(commafy(1.00000000001, options), '1.000 000 000 01')
  t.is(commafy(1.000000000001, options), '1.000 000 000 001')
})

test('strip decimals', t => {
  const options = {stripDecimals: true}
  t.is(commafy(1, options), '1')
  t.is(commafy(1.1, options), '1')
  t.is(commafy(1.01, options), '1')
  t.is(commafy(1.001, options), '1')
  t.is(commafy(1.0001, options), '1')
  t.is(commafy(1.00001, options), '1')
  t.is(commafy(1.000001, options), '1')
  t.is(commafy(1.0000001, options), '1')
  t.is(commafy(1.00000001, options), '1')
  t.is(commafy(1.000000001, options), '1')
  t.is(commafy(1.0000000001, options), '1')
  t.is(commafy(1.00000000001, options), '1')
  t.is(commafy(1.000000000001, options), '1')
})
