document.addEventListener("DOMContentLoaded", function() {
    var counters = document.querySelectorAll("#hitcounter");
  
    counters.forEach(function(counter) {
      var sitename = counter.dataset.sitename;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var site_data = JSON.parse(this.responseText);
          var num_arr = site_data.info.views.toString().split("");
          var num_str = "";
          for (i = 0; i < num_arr.length; i++) {
            num_str += num_arr[i];
            if ((num_arr.length - 1 - i) % 3 == 0 && (num_arr.length - 1 - i) != 0) {
              num_str += ",";
            }
          }
          counter.innerHTML = num_str;
        }
      };
      xhttp.open("GET", `https://weirdscifi.ratiosemper.com/neocities.php?sitename=${sitename}`, true);
      xhttp.send();
    });
  });
  