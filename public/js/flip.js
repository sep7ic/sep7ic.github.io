$(document).ready(function() {
    // Function to initialize a flip book
    function initFlipBook(bookId) {
      var pageLocation = [],
        lastPage = null;
      zi = 0;
  
      TweenLite.set("#" + bookId + " .pageBg", {xPercent: -50, yPercent: -50});
      TweenLite.set("#" + bookId + " .pageWrapper", {left: "50%", perspective: 1000 });
      TweenLite.set("#" + bookId + " .page", {transformStyle: "preserve-3d"});
      TweenLite.set("#" + bookId + " .back", {rotationY: -180});
      TweenLite.set(["#" + bookId + " .back", "#" + bookId + " .front"], {backfaceVisibility: "hidden"});
  
      $("#" + bookId + " .page").click(function() {
        if (pageLocation[this.id] === undefined || pageLocation[this.id] == "right") {
          zi = ($(".left").length) + 1;
          TweenMax.to($(this), 1, {force3D: true, rotationY: -180, transformOrigin: "-1px top", className: '+=left', z: zi, zIndex: zi});
          TweenLite.set($(this), {className: '-=right'});
          pageLocation[this.id] = "left";
        } else {
          zi = ($(".right").length) + 1;
          TweenMax.to($(this), 1, {force3D: true, rotationY: 0, transformOrigin: "left top", className: '+=right', z: zi, zIndex: zi});
          TweenLite.set($(this), {className: '-=left'});
          pageLocation[this.id] = "right";
        }
      });
  
      $("#" + bookId + " .front").hover(
        function() {
          TweenLite.to($(this).find(".pageFoldRight"), 0.3, {width: "50px", height: "50px", backgroundImage: "linear-gradient(45deg,  #fefefe 0%,#f2f2f2 49%,#ffffff 50%,#ffffff 100%)"});
          TweenMax.to($(this), 1, {force3D: true, rotationY: -20, transformOrigin: "left top", z: zi, zIndex: zi});
        },
        function() {
          TweenLite.to($(this).find(".pageFoldRight"), 0.3, {width: "0px", height: "0px"});
          TweenMax.to($(this), 1, {force3D: true, rotationY: 0, transformOrigin: "left top", z: zi, zIndex: zi});
        }
      );
  
      $("#" + bookId + " .back").hover(
        function() {
          TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {width: "50px", height: "50px", backgroundImage: "linear-gradient(135deg,  #ffffff 0%,#ffffff 50%,#f2f2f2 51%,#fefefe 100%)"});
        },
        function() {
          TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {width: "0px", height: "0px"});
        }
      );
    }
  
    // Initialize each flip book
    initFlipBook("book1");
    initFlipBook("book2");
});