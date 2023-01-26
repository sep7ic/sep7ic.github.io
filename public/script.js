let url = window.location.pathname;

if ( url.includes("FOTW/"))( url.includes("more/")); {
relativePath = "..";
}

let rightHTML = 
'<div class="card">' +
  '<h1>nav</h1>' +
  '<ul> <li><a href="' + relativePath + '/index.html">home</a></li>' +
  '<li><a href="' + relativePath + '/blog.html">blog</a></li>' +
  '<li><a href="' + relativePath + '/about.html">about</a></li>' +
  '<li><a href="' + relativePath + '/roly.html">roly</a></li>' +
  '</ul>' +
'</div>' +
'<div class="card">' +
  '<h1>flags</h1>' +
  '<ul> <li><a href="' + relativePath + '/flags.html">flags</a></li>' +
  '<li><a href="' + relativePath + '/FOTD.html">FOTD</a></li>' +
  '<li><a href="' + relativePath + '/FFF.html">flag fact friday</a></li>' +
  '<li><a href="' + relativePath + '/WTF.html">WTF!</a></li>' +
  '</ul>' +
'</div>' +
'<div class="card">' +
  '<h1>games</h1>' +
  '<ul> <li><a href="' + relativePath + '/terraria.html">terraria</a></li>' +
  '<li><a href="' + relativePath + '/torrents.html">torrents</a></li>' +
  '</ul>' +
'</div>' +

`<div class="card">
    <h1>featured</h1>
</div>  

<div class="card">
<img src="images/the escape.gif" alt="gif of giant isopod cralling away with text above it that reads "the escape"">
</div>  
`;

let headHTML = `<a href="index.html"><h2>iceopod<h2></a>`;

let footHTML = '<span>this site was started</span> <abbr class="timeago" title="2023-01-23T15:33+13:00">Jan 23rd, 15:33</abbr>'

document.head.innerHTML +=  `
<title>iceopod</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@400&display=swap" rel="stylesheet">
`;

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