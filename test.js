delete Object.freeze;

var html = require('./html.js');

console.assert(
  html.escape('&<>\'"') === '&amp;&lt;&gt;&#39;&quot;',
  'correct escape'
);

console.assert(
  html.escape('<>\'"&') === '&lt;&gt;&#39;&quot;&amp;',
  'correct inverted escape'
);

console.assert(
  '&<>\'"' === html.unescape('&amp;&lt;&gt;&#39;&quot;'),
  'correct unescape'
);

console.assert(
  '<>\'"&' === html.unescape('&lt;&gt;&#39;&quot;&amp;'),
  'correct inverted unescape'
);