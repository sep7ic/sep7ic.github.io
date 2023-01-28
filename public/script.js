let url = window.location.pathname;

if ( url.includes("FOTW/"))( url.includes("more/")); {
relativePath = "..";
}

let navbar = `
<div class="dropdown">
  <button class="dropbtn">Gen 
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
  </div>
</div> 

<div class="dropdown">
  <button class="dropbtn">Flags 
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <a href="flags.html">Flags</a>
    <a href="FOTD.html">FOTD</a>
    <a href="#">FFF</a>
    <a href="#">WTF</a>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">Site 
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <a href="#">Site Map</a>
  </div>
</div>
`;

let headera = `<a href="index.html"><h1>SEP<h1></a>`;

let header = `
<img src="style/duck.png" style="float: left;"/>
<div style="margin:0 auto; text-align: center;">
<pre>
███████╗███████╗██████╗ 
██╔════╝██╔════╝██╔══██╗
███████╗█████╗  ██████╔╝
╚════██║██╔══╝  ██╔═══╝ 
███████║███████╗██║     
╚══════╝╚══════╝╚═╝     
</pre>
</div> 
<img src="style/duck.png" style="transform: scaleX(-1); float: right;"/>
&nbsp
`;

let flags = `
<div id="flagsright">
<img src="style/flags/NZ.png">
<img src="style/flags/fern.png">
<img src="style/flags/maori.png">
</div>

<div id="flagsleft">
<img src="style/flags/UK.png">
<img src="style/flags/DE.png">
<img src="style/flags/scotland.png">
</div>
`;

let footer = '<span>this site was started</span> <abbr class="timeago" title="2023-01-23T15:33+13:00">Jan 23rd, 15:33</abbr>'

document.head.innerHTML +=  `
<title>sep</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
`;

if (document.getElementById("navbar")) {
  document.getElementById("navbar").innerHTML = navbar;
}
if (document.getElementById("header")) {
  document.getElementById("header").innerHTML = header;
}
if (document.getElementById("flags")) {
  document.getElementById("flags").innerHTML = flags;
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