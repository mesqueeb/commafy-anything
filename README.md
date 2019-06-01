# Commafy anything 🍡

```
npm i commafy-anything
```

Adds comma's to a number. A simple and small integration.

## Motivation

U built this package because I needed to add comma's to numbers! And I wanted to build it myself. 😄

## Meet the family

- [copy-anything 🎭](https://github.com/mesqueeb/copy-anything)
- [merge-anything 🥡](https://github.com/mesqueeb/merge-anything)
- [filter-anything ⚔️](https://github.com/mesqueeb/filter-anything)
- [find-and-replace-anything 🎣](https://github.com/mesqueeb/find-and-replace-anything)
- [compare-anything 🛰](https://github.com/mesqueeb/compare-anything)
- [flatten-anything 🏏](https://github.com/mesqueeb/flatten-anything)
- [is-what 🙉](https://github.com/mesqueeb/is-what)

## Usage

```js
import commafy from 'commafy-anything'

commafy(1000) === '1000'
commafy(10000) === '10,000'
commafy(100000) === '100,000'
commafy(1000000) === '1,000,000'
// etc.
```

### Spaced decimals

```js
// default:
commafy(1.0001) === '1.0001'
commafy(1.00001) === '1.00001'
commafy(1.000001) === '1.000001'
commafy(1.0000001) === '1.0000001'

// spaced decimals:
const options = {spacedDecimals: true}
commafy(1.0001, options) === '1.0001'
commafy(1.00001, options) === '1.000 01'
commafy(1.000001, options) === '1.000 001'
commafy(1.0000001, options) === '1.000 0001'
```

### Strip decimals

```js
// default:
commafy(1.0001) === '1.0001'

// strip decimals:
const options = {stripDecimals: true}
commafy(1.001, options) === '1'
commafy(1.999, options) === '1'
```

## Source code

I'm using simple regular expressions. The source code is in TypeScript, but the essense of my source code looks something like this:

```js
function commafy (num, {stripDecimals, spacedDecimals} = {}) {
  const str = num.toString().split('.')
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  }
  if (stripDecimals) return str[0]
  if (spacedDecimals && str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ').trim()
  }
  return str.join('.')
}
```
