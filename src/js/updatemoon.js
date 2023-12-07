
  function updateDivPosition() {
    var div = document.getElementById('moon');
    var currentHour = parseInt(new Date().toLocaleString('en-NZ', { hour: 'numeric', hour12: false }));
    console.log(currentHour)

    var positions = [
    { top: '1000px', left: '600px' },
    { top: '980px', left: '502px' },
    { top: '950px', left: '404px' },
    { top: '900px', left: '306px' },
    { top: '830px', left: '208px' },
    { top: '680px', left: '110px' },
    { top: '500px', left: '50px' },
    { top: '320px', left: '110px' },
    { top: '170px', left: '208px' },
    { top: '100px', left: '306px' },
    { top: '50px', left: '404px' },
    { top: '20px', left: '502px' },
    { top: '10px', left: '600px' },
    { top: '20px', left: '698px' },
    { top: '50px', left: '796px' },
    { top: '100px', left: '894px' },
    { top: '170px', left: '992px' },
    { top: '320px', left: '1090px' },
    { top: '500px', left: '1150px' },
    { top: '680px', left: '1090px' },
    { top: '830px', left: '992px' },
    { top: '900px', left: '894px' },
    { top: '950px', left: '796px' },
    { top: '980px', left: '698px' },
    ];

    var currentPosition = positions[currentHour];
    console.log(currentPosition)
    if (currentPosition) {
      div.style.top = currentPosition.top;
      div.style.left = currentPosition.left;
    }
  }

  updateDivPosition();
  setInterval(updateDivPosition, 60000); 