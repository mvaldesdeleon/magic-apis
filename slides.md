class: splash typeset
name: title
background-image: url(images/title/sean-patrick-murphy-551711-unsplash.jpg)

# Change the world<br />with magic APIs!

---
class: splash
name: hello
background-image: url(images/hello/samuel-zeller-362021-unsplash.jpg)

---
class: splash
name: software-developer
background-image: url(images/software-developer/hack-capital-568971-unsplash.jpg)

---
class: splash
name: solving-the-same-problem-multiple-times
background-image: url(images/ad-hoc/yung-chang-108329-unsplash.jpg)

---
class: splash
name: something-generic-we-can-reuse
background-image: url(images/reuse/fabio-bracht-694774-unsplash.jpg)

---
class: code ide
name: function

```
cool-project/
  src/
*    index.js
```

```
/* Indexy things */

function usefulThing() {
    /* ... */
}

/* More indexy things... */
```

---
class: code ide
name: utils

```
cool-project/
  src/
    index.js
*    utils.js
```

```
function usefulThing() {
    /* ... */
}

function anotherUsefulThing() {
    /* ... */
}

function mostDefinitelyAnUsefulThing() {
    /* ... */
}

module.exports = {
    usefulThing,
    anotherUsefulThing,
    mostDefinitelyAnUsefulThing
};
```

---
class: code ide
name: module

```
cool-project/
  src/
    foo-utils/
*      index.js
      output.js
      parser.js
      utils.js
    index.js
```

```
const { usefulFooThing, anotherUsefulFooThing } = require('./parser.js');
const { mostDefinitelyAnUsefulFooThing } = require('./output.js');

module.exports = {
    usefulFooThing,
    anotherUsefulFooThing,
    mostDefinitelyAnUsefulFooThing
};
```

---
class: splash
name: library
background-image: url(images/library/acamica-task-github-npm.png)

---
class: splash typeset
name: api-design
background-image: url(images/design/edho-pratama-149011-unsplash.jpg)

# API

---
class: splash
name: what-we-mean-by-api
background-image: url(images/design/andrej-lisakov-686125-unsplash.jpg)

---
class: code ide
name: expose-one-or-multiple-functions

```
cool-project/
  src/
    index.js
*    utils.js
```

```
function usefulThing() {
    /* ... */
}

function anotherUsefulThing() {
    /* ... */
}

function mostDefinitelyAnUsefulThing() {
    /* ... */
}

module.exports = {
    usefulThing,
    anotherUsefulThing,
    mostDefinitelyAnUsefulThing
};
```

---
class: code ide
name: oop

```
cool-project/
  src/
    index.js
*    utils.js
```

```
class UsefulThing {
    constructor() {
        /* ... */
    }

    doTheThing() {
        /* ... */
    }

    doTheOtherThing() {
        /* ... */
    }
}

module.exports = {
    UsefulThing
};
```

---
class: code ide
name: chainable-api

```
cool-project/
  src/
*    index.js
    utils.js
```

```
const { UsefulThing } = require('./utils.js');

/* Indexy things */

const thing = new UsefulThing();

thing.doTheThing()
    .doTheOtherThing()
    .doTheThing();

/* More indexy things... */
```

---
class: splash
name: ok
background-image: url(images/ok/owen-beard-722582-unsplash.jpg)

---
class: splash
name: no-js
background-image: url(images/no-js/no-js.svg)

---
class: splash
name: js
background-image: url(images/no-js/js.svg)

---
class: splash
name: disclaimer
background-image: url(images/disclaimer/erica-nilsson-580402-unsplash.jpg)

---
class: splash typeset
name: proxies
background-image: url(images/proxies/matthew-henry-20172-unsplash.jpg)

# Proxies

---
class: code ide
name: getters-setters

```
proxies/
  src/
*    getters-setters.js
    proxy-intro.js
    proxy-rest.js
```

```
const demo = {
    bar: 0,
    get foo() {
        return this.bar * 2;
    },
    set foo(_foo) {
        this.bar = _foo + 1;
    }
};

demo.foo = 5;

console.log('foo', demo.foo);
```

---
class: code ide
name: proxy-intro

```
proxies/
  src/
    getters-setters.js
*    proxy-intro.js
    proxy-rest.js
```

```
const handler = {
    get: function(target, property, receiver) {
        return target[property] * 2;
    },
    set: function(target, property, value, receiver) {
        return Reflect.set(target, property, value + 1, receiver);
    }
};

const target = {};
const proxy = new Proxy(target, handler);

proxy.foo = 5;

console.log('foo', proxy.foo);

proxy.bar = 10;

console.log('bar', proxy.bar);
```

---
class: splash
name: lots-of-traps
background-image: url(images/traps/chris-fuller-481199-unsplash.jpg)

---
class: splash
name: three-traps-more
background-image: url(images/traps/rod-long-403704-unsplash.jpg)

---
class: code ide
name: proxy-rest

```
proxies/
  src/
    getters-setters.js
    proxy-intro.js
*    proxy-rest.js
```

```
const handler = {
    deleteProperty: function(target, property) {
        target[property] = 'nope';
        return true;
    },
    has: function(target, property) {
        return property.length % 2;
    },
    apply: function(target, thisArg, argumentsList) {
        target.args = argumentsList;
        return target;
    }
};

const target = () => {};
const proxy = new Proxy(target, handler);

delete proxy.foo;

console.log('foo', proxy.foo);

console.log('odd', 'odd' in proxy);
console.log('even', 'even' in proxy);

proxy('some', 'args');

console.log('args', proxy.args);
```

---
class: splash
name: virtual-objects
background-image: url(images/virtual/mathieu-perrier-723464-unsplash.jpg)

---
class: splash typeset
name: semantics
background-image: url(images/semantics/andre-benz-256762-unsplash.jpg)

# Semantics

---
class: splash
name: what-can-we-do-proxies
background-image: url(images/what-can-we-do/toshi-1072056-unsplash.jpg)

---
class: code ide
name: arbitrarily-nested-paths

```
examples/
  src/
    api.js
    composition.js
    deep-get-set.js
    ezp.js
    living-objects.js
*    nested-paths.js
    proxies.js
```

```
const { A, B, C, D, E } = require('./proxies.js');

A.foo.bar.qux = 'baz';

console.log(B.foo.bar.qux);

C.foo.bar.qux('baz');

delete D.foo.bar.qux;

if ('baz' in E.foo.bar.qux) {
    /* ... */
}
```

---
class: splash
name: ezp-pitch
background-image: url(images/ezp/mvaldesdeleon-ezp-github-npm.png)

---
class: code ide
name: ezp-example

```
examples/
  src/
    api.js
    composition.js
    deep-get-set.js
*    ezp.js
    living-objects.js
    nested-paths.js
    proxies.js
```

```
const ezp = require('ezp');

const probe = ezp({
    // get: function(props) { ... }
    // set: function(props, value) { ... }
    // delete: function(props) { ... }
    // has: function(props, value) { ... }
    apply: function([method], args) {
        console.log(`[${method.toUpperCase()}] `, ...args)
    }
});

const P = ezp(probe, '$');

P.foo.bar.qux = 'baz';

console.log(P.foo.bar.qux.$);

P.foo.bar.qux('baz');

delete P.foo.bar.qux;

if ('baz' in P.foo.bar.qux) {
    /* ... */
}
```

---
class: splash typeset
name: demo
background-image: url(images/demo/rawpixel-632465-unsplash.jpg)

# Demo<br />time

---
class: code ide
name: api-calls

```
examples/
  src/
*    api.js
    composition.js
    deep-get-set.js
    ezp.js
    living-objects.js
    nested-paths.js
    proxies.js
```

```
const ezp = require('ezp');

/* ... */

const API = ezp({
    apply: async function(props, args) {
        const [service, resource, method] = props;
        const [payload] = args;

        if (!methodValid(method))
            throw new Error(`Invalid method for resource ${resource}: ${method}`);

        return request(
            `https://${service}.foobar.com/${resource}`,
            httpMethod(method),
            payload
        );
    }
});

API.sales.orders.create({ /* ... */ });

API.crm.customers.list();
```

---
class: code ide
name: deep-getter-setter

```
examples/
  src/
    api.js
    composition.js
*    deep-get-set.js
    ezp.js
    living-objects.js
    nested-paths.js
    proxies.js
```

```
const ezp = require('ezp');

const toPath = props => props.join('.');

function deep() {
    const values = new Map();

    return ezp({
        get: function(props) {
            return values.get(toPath(props));
        },
        set: function(props, value) {
            values.set(toPath(props), value);
        }
    }, '$');
}

const D = deep();

D.foo.bar.qux = 'baz';

console.log(D.foo.bar.qux.$);
```

---
class: code ide
name: living-objects

```
examples/
  src/
    api.js
    composition.js
    deep-get-set.js
    ezp.js
*    living-objects.js
    nested-paths.js
    proxies.js
```

```
const ezp = require('ezp');
const fs = require('fs');
const path = require('path');
const R = require('ramda');
const util = require('util');

function live(path) {
    let data = {};
    const dataLoaded = util.promisify(fs.readFile)(path)
        .then(JSON.parse)
        .then(fileData => data = R.mergeDeepRight(fileData, data));

    return ezp({
        get: function(props) {
            return R.path(props, data);
        },
        set: async function(props, value) {
            data = R.assocPath(props, value, data);
            await dataLoaded;
            return util.promisify(fs.writeFile)(path, JSON.stringify(data));
        }
    }, '$');
}

const L = live(path.resolve([process.cwd(), './.living-object.json']));

L.foo.bar.qux = 'baz';

console.log(L.foo.bar.qux.$);
```

---

class: code ide
name: composition

```
examples/
  src/
    api.js
*    composition.js
    deep-get-set.js
    ezp.js
    living-objects.js
    nested-paths.js
    proxies.js
```

```
const ezp = require('ezp');

function compose(map) {
   return ezp({
        apply: function(props, args) {
            return props.reduceRight((result, prop) => [map[prop](...result)], args)[0];
        }
    });
}

let addOne = x => x + 1;
let timesTwo = x => x * 2;
let toString = x => x.toString();

({addOne, timesTwo, toString} = compose({addOne, timesTwo, toString}));

console.log(
    [1,2,3].map(toString.timesTwo.addOne)
);
```

---
class: splash
name: just-the-start
background-image: url(images/just-the-start/chris-knight-458508-unsplash.jpg)

---
class: splash
name: your-turn
background-image: url(images/outro/clark-tibbs-367075-unsplash.jpg)

---
class: splash typeset
name: thank-you
background-image: url(images/thank-you/gerald-dino-466158-unsplash.jpg)

# Thank<br />you

## [@mvaldesdeleon](https://twitter.com/mvaldesdeleon)<br />[github.com/mvaldesdeleon/magic-apis](https://github.com/mvaldesdeleon/magic-apis)

---
class: splash typeset
name: proxy-references
background-image: url(images/references/gabriel-sollmann-704393-unsplash.jpg)

# References

## In depth
### [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
### [Exploring ES6 Ch. 28: Metaprogramming with proxies](http://exploringjs.com/es6/ch_proxies.html)

## Libraries
### [Redis Client](https://github.com/Ovyerus/redite)
### [REST Client](https://github.com/humana-fragilitas/ES6-Rest-Client)
### [Functional Lenses](https://github.com/ochafik/es6-lenses)
### [Nicer Living Objects](https://www.npmjs.com/package/object-fsify)
### [Nicer Living Objects](https://github.com/bchr02/filejson)
### [File System Abstraction](https://github.com/williamkapke/ezfs)
### [Typo Correction](https://github.com/mathiasbynens/tpyo)
### [Fluent Assertions](https://github.com/yairper/chai-by-proxy)
### [Pattern Matching](https://www.npmjs.com/package/xmatch)

---
class: splash typeset
name: photo-references
background-image: url(images/references/jason-leung-507082-unsplash.jpg)

# Photography

## In order of appearance, via [unsplash.com](https://unsplash.com/):
### [Sean Patrick Murphy](https://unsplash.com/photos/089q6pMX-AI), [Samuel Zeller](https://unsplash.com/photos/nSrY5fJ4B60), [Hack Capital](https://unsplash.com/photos/uv5_bsypFUM), [Yung Chang](https://unsplash.com/photos/qAShc5SV83M), [Fabio Bracht](https://unsplash.com/photos/e3oE-l-rtpA), [Edho Pratma](https://unsplash.com/photos/T6fDN60bMWY), [Andrej Lišakov](https://unsplash.com/photos/V2OyJtFqEtY), [Owen Beard](https://unsplash.com/photos/DK8jXx1B-1c), [Erica Nilsson](https://unsplash.com/photos/mNIE4uaD3do), [Matthew Henry](https://unsplash.com/photos/U5rMrSI7Pn4), [Chris Fuller](https://unsplash.com/photos/TXMp-vvrCg4), [Rod Long](https://unsplash.com/photos/siTxjRLSkTA), [Mathieu Perrier](https://unsplash.com/photos/YY8TCS9Px4c), [Andre Benz](https://unsplash.com/photos/Mn9Fa_wQH-M), [Toshi](https://unsplash.com/photos/9z6bXecIAi0), [rawpixel](https://unsplash.com/photos/6q6qRY2LQJQ), [Chris Knight](https://unsplash.com/photos/CxDTMOGnQwU), [Clark Tibbs](https://unsplash.com/photos/oqStl2L5oxI), [Gerald Dino](https://unsplash.com/photos/foBGqA36r2o), [Gabriel Sollmann](https://unsplash.com/photos/Y7d265_7i08) and [Jason Leung](https://unsplash.com/photos/pLwh3AI1zKE)

---
exclude: true

# Interlude

---
exclude: true

# Tagged Template Literals

---
exclude: true

# Example: Template Literals

---
exclude: true

# A new function

---
exclude: true

# Example: Used as tag

---
exclude: true

# A new function, arguments rewritten

---
exclude: true

# Guarantee

---
exclude: true

# Example: Tagged Template Literals

---
exclude: true

# Raw

---
exclude: true

# Example: Raw

---
exclude: true

# Expressions AS-IS

---
exclude: true

# Can return anything

---
exclude: true

# What can we do?

---
exclude: true

# Example: Internationalization

---
exclude: true

# Domain Specific Languages

---
exclude: true

# Example: UI

---
exclude: true

# Example: Embedded Languages: GraphQL

---
exclude: true

# Example: Embedded Languages: YAML

---
exclude: true

# Example: Embedded Languages: GraphQL

---
exclude: true

# Example: Embedded Languages: Markdown

---
exclude: true

# Example: Embedded Languages: CSS: Styled Components

---
exclude: true

# Own Domain Specific Languages

---
exclude: true

# Example: Embedded Languages: Switch Notation A

---
exclude: true

# Example: Embedded Languages: Switch Notation B

---
exclude: true

# References: Tagged Template Literals