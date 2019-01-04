<p align="center">
	<br>
	<a href="https://npmjs.com/package/validate-mail"><img src="https://cdn.abranhe.com/projects/validate-mail/logo.svg"></a>
	<br>
	<a href="https://npmjs.com/validate-mail">validate-mail</a>: Validate your emails easier 📧
	<br>
</p>

<p align="center">
	<a href="https://travis-ci.org/abranhe/validate-mail"><img src="https://img.shields.io/travis/abranhe/validate-mail.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abranhe.com/badges/cash-me.svg"></a>
	<a href="https://patreon.com/abranhe"><img src="https://cdn.abranhe.com/badges/patreon.svg" /></a>
	<a href="https://github.com/abranhe/validate-mail/blob/master/license"><img src="https://img.shields.io/github/license/abranhe/validate-mail.svg" /></a>
  <a href="https://npmjs.com/package/validate-mail"><img src="https://img.shields.io/npm/v/validate-mail.svg"></a>
  <br>
  <br>
</p>


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

## Team

|[![Carlos Abraham Logo][abranhe-img]][abranhe]|
| :-: |
| [Carlos Abraham][abranhe] |

## License

[MIT][license] License © [Carlos Abraham][abranhe]

<!-------------------- Links ------------------------>
[abranhe]: https://github.com/abranhe
[abranhe-img]: https://avatars3.githubusercontent.com/u/21347264?s=50
[license]: https://github.com/abranhe/validate-mail/blob/master/license
