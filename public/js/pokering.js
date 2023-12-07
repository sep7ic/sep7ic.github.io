//webring based off the script from css-tricks.com, and modified with help from aiston. thank you aiston!

const template = document.createElement("template");
template.innerHTML = `
<style>
 .pokering_container {
            width: 215px;
            height: 215px;
            background-image: url('https://dokodemo.neocities.org/pokering/fieldbg.png');
            position: relative;
            z-index: 1;
        }

        .pokesprite {
            position: absolute;
            bottom: 50px;
            right: 30px;
            z-index: 2;
            width: 153px;
            height: 153px;
            background-position: center center;
            background-repeat: no-repeat;
        }

        .pokewalker {
            width: 215px;
            height: 215px;
            position: absolute;
            left: 0px;
            top: 0px;
            z-index: 3;
        }

        .ring_title {
            position: absolute;
            top: 23px;
            left: 68px;
            z-index: 4;
        }

        .btn_left {
            z-index: 4;
            position: absolute;
            bottom: 37px;
            left: 46px;
        }

        .btn_mid {
            z-index: 4;
            position: absolute;
            bottom: 26px;
            left: 91px;
        }

        .btn_right {
            z-index: 4;
            position: absolute;
            bottom: 37px;
            right: 46px;
        }

        #boxinner {
            display: none;
            width: 117px;
            height: 46px;
            background-image: url('https://dokodemo.neocities.org/pokering/box_overlay.png');
            padding-top: 10px;
            padding-left: 8px;
            box-sizing: border-box;
            position: absolute;
            bottom: 0px;
            left: 0px;
        }

        .boxtext {
            font-size: 11px;
            line-height: 10px;
            padding: 0px;
            margin: 0px;
            font-family: "MS UI Gothic", Tahoma;
        }

        .boxtext::selection {
            background-color: transparent;
        }


        .showinfo {
            height: 79px;
            width: 117px;
            position: absolute;
            bottom: 78px;
            left: 49px;
            z-index: 5;
            cursor: pointer;
        }
        #copyring {
            width: 250px;
            display: inline-block;
        }
</style>
<div id="copyring">
    
  </div>`;

class PokeRing extends HTMLElement {

    connectedCallback() {
        this.attachShadow({
            mode: "open"
        });

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const thisSite = this.getAttribute("site");

        fetch("https://dokodemo.neocities.org/pokering/pokemembers.json")
            .then((response) => response.json())
            .then((sites) => {
                // Find the current site in the data
                const matchedSiteIndex = sites.findIndex(
                    (site) => site.url === thisSite
                );
                const matchedSite = sites[matchedSiteIndex];

                let prevSiteIndex = matchedSiteIndex - 1;
                if (prevSiteIndex === -1) prevSiteIndex = sites.length - 1;

                let nextSiteIndex = matchedSiteIndex + 1;
                if (nextSiteIndex >= sites.length) nextSiteIndex = 0;

                const randomSiteIndex = this.getRandomInt(0, sites.length - 1);

                const cp = `<div class="pokering_container">
        <a href="https://dokodemo.neocities.org/pokering/index.html"><img src="https://dokodemo.neocities.org/pokering/pokering_title.png" class="ring_title" title="Join The Webring"></a>
        <a href="${sites[prevSiteIndex].url}"><img src="https://dokodemo.neocities.org/pokering/btn_left.png" class="btn_left" title="Previous Site"></a>
        <a href="${sites[randomSiteIndex].url}"><img src="https://dokodemo.neocities.org/pokering/btn_middle.png" class="btn_mid" title="Random Site"></a>
        <a href="${sites[nextSiteIndex].url}"><img src="https://dokodemo.neocities.org/pokering/btn_right.png" class="btn_right" title="Next Site"></a>
        <div class="showinfo" onclick="showinfo(this)" title="Pokemon Info">
            <div id="boxinner">
                <p class="boxtext">${matchedSite.pokemonname} was caught<br>by ${matchedSite.trainer} <br>on ${matchedSite.date}.</p>
            </div>
        </div>
        <img src="https://dokodemo.neocities.org/pokering/ringwalker.png" class="pokewalker">
        <div style="background-image: url('${matchedSite.pokemonimg}');" class="pokesprite"></div>
    </div>`;
                this.shadowRoot
                    .querySelector("#copyring")
                    .insertAdjacentHTML("afterbegin", cp);
            });

    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

window.customElements.define("pokering-script", PokeRing);

function showinfo(item) {
    var boxinner = item.querySelector("#boxinner");
    if (boxinner.style.display === "none") {
        boxinner.style.display = "block";
    } else {
        boxinner.style.display = "none";
    }
}