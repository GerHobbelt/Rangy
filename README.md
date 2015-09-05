Rangy
=====

A cross-browser JavaScript range and selection library.

The current version is version 1.3.0.

The latest source code and releases are on [GitHub](../../releases).

## Bower

There is now an official Rangy package for Bower with Rangy 1.2 and 1.3 versions, called `rangy`.

## AMD

Rangy 1.3 has AMD support.

## NPM

There is an official Rangy module on NPM called [`rangy`](https://www.npmjs.org/package/rangy).



## Documentation

Documentation is in [the GitHub wiki](https://github.com/timdown/rangy/wiki). 



## Related Products

jQuery rangyinputs: a clone of https://code.google.com/p/rangyinputs/



Introduction
------------

Rangy is a cross-browser JavaScript range and selection library. 
It provides a simple standards-based API for performing common DOM Range and Selection tasks in all major browsers, 
abstracting away the wildly different implementations of this functionality between Internet Explorer up to and 
including version 8 and DOM-compliant browsers.

For manipulating selections in &lt;textarea> and &lt;input type="text"> elements, see Rangy's poorly-named and svelter twin project, [Rangyinputs](../rangyinputs/).


New features and documentation
------------------------------

Uses
----

If you are developing a JavaScript application that interacts with the user selection 
then Rangy will be able to help by providing a single API for all browsers and by simplifying common tasks.

A particularly common scenario is when dealing with editable content within the browser, using designMode or contentEditable.


Features
--------

Rangy’s main features are:

- Range and Selection wrappers for all browsers, including IE 6-8, providing a single familiar API;
- Workarounds for several bugs in browser implementations of Range and Selection;
- Mozilla Range extensions such as intersectsNode(), isPointInRange() and compareNode() available on all browsers;
- Custom extensions to Range, including methods to iterate over all nodes within the Range and methods to split and normalize Range boundaries within text nodes;
- A full JavaScript implementation of DOM Range.


Modules
-------

Rangy also comes with modules, each of which builds on the core to provide a piece of user selection-related functionality. Current modules are:

- Selection save and restore
- CSS class apply and remove to/from selection
- Selection and Range serialization


Basic usage
-----------

```
var range = rangy.createRange();

// All DOM Range methods and properties supported
range.selectNodeContents(document.body);

// Selection object based on those in Mozilla, WebKit and Opera
var sel = rangy.getSelection();
sel.removeAllRanges();
sel.addRange(range);
```

Rangy also supplies convenience methods on its Range and Selection objects. For example, the previous two lines could be replaced by

```
sel.setSingleRange(range);
```


Browser support
---------------

Rangy is tested and works fully in the following browsers:

- Internet Explorer 6 and later
- Firefox 2.0 and later
- Google Chrome 5.0 and later
- Safari 3.2 and later
- Opera 9.6 and later

Rangy may well work in many other browsers. 
It uses no specific browser detection, only feature detection, so any browser that has a minimal Range and Selection implementation 
will work to some degree. Also included are workarounds for some known flaws in older browsers such as Safari 2.



How to build from source
------------------------

- Make sure you have NodeJS and NPM installed
- run `npm install` to install all required packages
- run `npm run build` from the repository root directory

The generated output (the build) is then available in the (automatically created) `build/` directory under its own subdirectory, e.g. `build/rangy-1.3alpha.525.876bad6/`


(Note: to 'sync' the `dev/` directory with this, you'll have to copy the files over manually.)

