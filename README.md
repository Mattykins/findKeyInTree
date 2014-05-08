findKeyInTree
=============

This function recursively searches an object for keys that match `key`, and
returns the "path" to that key.

Usage:
------

Object.findKeyInTree takes two parameters: `key` and an `options` object. `key` is
the key you'd like to search the object for. The `options` object has a couple of
values such as `caseSensitive` and `conventionAgnostic`

Default Options:
------
    {
      caseSensitive: true,
      conventionAgnostic: false
    }

Examples:
---------
For all the following examples, we will assume that

    var test = {
        human: {
            ninja: true,
            dog: isOnInternet ? true : false
        },
        mammal: {
            ninja: true,
            turtle: false,
            dog: true,
            flying_squirrel: 'Yup'
        },
        reptile: {
            turtle: true,
            ninja: true || false,
            lizard: truekk
        },
        flyingSquirrel: 'Yuuuuup!',
        FLYING_SQUIRREL: true
    };

`test.findKeyInTree('mammal')` would return `'mammal'`.

`test.findKeyInTree('dog')` would return `['human.dog', 'mammal.dog']`.

`test.findKeyInTree('Dog')` would return `false`.

`test.findKeyInTree('flying_squirrel', { caseSensitive: false });` would return `'mammal.flying_squirrel'`

`test.findKeyInTree('flying_squirrel', { caseSensitive: false, conventionAgnostic: true });` would return `['mammal.flying_squirrel', 'flyingSquirrel', 'FLYING_SQUIRREL']`

Got it? Good.
