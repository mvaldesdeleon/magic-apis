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

function usefulThing(someArguments) {
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
      bar.js
      foo.js
*      index.js
      utils.js
    index.js
```

```
const { usefulFooThing, anotherUsefulFooThing } = require('./foo.js');
const { mostDefinitelyAnUsefulBarThing } = require('./bar.js');

module.exports = {
    usefulFooThing,
    anotherUsefulFooThing,
    mostDefinitelyAnUsefulBarThing
};
```

---
class: splash
name: library
background-image: url(images/library/ts-task-task-github-npm.png)

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
const example = {
    get foo() {
        console.log('getter called');
        return 42;
    },
    set foo(value) {
        console.log(`setter called: ${value}`);
    }
};

console.log('foo', example.foo); // 42

example.foo = 5;
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
    get: function(target, property) {
        console.log(`"getter" called: ${property}`);
        return 42;
    },
    set: function(target, property, value) {
        console.log(`"setter" called: ${property} = ${value}`);
    }
};

const target = {};
const proxy = new Proxy(target, handler);

console.log('foo', proxy.foo); // 42

proxy.foo = 5;

console.log('bar', proxy.bar); // 42

proxy.bar = 10;
```

---
class: splash
name: lots-of-traps
background-image: url(images/traps/martin-valdes-de-leon.jpg)

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
        return `called me with ${argumentsList.join(' ')}`;
    }
};

const target = () => {};
const proxy = new Proxy(target, handler);

delete proxy.foo;
console.log('foo', proxy.foo); // nope

console.log('odd', 'odd' in proxy); // true
console.log('even', 'even' in proxy); // false

console.log(proxy('some', 'args')); // called me with some args
```

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

console.log(A.foo.bar.qux);

B.foo.bar.qux = 'baz';

delete C.foo.bar.qux;

D.foo.bar.qux('baz');

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

const P = ezp({
    // get: function(props) { ... }
    // set: function(props, value) { ... }
    // delete: function(props) { ... }
    // has: function(props, value) { ... }
    // apply: function(props, args) { ... }
}, '$');

console.log(P.foo.bar.qux.$);

P.foo.bar.qux = 'baz';

delete P.foo.bar.qux;

if ('baz' in P.foo.bar.qux) {
    /* ... */
}

P.foo.bar.qux('baz');
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
    apply: function(props, args) {
        const [service, resource, method] = props;
        const [payload] = args;

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

console.log(D.foo.bar.qux.$); // baz
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

const L = live('./living-object.json');

L.foo.bar.qux = 'baz';

console.log(L.foo.bar.qux.$); // baz
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
            return props.reduceRight(
                (result, prop) => map[prop](result),
                args[0]
            );
        }
    });
}

let username = obj => obj.username;
let length = x => x.length;
let tooLong = x => x > 10;
let not = x => !x;

({username, length, tooLong, not} = compose({username, length, tooLong, not}));

const usernameValid = not . tooLong . length . username;

usernameValid({username: 'tomato'}); // true
usernameValid({username: 'cauliflower'}); // false
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
### [More Nicer Living Objects](https://github.com/bchr02/filejson)
### [Living Objects meets Redux](https://github.com/mweststrate/immer)
### [File System Abstraction](https://github.com/williamkapke/ezfs)
### [Typo Correction](https://github.com/mathiasbynens/tpyo)
### [Fluent Assertions](https://github.com/yairper/chai-by-proxy)
### [Pattern Matching](https://www.npmjs.com/package/xmatch)

---
class: splash typeset
name: thank-you
background-image: url(images/thank-you/gerald-dino-466158-unsplash.jpg)

# Thank<br />you

## [github.com/mvaldesdeleon/magic-apis](https://github.com/mvaldesdeleon/magic-apis)<br />[@mvaldesdeleon](https://twitter.com/mvaldesdeleon)<br />[https://slack.meetupjs.com.ar/](https://slack.meetupjs.com.ar/)

---
class: splash typeset
name: photo-references
background-image: url(images/references/jason-leung-507082-unsplash.jpg)

# Photography

## In order of appearance, via [unsplash.com](https://unsplash.com/):
### [Sean Patrick Murphy](https://unsplash.com/photos/089q6pMX-AI), [Samuel Zeller](https://unsplash.com/photos/nSrY5fJ4B60), [Hack Capital](https://unsplash.com/photos/uv5_bsypFUM), [Yung Chang](https://unsplash.com/photos/qAShc5SV83M), [Fabio Bracht](https://unsplash.com/photos/e3oE-l-rtpA), [Edho Pratma](https://unsplash.com/photos/T6fDN60bMWY), [Andrej Lišakov](https://unsplash.com/photos/V2OyJtFqEtY), [Owen Beard](https://unsplash.com/photos/DK8jXx1B-1c), [Erica Nilsson](https://unsplash.com/photos/mNIE4uaD3do), [Matthew Henry](https://unsplash.com/photos/U5rMrSI7Pn4), [Chris Fuller](https://unsplash.com/photos/TXMp-vvrCg4), [Rod Long](https://unsplash.com/photos/siTxjRLSkTA), [Mathieu Perrier](https://unsplash.com/photos/YY8TCS9Px4c), [Andre Benz](https://unsplash.com/photos/Mn9Fa_wQH-M), [Toshi](https://unsplash.com/photos/9z6bXecIAi0), [rawpixel](https://unsplash.com/photos/6q6qRY2LQJQ), [Chris Knight](https://unsplash.com/photos/CxDTMOGnQwU), [Clark Tibbs](https://unsplash.com/photos/oqStl2L5oxI), [Gerald Dino](https://unsplash.com/photos/foBGqA36r2o), [Gabriel Sollmann](https://unsplash.com/photos/Y7d265_7i08) and [Jason Leung](https://unsplash.com/photos/pLwh3AI1zKE)