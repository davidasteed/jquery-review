(function() {
  'use strict';

  // attach to all <li> using jquery
  // let arrayOfLi = Array.from($('ol').children('li'));
  let arrayOfLi = $('ol').children('li');
  console.log('arrayOfLi is', arrayOfLi);

  // then listen for arrow keys and modify the margin-left
  // to move the <li> on the line.  but never past the starting point
  let startPosition = 0;  // set relative beginning margin position
  let currentPosition = 0;    // track current position of elements
  $(document).keydown(function keyPressEventHandler(eventObj) {
    // if user presses left arrow
    if (eventObj.which === 37) {
      // don't move the element right unless
      // they are already past the starting position
      if (currentPosition > startPosition) {
        $('li').css('margin-left', function (index, curValue) {
          currentPosition -=5;
          return parseInt(curValue, 10) - 5 + 'px';
        });
      }
    }

    // if user presses right arrow
    if (eventObj.which === 39) {
      // don't move the element farther than 500px to the left
      if (currentPosition < 500) {
        $('li').css('margin-left', function (index, curValue) {
          currentPosition += 5;
          return parseInt(curValue, 10) + 5 + 'px';
        });
      }
    }
  });

}());
