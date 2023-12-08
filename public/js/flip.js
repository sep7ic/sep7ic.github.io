$(document).ready(function() {
  function initFlipBook(bookId) {
      var pageLocation = [],
          lastPage = null;
      zi = 0;
      var isAnimating = false;

      TweenLite.set("#" + bookId + " .pageBg", {xPercent: -50, yPercent: -50});
      TweenLite.set("#" + bookId + " .pageWrapper", {left: "50%", perspective: 1000 });
      TweenLite.set("#" + bookId + " .page", {transformStyle: "preserve-3d"});
      TweenLite.set("#" + bookId + " .back", {rotationY: -180});
      TweenLite.set(["#" + bookId + " .back", "#" + bookId + " .front"], {backfaceVisibility: "hidden"});

      $("#" + bookId + " .page").click(function() {
          if (isAnimating) {
              return;
          }

          isAnimating = true; 

          if (pageLocation[this.id] === undefined || pageLocation[this.id] == "right") {
              zi = ($(".left").length) + 1;
              TweenMax.to($(this), 1, {
                  force3D: true,
                  rotationY: -180,
                  transformOrigin: "-1px top",
                  className: '+=left',
                  z: zi,
                  zIndex: zi,
                  onComplete: function() {
                      isAnimating = false; 
                  }
              });
              TweenLite.set($(this), {className: '-=right'});
              pageLocation[this.id] = "left";
          } else {
              zi = ($(".right").length) + 1;
              TweenMax.to($(this), 1, {
                  force3D: true,
                  rotationY: 0,
                  transformOrigin: "left top",
                  className: '+=right',
                  z: zi,
                  zIndex: zi,
                  onComplete: function() {
                      isAnimating = false;
                  }
              });
              TweenLite.set($(this), {className: '-=left'});
              pageLocation[this.id] = "right";
          }
      });

      $("#" + bookId + " .front").hover(
          function() {
              TweenLite.to($(this).find(".pageFoldRight"), 0.3, {width: "50px", height: "50px", backgroundImage: "linear-gradient(45deg,  #fefefe 0%,#f2f2f2 49%,#ffffff00 50%,#ffffff00 100%)"});
              TweenMax.to($(this), 1, {force3D: true, rotationY: -20, transformOrigin: "left top", z: zi, zIndex: zi});
          },
          function() {
              TweenLite.to($(this).find(".pageFoldRight"), 0.3, {width: "0px", height: "0px"});
              TweenMax.to($(this), 1, {force3D: true, rotationY: 0, transformOrigin: "left top", z: zi, zIndex: zi});
          }
      );

      $("#" + bookId + " .back").hover(
          function() {
              TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {width: "50px", height: "50px", backgroundImage: "linear-gradient(135deg,  #ffffff00 0%,#ffffff00 50%,#f2f2f2 51%,#fefefe 100%)"});
              TweenMax.to($(this), 1, {force3D: true, rotationY: -160, transformOrigin: "right top", z: zi, zIndex: zi});
              TweenMax.to($(this), 0, {x: -282});
            },
          function() {
              TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {width: "0px", height: "0px"});
              TweenMax.to($(this), 1, {force3D: true, rotationY: -180, transformOrigin: "right top", z: zi, zIndex: zi});
          }
      );
  }
  initFlipBook("book1");
  initFlipBook("book2");
});

$(document).ready(function() {
        function addGradient($element, gradient) {
        var currentBg = $element.css('background-image');  
        var newBg = gradient + ',' + currentBg;
        $element.css({
        'background-image': newBg,
        'background-size': 'cover'
    });
        $element.css('background-image', newBg);
        }
        $('.pageFace.front').each(function() {
        var gradient = 'linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 3%, transparent 8%, transparent 100%)';
        addGradient($(this), gradient);
        });
        $('.pageFace.back').each(function() {
        var gradient = 'linear-gradient(to right, transparent 0%, transparent 92%, rgba(0, 0, 0, 0.2) 97%, rgba(0, 0, 0, 0.5) 100%)';
        addGradient($(this), gradient);
        });
    });