# Starwars

----
### Usage
1. `yarn`
2. `npm start`

----
### Assumptions
1. Pages should be similar to wireframes provided. No adding of flashing red lights.

----
### Notes
1. I'm using Ramda.js, a functional library, in my code because all their functions are automatically curried. You'll see things like `R.pathOr([], ['key1', 'key2', 'key3'], obj)` being used and that's the equivalent to `obj.key1.key2.key3`. What's nice about it is that if any part of that fails (for example `key2` doesn't exist), instead of throwing a runtime error, it will default to `[]`. Fancy!
2. I know the wireframes are using Bootstrap, but my CTO is the creator of Material-UI and I think he'll hunt me down and kill me if I used Bootstrap. I wish to live. My dogs need me.
