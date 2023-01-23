let url = window.location.pathname;

if ( url.includes("FOTW/"))( url.includes("more/")); {
relativePath = "..";
}

let rightHTML = `
<div class="card" id="navHTML"></div>

<div class="card">
    <h1>featured</h1>
</div>  
`;

let navHTML = 
'<h1>nav</h1>' +
'<ul> <li><a href="' + relativePath + '/index.html">home</a></li>';

let headHTML = `<h2>zwiebel<h2>`;

let footHTML = '<span>this site was started</span> <abbr class="timeago" title="2023-01-23T15:33+13:00">Jan 23rd, 15:33</abbr>'

if (document.getElementById("rightHTML")) {
  document.getElementById("rightHTML").innerHTML = rightHTML;
}
if (document.getElementById("navHTML")) {
  document.getElementById("navHTML").innerHTML = navHTML;
}
if (document.getElementById("headHTML")) {
  document.getElementById("headHTML").innerHTML = headHTML;
}
if (document.getElementById("footHTML")) {
  document.getElementById("footHTML").innerHTML = footHTML;
}


// -------------visit counter----------------//
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var site_data = JSON.parse(this.responseText);
        var num_arr = site_data.info.views.toString().split("");
        var num_str = "";
        for (i = 0; i < num_arr.length; i++) {
        num_str += num_arr[i];
        if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
    }
document.getElementById("hitcount").innerHTML = num_str;
    }
  };
  xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=sep", true);
  xhttp.send();
  //----------------------------------------------//

  jQuery(document).ready(function() {
  jQuery("abbr.timeago").timeago(); 
  });