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
    <a href="sitemap.html">Site Map</a>
    <a href="rss.xml">RSS Feed</a>
  </div>
</div>
`;

let headera = `<a href="index.html"><h1>SEP<h1></a>`;

let header = `
<img src="style/fleur.png" style="float: left; padding: 10px;"/>
<div style="margin:0 auto; text-align: center;">
<pre>
███████╗███████╗██████╗ 
██╔════╝██╔════╝██╔══██╗
███████╗█████╗  ██████╔╝
╚════██║██╔══╝  ██╔═══╝ 
███████║███████╗██║     
╚══════╝╚══════╝╚═╝     
</pre>
welcome, visitor #<span id="hitcount"><span>
</div> 
<img src="style/fleur.png" style="transform: scaleX(-1); float: right; padding: 10px;"/>
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

let footer = `
<div style="text-align: center; padding: 10px;">
<span>this site was last updated</span> <abbr class="timeago" id="time" title="CANT FETCH">CANT FETCH</abbr>
<br>
<span>this site was started</span> <abbr class="timeago" id="started" title="CANT FETCH">CANT FETCH</abbr>
</div>`



document.head.innerHTML +=  `
<title>sep</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
`;


if (document.getElementById("header")) {
  document.getElementById("header").innerHTML = header;
}
if (document.getElementById("navbar")) {
  document.getElementById("navbar").innerHTML = navbar;
}
if (document.getElementById("flags")) {
  document.getElementById("flags").innerHTML = flags;
}
if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footer;
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
            var date_str = site_data.info.last_updated;
            var date_obj = new Date(site_data.info.last_updated);
            var not_obj = new Date(site_data.info.created_at);
            
            const nth = function(o) {
              if (o > 3 && o < 21) return 'th';
              switch (o % 10) {
                case 1:  return "st";
                case 2:  return "nd";
                case 3:  return "rd";
                default: return "th";
              }
            }
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const datey = date_obj.getDate()

            COOLTEXTHERE = monthNames[d.getMonth()] + " " + datey+nth(datey) + "," +not_obj.getHours() + ":" + ('0'+ date_obj.getMinutes()).slice(-2)

            $("#time").text(COOLTEXTHERE)

            nyehheh = date_obj.getMinutes()
            cooldate = ('0'+nyehheh).slice(-2)
            datesomething = date_obj.getFullYear() + "-" + (date_obj.getMonth()+1) + "-" +date_obj.getDate() + "T" + date_obj.getHours() + ":" + cooldate + "+13:00";
            $("#time").attr('title', datesomething)

            dateob = not_obj.getMinutes()
            idk = ('0'+nyehheh).slice(-2)
            acool = not_obj.getFullYear() + "-" + (not_obj.getMonth()+1) + "-" +not_obj.getDate() + "T" + not_obj.getHours() + ":" + idk + "+13:00";
            $("#started").attr('title', acool) 
  
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