import test from 'ava'
import { commafy } from '../src/index'

test('defaults', t => {
  t.is(commafy(1), '1')
  t.is(commafy(10), '10')
  t.is(commafy(100), '100')
  t.is(commafy(1000), '1,000')
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

test('K', t => {
  t.is(commafy(1, {K: true}), '1')
  t.is(commafy(14, {K: true}), '14')
  t.is(commafy(134, {K: true}), '134')
  t.is(commafy(1234, {K: true}), '1K')
  t.is(commafy(10234, {K: true}), '10K')
  t.is(commafy(100234, {K: true}), '100K')
  t.is(commafy(1000234, {K: true}), '1,000K')
  t.is(commafy(10000234, {K: true}), '10,000K')
  t.is(commafy(100000234, {K: true}), '100,000K')
  t.is(commafy(1000000234, {K: true}), '1,000,000K')
  t.is(commafy(10000000234, {K: true}), '10,000,000K')
  t.is(commafy(100000000234, {K: true}), '100,000,000K')
  t.is(commafy(1000000000234, {K: true}), '1,000,000,000K')
  t.is(commafy(1987, {K: true}), '2K')
  t.is(commafy(10987, {K: true}), '11K')
  t.is(commafy(100987, {K: true}), '101K')
  t.is(commafy(1000987, {K: true}), '1,001K')
  t.is(commafy(10000987, {K: true}), '10,001K')
  t.is(commafy(100000987, {K: true}), '100,001K')
  t.is(commafy(1000000987, {K: true}), '1,000,001K')
  t.is(commafy(10000000987, {K: true}), '10,000,001K')
  t.is(commafy(100000000987, {K: true}), '100,000,001K')
  t.is(commafy(1000000000987, {K: true}), '1,000,000,001K')
  t.is(commafy(1999, {K: true}), '2K')
  t.is(commafy(19999, {K: true}), '20K')
  t.is(commafy(199999, {K: true}), '200K')
  t.is(commafy(1999999, {K: true}), '2,000K')
  t.is(commafy(19999999, {K: true}), '20,000K')
  t.is(commafy(199999999, {K: true}), '200,000K')
  t.is(commafy(1999999999, {K: true}), '2,000,000K')
  t.is(commafy(19999999999, {K: true}), '20,000,000K')
  t.is(commafy(199999999999, {K: true}), '200,000,000K')
  t.is(commafy(1999999999999, {K: true}), '2,000,000,000K')
})

test('thousands', t => {
  // by default with
  t.is(commafy(1000), '1,000')
  t.is(commafy(9999), '9,999')
  t.is(commafy(1000.0001), '1,000.0001')
  
  // set to without
  t.is(commafy(1000, { thousandsComma: false }), '1000')
  t.is(commafy(9999, { thousandsComma: false }), '9999')
  t.is(commafy(1000.0001, { thousandsComma: false }), '1000.0001')

  // multiple options
  t.is(commafy(1000.0001, { thousandsComma: true, spacedDecimals: false }), '1,000.0001')
  t.is(commafy(1000.0001, { thousandsComma: true, spacedDecimals: true }), '1,000.000 1')
  t.is(commafy(1000.0001, { thousandsComma: false, spacedDecimals: true }), '1000.0001')
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
  const options = { spacedDecimals: true }
  t.is(commafy(1, options), '1')
  t.is(commafy(1.1, options), '1.1')
  t.is(commafy(1.01, options), '1.01')
  t.is(commafy(1.001, options), '1.001')
  t.is(commafy(1.0001, options), '1.000 1')
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
  const options = { stripDecimals: true }
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
