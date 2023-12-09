document.addEventListener('DOMContentLoaded', function() {
    // Select elements with class "content" that contain an element with class "bar"
    var contentWithBar = document.querySelectorAll('.content:has(.bar)');

    contentWithBar.forEach(function(element) {
      // Apply styles to the selected elements
      element.style.paddingTop = '0';
      element.style.marginBottom = '10px';
      element.style.marginTop = '0';
    });

    // Select h1 elements within ".content" that contain an element with class "bar"
    var h1WithinContentWithBar = document.querySelectorAll('.content:has(.bar) h1');

    h1WithinContentWithBar.forEach(function(element) {
      // Apply styles to the selected h1 elements
      element.style.fontSize = '25px';
      element.style.display = 'block';
      element.style.position = 'initial';
      element.style.marginBottom = '0';
    });

    // Select elements with class "contentleft" that contain an element with class "bar"
    var contentLeftWithBar = document.querySelectorAll('.contentleft:has(.bar)');

    contentLeftWithBar.forEach(function(element) {
      // Apply styles to the selected elements
      element.style.paddingTop = '0';
      element.style.marginBottom = '10px';
    });

    // Select elements with class "contentright" that contain an element with class "bar"
    var contentRightWithBar = document.querySelectorAll('.contentright:has(.bar)');

    contentRightWithBar.forEach(function(element) {
      // Apply styles to the selected elements
      element.style.paddingTop = '0';
      element.style.marginBottom = '10px';
    });
  });