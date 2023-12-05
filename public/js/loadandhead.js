  window.onload = async function () {
    try {
      const response = await fetch('FuturamaTitleCaptionsPlain.txt');
      const data = await response.text();
      const headers = data.split('\n').filter(header => header.trim() !== '');

      const randomIndex = Math.floor(Math.random() * headers.length);
      const randomHeader = headers[randomIndex];

      document.getElementById('randomHeader').textContent = randomHeader;
    } catch (error) {
      console.error('Error fetching headers:', error);
    }

  };