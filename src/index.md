---
layout: layouts/base.njk
title: index
date: git Last Modified

---
<head>
<script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-auth.js"></script>
<script src="/js/bogus.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-database.js"></script>
</head>


<style>    
.note {
width: 200px;
height: 200px;
background-color: yellow;
background-size:cover;
box-shadow: 1px 1px 20px black;
display: inline-block;
margin: 30px;
transition: rotate 200ms, transform 200ms, margin 200ms;
rotate: 5deg;
}
.note:hover {
position: fixed;
rotate: 0deg;
transform: scale(1.05);
z-index: 10000;
}
</style>
<div class="note" id="note" style="position: absolute; z-index: 100; cursor: move; margin: 0; top:200px; right:-230px" title="my most recent post-it-note drawing. click to open cork-board">
<a href="/pages/corkboard.html" style="width: 200px; height: 200px;"></a>
</div>

<!--WELCOME-->
<div class="content" style="position: relative;">
    <div class="image-container">
        <img src="images/sep.gif" alt="your image description">
        <div class="text-overlay" id="clickelement">click for my button :3</div>
    </div>
    <a href="https://cidoku.net/" style="position: relative; float: right; margin-right: 10px;"><img src="images/buttons/camtime.gif" alt=""></a>
    <a href="https://cidoku.net/" style="position: relative; float: right; margin-right: 10px;"><img src="images/buttons/gnulinux.gif" alt=""></a>
    <h1 style="display: inline-block;">willkommen!</h1>
    <br>
    <span class="context">welcome!! enjoy your stay here.</span>
    <br>
    <a href="https://piclog.blue/profile.php?id=190"><img src="https://piclog.blue/latest.php?id=190" style="float: left; margin: 10px; margin-left: 0; margin-top: 0; width: 100px;"></a>
    <div id="txtarea" class="hidden" style="float: right;">
        <textarea name="" id="" cols="30" rows="10">
            <a href="https://sep7ic.github.io/"><img src="https://sep7ic.github.io/images/sep.gif" alt=""></a>
        </textarea>
    </div><br><br>
    <img src="images/bender.gif" style="float: right;" title="bender">
    <p style="width: 500px; margin-top: -20px;"><tooltip title="/hə'ləʉ/">hello</tooltip> and welcome to my slice of the <tooltip title="Noun: A world of information accessed through the Internet.">cyberspace!</tooltip> this site is basically just an archive for all my thoughts and serves as a creative outlet, to put it simply.<br>my main inspirations are <a href="https://arandomsite.neocities.org/">arandomsite</a>, <a href="https://sadgrl.online/">sadgrl</a>, <a href="https://jeffland.net/">jeffland</a>, <a href="https://dimden.dev/">dimden</a>, and <a href="https://ghostingpen.neocities.org/">ghostingpen</a>. i started this site after discovering a neocities link in <a href="https://wiichicken.neocities.org/">this dude's</a> bio.</p>
    <br>
    <span style="margin-bottom: 10px;">best viewed with <tooltip title="Pairs of globular organs of sight, situated in the heads of humans and vertebrate animals.">eyes</tooltip></span>
</div>
            
<!--FUTURAMA-->
<div style="margin-bottom: -10px;">
    <div class="tint">
        <a href="http://www.futurama-area.de/"><img src="/images/buddie_88_31_05.gif" alt=""></a>
        <a href="https://nohomers.net/"><img src="/images/b_nohomers.gif" alt=""></a>
        <a href="https://www.gotfuturama.com/"><img src="/images/b_cgef.gif" alt=""></a>
        <a href="https://web.archive.org/web/20150929203510/http://www.futurama-il.tk/"><img src="/images/b_futurama-il.gif" alt=""></a>
        <a href="http://www.futurama-area.de/content/supportus.php"><img src="/images/banner_409_59_02.png" style="height: 31px;"></a>
    </div>
</div>

<!--ABOUT-->
<div class="contentleft" style="height: 288px; position: relative">
    <a href="/pages/about.html" target="Display"><h1>ÜBER MICH</h1></a><br>
    <span class="context">information about me!</span>
    <p>16 year old trekkie and <tooltip title="this just means that i have conditioned myself to fall asleep before the theme song ends">futurama sleeper</tooltip> from NZ who is enjoys chess, tetris, art, speed-cubing, and programming.</p>
    <p>favourite characters include zoidberg, ברוך דעם מעכטיקן זאָידבערג!, bender (obligatory), hypnotoad, bart, homer, skinner, picard, spock, data, odo, worf, boimler, rutherford, picard (i could go on... and on)</p>
    <div style="position: absolute; top: 20px; right: 10px;">
        <div style="display: inline-block; background-color: white; width: 20px; height: 20px;" title="white"></div>
        <div style="display: inline-block; background-color: var(--main); width: 20px; height: 20px;" title="brown"></div>
        <div style="display: inline-block; background-color: grey; width: 20px; height: 20px;" title="grey"></div>
        <div style="display: inline-block; background-color: #302c2c; width: 20px; height: 20px;" title="#302c2c"></div>
    </div>
    <p>get in touch: <span>contact@septic.lol</span></p>
    <img src="images/born2die.png" style="margin-top: -8px;">
</div>

<!--CHAT-->
<style>#chat span {padding-top: 1px;}</style>
<div class="contentright" style="position:relative; height: 288px;"><h1 title="feel free to say hi!">chatbox</h1>
    <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-database.js"></script>
    <br>
    <span class="context">type "/auth" to chat and "/nick [NAME HERE]" to change your nickname!!</span>
    <br>
    <input type="text" id="message" autocomplete="off" onkeydown="handleKeyDown(event)" placeholder="chat message here" style="width: 100%; color: grey; background-color: black; border: 1px grey solid; outline: none;">
    <br><br>
    <div id="chat" style="height: 150px; overflow-y: auto; word-wrap: break-word"></div>
    <br>
    <span>use "/colour [COLOUR HERE]" to change your name colour.</span>
</div>
<script src="/js/flags.js"></script>

<!--BUTTONS-->
<marquee onmouseover="this.stop();" onmouseout="this.start();" direction="right" behavior="alternate" class="buttons" style="margin-bottom: -10px">
    <img src="images/sep.png" alt="">
    <a href="https://starlocked.neocities.org" target="_blank"><img src="https://tinyurl.com/yxwzze34"></a>
    <a href="http://keatongamer1248.neocities.org"><img src="http://keatongamer1248.neocities.org/img/keatonad.gif"></a>
    <a href="https://snals.neocities.org"><img src="https://snals.neocities.org/snals/snals/buttons/buttonwip.png"></a>
    <a href="https://ghostingpen.neocities.org/"><img src="/images/buttons/ghostingpen.gif"></a>
    <a title="sou's house" href='https://soouaho.neocities.org' target="_blank"><img src='https://soouaho.neocities.org/stampy.gif' width=81px></a>
    <a href="https://parkaction.neocities.org/"><img src="https://parkaction.neocities.org/button.gif"></a>
    <a href='https://blinkies.cafe' target='_blank'><img src='https://blinkies.cafe/b/display/blinkiesCafe-badge.gif' alt='blinkies.cafe | make your own blinkies!'></a>
    <a href="https://moodlemcdoodle.neocities.org/"><img src="images/buttons/moodlebutton1.gif" alt=""></a>
    <a href="https://honeybread.neocities.org/links"><img src="/images/buttons/breadsfirstbutton.gif" alt=""></a>
    <a href="https://olliveen.neocities.org/" target="_blank"><img src="https://olliveen.neocities.org/img/button.gif"></a>
    <a href="https://cidoku.net/"><img src="images/buttons/cidokunet.gif" alt=""></a>
    <a href="https://bensect.neocities.org/coolsites"><img src="/images/buttons/bensect.png" alt=""></a>
    <a href="https://sanguinariacanadensis.neocities.org/"><img src="/images/buttons/sanguinaria.png" alt=""></a>
    <img src="images/buttons/wooper.gif" alt="">
</marquee>


<!--BIG RINGS-->
<div class="content">
    <script src="/js/pokering.js"></script>
    <pokering-script site="https://sep.neocities.org"></pokering-script>
    <div id='PikRing' style="display: inline-block;">
        <link rel="stylesheet" href="https://nickolox.neocities.org/pikring/css/rock.css">
        <script type="text/javascript" src="https://nickolox.neocities.org/pikring/pikring-variables.js"></script>
        <script type="text/javascript" src="/js/pikring.js"></script>
    </div>
</div>

<!--trek stuf-->
<div class="content"><div class="bar">kalender für oktober–dezember 2023</div>
    
</div>


<script>
    const toggleImg = document.getElementById('clickelement');
    const elementToToggle = document.getElementById('txtarea');
    toggleImg.addEventListener('click', () => {
    console.log('Click event triggered');
    const computedStyle = window.getComputedStyle(elementToToggle);
    if (computedStyle.display === 'none') {
        console.log('Element is hidden');
        elementToToggle.style.display = 'block';
    } else {
        console.log('Element is shown');
        elementToToggle.style.display = 'none';
    }
});
</script>

<script>
    document.addEventListener("DOMContentLoaded", function() {
    initializeEmoticons();
});

function initializeEmoticons() {
    const replacementMap = {
        ":bored:": "/images/emoticons/bored.png",
        ":excited:": "/images/emoticons/excited.png",
        ":exclamation:": "/images/emoticons/exclamation.png",
        ":happy:": "/images/emoticons/happy.png",
        ":kirby:": "/images/emoticons/kirby.png",
        ":kiwi:": "/images/emoticons/kiwi.png",
        ":pout:": "/images/emoticons/pout.png",
        ":question:": "/images/emoticons/question.png",
        ":rain:": "/images/emoticons/rain.png",
        ":barf:": "/images/emoticons/sick.png",
        ":sick:": "/images/emoticons/sick2.png",
        ":surprised:": "/images/emoticons/suprise.png",
        ":US:": "/images/emoticons/US.png",
        ":weary:": "/images/emoticons/weary.png",
        ":cool:": "/images/emoticons/cool.png",
    };
    const chatElement = document.getElementById("chat");
    const chatDivs = chatElement.querySelectorAll("div");

    chatDivs.forEach((messageDiv) => {
        Object.entries(replacementMap).forEach(([text, imageUrl]) => {
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            imageElement.alt = text;

            const regex = new RegExp(escapeRegExp(text), "g");
            replaceTextWithImage(messageDiv, regex, imageElement);
        });
    });

    function replaceTextWithImage(container, regex, imageElement) {
        container.childNodes.forEach((node) => {
            if (node.nodeType === 3) {
                const fragment = document.createDocumentFragment();
                node.nodeValue.split(regex).forEach((text, i, arr) => {
                    fragment.appendChild(document.createTextNode(text));
                    if (i < arr.length - 1) {
                        fragment.appendChild(imageElement.cloneNode(true));
                    }
                });
                node.replaceWith(fragment);
            } else if (node.nodeType === 1) {
                replaceTextWithImage(node, regex, imageElement);
            }
        });
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
}

</script>

<script>
async function fetchData() {
    const response = await fetch('/pages/borkcoard.json');
    const data = await response.json();
    return data;
}

function setLatestNoteBackground(data) {
    const latestEntry = data[data.length - 1];

    if (latestEntry) {
        const latestNote = document.getElementById('note');
        latestNote.style.backgroundImage = `url(${latestEntry.img})`;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchData();
    setLatestNoteBackground(data);
    // Optional: Make the latest note draggable
    $( "#note" ).draggable();
});
</script>
