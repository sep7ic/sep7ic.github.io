let url = window.location.pathname;

if ( url.includes("quiz/"))( url.includes("flags/")); {
relativePath = "..";
}
if ( url.includes("flags/quizzes/")); {
  relativePath = "../..";
  }

  let navbar = `
  <h1>
  <a href="${relativePath}/index.html">Home</a> | <a href="${relativePath}/gen/about.html">ABOUT</a> | <a href="${relativePath}/flags/flags.html">FLAGS</a>
  </h1>
  <h1>───── ⋆⋅☆⋅⋆ ─────</h1>
  `;

let header = `<img src="${relativePath}/sep.png" class="head">`;


let footer = `
<div style="text-align: center; padding: 10px;">
<span>this site was last updated</span> <abbr class="timeago" id="time" title="CANT FETCH">CANT FETCH</abbr>
<br>
<span>this site was started</span> <abbr class="timeago" id="started" title="CANT FETCH">CANT FETCH</abbr>
</div>`



document.head.innerHTML +=  `
<title>sep</title>
<link href="https://fonts.cdnfonts.com/css/monument-extended" rel="stylesheet">
`;


if (document.getElementById("navbar")) {
  document.getElementById("navbar").innerHTML = navbar;
}
if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footer;
}
if (document.getElementById("header")) {
  document.getElementById("header").innerHTML = header;
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
            
            const datey = date_obj.getDate()

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

