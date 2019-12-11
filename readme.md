
[![logo](https://cdn.abranhe.com/projects/validate-mail/logo.svg)](https://npmjs.com/package/validate-mail)

# validate-mail

> Validate your emails got easier 📧

[![](https://img.shields.io/travis/abranhe/validate-mail.svg?logo=travis)](https://travis-ci.org/abranhe/validate-mail)
[![](https://abranhe.com/badge.svg)](https://github.com/abranhe)
[![](https://cdn.abranhe.com/badges/cash-me.svg)](https://cash.me/$abranhe)
[![](https://cdn.abranhe.com/badges/patreon.svg)](https://patreon.com/abranhe)
[![](https://img.shields.io/github/license/abranhe/validate-mail.svg)](https://github.com/abranhe/validate-mail/blob/master/license)
[![](https://img.shields.io/npm/v/validate-mail.svg)](https://npmjs.com/package/validate-mail)


## Install

```
$ npm install validate-mail
```

## Usage

```js
const validate = require('validate-mail');

validate('your@email.com');
// => true

validate('your @email.com');
// => false
```

## API

### validate(input)

Checks if an email is valid.

Type: `boolean`

#### input

Type: `string`

String (email) to be validated

## License

[MIT][license] License © [Carlos Abraham][abranhe]

<!-------------------- Links ------------------------>
[abranhe]: https://github.com/abranhe
[abranhe-img]: https://avatars3.githubusercontent.com/u/21347264?s=50
[license]: https://github.com/abranhe/validate-mail/blob/master/license
