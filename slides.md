class: splash
layout: true

---
class: title
name: change the rules with magic apis
background-image: url(images/title/sean-patrick-murphy-551711-unsplash.jpg)

---
name: hi
background-image: url(images/hello/samuel-zeller-362021-unsplash.jpg)

---
name: software developer
background-image: url(images/software-developer/hack-capital-568971-unsplash.jpg)

---
name: solving the same problem multiple times
background-image: url(images/ad-hoc/yung-chang-108329-unsplash.jpg)

---
name: something generic we can reuse
background-image: url(images/reuse/fabio-bracht-694774-unsplash.jpg)

---
layout: true
class: code ide

---
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
layout: true

---
name: library
background-image: url(images/library/acamica-task-github-npm.png)

---
name: api design


---
name: what we mean by api


---

# Expose one or multiple functions

module.exports

---

# Static functions or OOP

more code

---

# Chainable API optional

more code

---

# OK

---

# No Javascript

---

# ES6

---

# Disclaimer

---

# Proxies

---

# Target / Handler / Traps

---

# Getters / Setters

---

# Lots of traps!

---

# 3 More

---

# Get / Set / Delete / Apply / Has

---

# Semantics

---

# Examples: Traps

---

# Virtual Objects

---

# What can we do?

---

# Arbitrarily Nested Paths

---

# ezp Pitch

---

# Example: ezp

---

# Demo: ezp to demo ezp?

---

# Application: API Calls

---

# Application: Deep getter/setter

---

# Application: Living objects

---

# Application: File-system abstractions

---

# Just the start

---

# Example: Composition

---

# Interlude

---

# Tagged Template Literals

---

# Example: Template Literals

---

# A new function

---

# Example: Used as tag

---

# A new function, arguments rewritten

---

# Guarantee

---

# Example: Tagged Template Literals

---

# Raw

---

# Example: Raw

---

# Expressions AS-IS

---

# Can return anything

---

# What can we do?

---

# Example: Internationalization

---

# Domain Specific Languages

---

# Example: UI

---

# Example: Embedded Languages: GraphQL

---

# Example: Embedded Languages: YAML

---

# Example: Embedded Languages: GraphQL

---

# Example: Embedded Languages: Markdown

---

# Example: Embedded Languages: CSS: Styled Components

---

# Own Domain Specific Languages

---

# Example: Embedded Languages: Switch Notation A

---

# Example: Embedded Languages: Switch Notation B

---

# Your turn

---

# References

---

# Thank you