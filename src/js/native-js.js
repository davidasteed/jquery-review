(function() {
  'use strict';

  // using native JS, traverse the DOM and
  // a) find the paragraph in the <section> with the class of "firstContent"
  // b) count how many child nodes there are, and issue an alert in the browser
  let section = document.querySelector('section.firstContent');
  console.log('section is:', section);

  let paragraphs = section.querySelectorAll('p');
  console.log('paragraph nodelist is:', paragraphs);

  window.alert('Hi, there are ' + paragraphs.length +
    ' p tags in the first section');
}());
