# Hf Builder (hfb)

[![Build Status](https://travis-ci.org/smizell/hfb.svg)](https://travis-ci.org/smizell/hfb)

Functions for building [Hf representations](https://github.com/smizell/hf).

- [Hf Builder (hfb)](#hf-builder-hfb)
	- [Install](#install)
	- [Usage](#usage)
		- [`hfb.addAttributes`](#hfbaddattributes)
		- [`hfb.addTransition`](#hfbaddtransition)
		- [`hfb.addMetaAttributes`](#hfbaddmetaattributes)
		- [`hfb.addMetaLink`](#hfbaddmetalink)
	- [Developing and Contributing](#developing-and-contributing)
	- [License](#license)

## Install

```sh
npm install hfb --save
```

## Usage

### `hfb.attributes`

Takes an Hf object and an attributes object. If `attributes` does not exist, it adds it to the Hf object. It then returns the `attributes` property.

```js
var attributes = hfb.attributes({}); // now {attributes: {}}
```

### `hfb.addAttributes`

Takes an Hf object and an attributes object. If `attributes` does not exist, it adds it to the Hf object. If the `attributes` exist, it does a merge of the given attributes.

```js
var hfObj = hfb.addAttributes({}, {foo: 'bar'});
```

The `hfObj` variable now has:

```js
{
  attributes: {
    foo: 'bar'
  }
}
```

If you then do the following:

```js
hfb.addAttributes(hfObj, {hello: 'world'});
```

The value of `hfObj` would be.

```js
{
  attributes: {
    foo: 'bar',
    hello: 'world'
  }
}
```

### `hfb.transitions`

Takes an Hf object and a transition object. If the `transitions` array does not exist, it adds it to the Hf object. It then returns the `transitions` array.

```js
var transitions = hfb.transitions({}); // now {transitions: []}
```

### `hfb.addTransition`

Takes an Hf object and a transition object. If the `transitions` array does not exist, it adds it to the Hf object. It then adds the given transition to the array.

```js
var hfObj = hfb.addAttributes({}, {
  tag: 'link',
  rel: 'next',
  href: '/user/2'
});
```

The `hfObj` variable now has:

```js
{
  transitions: [
    {
      tag: 'link',
      rel: 'next',
      href: '/user/3'
    }
  ]
}
```

If you then do the following:

```js
hfb.addAttributes(hfObj, {
  tag: 'link',
  rel: 'prev',
  href: '/user/1'
});
```

The value of `hfObj` would be.

```js
{
  transitions: [
    {
      tag: 'link',
      rel: 'next',
      href: '/user/3'
    },
    {
      tag: 'link',
      rel: 'prev',
      href: '/user/1'
    }
  ]
}
```

### `hfb.addMetaAttributes`

Acts just like `hfb.addAttributes` except for meta attributes. If the `meta` object is not there, it creates it. If the `attributes` for the meta object is not there, it creates it. If `meta.attributes` is there, it does a merge of the given attributes.

```js
var hfObj = hfb.addMetaAttributes({}, {foo: 'bar'});
```

The `hfObj` variable now has:

```js
{
  meta: {
    attributes: {
      foo: 'bar'
    }
  }
}
```

### `hfb.addMetaLink`

Acts just like `hfb.addMetaLink`. If the `meta` object is not there, it creates it. If the `links` array for the meta object is not there, it creates it. Once `meta.links` is there, it adds the given link.

```js
var hfObj = hfb.addMetaLink({}, {
  tag: 'link',
  rel: 'next',
  href: '/user/2'
});
```

The `hfObj` variable now has:

```js
{
  meta: {
    links: [
      {
        tag: 'link',
        rel: 'next',
        href: '/user/3'
      }
    ]
  }
}
```

### `hfb.wrap`

If you have a normal object that you'd like to wrap as an Hf object, you can use `hfb.wrap`. It only accepts `object` types and will return an empty array if it receives anything other than an object.

```js
var oldObj = {
	foo: 'bar'
};

var newObj = hfb.wrap(oldObj); // now {attributes: {foo: 'bar'}}
```

## Developing and Contributing

To test, you can run:

```sh
npm test
```

If you install nodemon, you can run `npm run develop`.

```sh
npm install nodemon -g
npm run develop
```

Contributions are welcome! Please open a pull request.

## License

This code is [licensed under the MIT license](./LICENSE).
