# Commafy anything 🍡

<a href="https://www.npmjs.com/package/commafy-anything"><img src="https://img.shields.io/npm/v/commafy-anything.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/commafy-anything"><img src="https://img.shields.io/npm/dw/commafy-anything.svg" alt="Latest Stable Version"></a>

```
npm i commafy-anything
```

Return a number as string with `,` or `K`. A simple and small integration.

## Motivation

U built this package because I needed to add comma's and K to numbers! And I wanted to build it myself. 😄

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
import { commafy } from 'commafy-anything'

commafy(1000) === '1,000'
commafy(10000) === '10,000'
commafy(100000) === '100,000'
commafy(1000000) === '1,000,000'
// etc.
```

### K

You can show numbers as 1K.

```js
const options = { K: true }
// when smaller than 1000 will be shown as is, without K
commafy(123, options) === '123'

// when larger than 1000 it will round up/down behind the K
commafy(1234, options) === '1K'
commafy(10234, options) === '10K'
commafy(100234, options) === '100K'
commafy(1000234, options) === '1,000K'

commafy(1955, options) === '2K'
commafy(10955, options) === '11K'
commafy(100955, options) === '101K'
commafy(1000955, options) === '1,001K'
```

### Thousands

You can disable a comma to be added when the number is between `1000` ~ `9999`.

```js
// default:
commafy(1000) === '1,000'

const options = { thousandsComma: false }
commafy(1000, options) === '1000'
commafy(9999, options) === '9999'

// beyond 9999 it will always have a comma
commafy(10000, options) === '10,000'
```

### Spaced decimals

You can add spaces to decimals.

```js
// default:
commafy(1.0001) === '1.0001'
commafy(1.00001) === '1.00001'
commafy(1.000001) === '1.000001'
commafy(1.0000001) === '1.0000001'

// spaced decimals:
const options = { spacedDecimals: true }
commafy(1.0001, options) === '1.0001'
commafy(1.00001, options) === '1.000 01'
commafy(1.000001, options) === '1.000 001'
commafy(1.0000001, options) === '1.000 0001'
```

### Strip decimals

You can add strip away decimals.

```js
// default:
commafy(1.0001) === '1.0001'

// strip decimals:
const options = { stripDecimals: true }
commafy(1.001, options) === '1'
commafy(1.999, options) === '1'
```

## Source code

I'm using simple regular expressions. The source code is in TypeScript, but the essense of my source code looks something like this:

```js
function commafy (num, {stripDecimals, spacedDecimals} = {}) {
  const str = num.toString().split('.')
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  }
  if (stripDecimals) return str[0]
  if (spacedDecimals && str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ').trim()
  }
  return str.join('.')
}
```
