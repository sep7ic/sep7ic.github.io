fetch('https://api.nasa.gov/planetary/apod?api_key=CASZq2zBQc1vBOIOfMxhpsUpCyoT4vTRmImnqPVO')
.then(response => response.json())
.then(data => {
    const apodTitle = data.title;
    const apodImg = `<img src="${data.url}" alt="${data.title}" id="imageapod">`;
    const apodDate = `Date: ${data.date}`
    const apodInfo = data.explanation;
    
    document.getElementById('apod-title').innerHTML = apodTitle;
    document.getElementById('apod-img').innerHTML = apodImg;
    document.getElementById('apod-date').innerHTML = apodDate;
    document.getElementById('apod-info').innerHTML = apodInfo;
})
.catch(error => console.error(error));