$(document).ready(function() {
    var user = $("#listen").attr("user")
    var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user="+user+"&api_key=afc213709a996ae561e307f596c9952b&format=json";
    $.getJSON(url, function(data) {
      var artist = data.recenttracks.track[0].artist["#text"];
      var song = data.recenttracks.track[0]["name"];
      var artwork = data.recenttracks.track[0].image[1]["#text"];
      var link = data.recenttracks.track[0]["url"];
  
  
      $("#artwork").attr("src", artwork);
      $('#track').html("\
        <strong>"+song+"</strong><br />\
        "+artist+"\
      ");
      $("#artworklink").attr("href", link)
  
      if (typeof data.recenttracks.track[0]["@attr"] != "undefined"){
              $("#listen").html('<span style="color: green;">listening</span> to:')
      } else {
        $("#listen").html("last <span>listened</span> to:")
          console.log("false")
      }
    });
  });