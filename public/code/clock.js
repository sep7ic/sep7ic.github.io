function dateToText(date, includeSeconds) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if (minutes < 10) minutes = '0'+minutes;
  if (seconds < 10) seconds = '0'+seconds;
  if (hours < 10) hours = '0'+hours;
  if (includeSeconds) {
    return hours + ":" + minutes + ":" + seconds;
  } else {
    return hours + ":" + minutes;
  }
}

function updateClocks() {
  for (var i = 0; i < window.arrClocks.length; i++) {
    var clock = window.arrClocks[i];
    var offset = window.arrOffsets[i];
    var includeSeconds = clock.classList.contains('clockseconds');
    clock.innerHTML = dateToText(new Date(new Date().getTime()+offset), includeSeconds);
  }
}

function startClocks() {
  var clockElements = document.querySelectorAll('.clock, .clockseconds');
  window.arrClocks = [];
  window.arrOffsets = [];
  for(var i = 0; i < clockElements.length; i++) {
    var el = clockElements[i];
    var timezone = parseInt(el.getAttribute('timezone'));
    if (!isNaN(timezone)) {
      var tzDifference = timezone * 60 + (new Date()).getTimezoneOffset();
      var offset = tzDifference * 60 * 1000;
      window.arrClocks.push(el);
      window.arrOffsets.push(offset);
    }
  }
  updateClocks();
  clockID = setInterval(updateClocks, 1000);
}

setTimeout(startClocks, 100);
