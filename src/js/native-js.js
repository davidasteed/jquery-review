(function() {
  'use strict';

  // using native JS, traverse the DOM and
  // a) find the paragraph in the <section> with the class of "firstContent"
  // b) count how many child nodes there are, and log to the browser
  let section = document.querySelector('section.firstContent');
  console.log('section is:', section);

  let paragraphs = section.querySelectorAll('p');
  console.log('paragraph nodelist is:', paragraphs);

  console.log('Hi, there are ' + paragraphs.length +
    ' p tags in the first section');

  // create a new element and attach it to the end of the <p> in the <section>
  let newParagraph = document.createElement('p');
  newParagraph.classList.add('newContent');
  newParagraph.innerText = 'Paragraph 5';
  console.log('newParagraph is', newParagraph);

  section.appendChild(newParagraph);

}());
