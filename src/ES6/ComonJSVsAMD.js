/*
 CommonJS is more than that - it's a project to define a common API and ecosystem for JavaScript. '
 'One part of CommonJS is the Module specification. Node.js and RingoJS are server-side JavaScript runtimes,
 and yes, both of them implement modules based on the CommonJS Module spec.

 AMD (Asynchronous Module Definition) is another specification for modules.
 RequireJS is probably the most popular implementation of AMD. One major difference from CommonJS is that
 AMD specifies that modules are loaded asynchronously - that means modules are loaded in parallel,
 as opposed to blocking the execution by waiting for a load to finish.

 AMD is generally more used in client-side (in-browser) JavaScript development due to this,
 and CommonJS Modules are generally used server-side. However, you can use either module spec in either environment - for example,
 RequireJS offers directions for running in Node.js and browserify is a CommonJS Module implementation that can run in the browser.

 */