// ADAPTED FROM DREW HARWELL //

var ICON_SIZE = 100;
var PADDING = 45;

var model = {
  cursor: {
    x: 0,
    y: 0 },

  columns: {

"favs": {
index: 0,
title: "favs",
selectedIndex: 0,
active: false,
icon: "Consoles/auto-favorites.png",
items: [
{ title: "favourite", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" },
{ title: "favourite", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" }] }


,"gameboy": {
index: 1,
title: "GB",
selectedIndex: 1,
active: false,
icon: "Consoles/gb.png",
items: [
{ title: "Kirby's Dream Land", subtitle: "Played", active: false, icon: "https://upload.wikimedia.org/wikipedia/en/6/6a/Kirbys-dream-land-gameboy-boxart.png", background: ""},
{ title: "Star Trek Generations: Beyond the Nexus", subtitle: "", active: false, icon: "https://files.catbox.moe/r8xapy.png" }] }
,"gbc": {
  index: 2,
  title: "GBC",
  selectedIndex: 1,
  active: false,
  icon: "Consoles/gbc.png",
  items: [
  { title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" },
  { title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" }] }

,"gba": {
index: 3,
title: "GBa",
selectedIndex: 1,
active: false,
icon: "Consoles/gba.png",
items: [
{ title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" },
{ title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" }] }
,"nes": {
  index: 4,
  title: "NES",
  selectedIndex: 1,
  active: false,
  icon: "Consoles/nes.png",
  items: [
  { title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" },
  { title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" }] }
,"snes": {
index: 5,
title: "snes",
selectedIndex: 1,
active: false,
icon: "Consoles/snes.png",
items: [
{ title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" },
{ title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" }] }
,"n64": {
index: 6,
title: "n64",
selectedIndex: 1,
active: false,
icon: "Consoles/n64.png",
items: [
{ title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" },
{ title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" }] }
,"nds": {
index: 7,
title: "nds",
selectedIndex: 1,
active: false,
icon: "Consoles/nds.png",
items: [
{ title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" },
{ title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" }] }
,"psx": {
index: 8,
title: "psx",
selectedIndex: 1,
active: false,
icon: "Consoles/psx.png",
items: [
{ title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" },
{ title: "GAME", subtitle: "subtitle", active: false, icon: "https://files.catbox.moe/wey5yo.png" }] }
    

} };





//add zero position to each column and item
_.each(model.columns, c => {
  c.position = { x: 0, y: 0 };
  _.each(c.items, i => {
    i.position = {
      x: 0,
      y: 0 };

  });
});

var xmbVue = new Vue({
  el: "#xmb",
  data: model,
  methods: {
    handleKey(dir, val) {
      this.cursor[dir] += val;
      var nCols = this.nColumns;

      // wrap x
      this.cursor.x = this.cursor.x % nCols;
      if (this.cursor.x < 0) {
        this.cursor.x = this.cursor.x + nCols;
      }

      //wrap y
      var nRows = this.nRows;
      this.cursor.y = this.cursor.y % nRows;
      if (this.cursor.y < 0) {
        this.cursor.y = this.cursor.y + nRows;
      }

      this.highlightCell(this.cursor.x, this.cursor.y);

    },
    highlightCell: function (column, row) {

      console.log(column, row);
      //update position of elements as well
      var xAccum = (-column - 1) * (ICON_SIZE + PADDING);
      if (column == 0) {
        xAccum += ICON_SIZE + PADDING;
      }
      var yAccum;

      _.each(this.columns, (col, colKey) => {
        col.active = false;
        yAccum = -(ICON_SIZE + PADDING) * (row + 1);

        col.position.x = xAccum;
        xAccum += ICON_SIZE + PADDING;
        if (column === col.index || column === col.index + 1) {
          xAccum += ICON_SIZE / 2;
        }

        _.each(col.items, (item, rowN) => {
          if (rowN == row && col.index == column) {
            item.active = true;
            col.active = true;

            backgroundslct = document.querySelector('.background')
            backgroundslct.style.backgroundImage = item.background || '';

          } else {
            item.active = false;
          }

          if (rowN == row) {
            yAccum += ICON_SIZE + PADDING;
          }
          yAccum += ICON_SIZE + PADDING;
          item.position.y = yAccum;

        });
      });
      this.cursor.y = row;
      this.cursor.x = column;
    } 
  },

  watch: {
    cursor: function (e) {
      console.log('cursor mutated', e);
    } },

  computed: {
    nColumns: function () {
      return Object.keys(this.columns).length;
    },
    nRows: function () {
      //get the row at the current index
      var row = this.columnsArray[this.cursor.x];
      if (!row) {
        console.log('invalid row index: ', this.cursor.x);
        return 0;
      }
      return row.items.length; //todo: number of columns in this row
    },
    columnsArray: function () {
      //get columns in an array
      var arr = [];
      Object.keys(this.columns).forEach(key => {
        arr.push(this.columns[key]);
      });
      return _.sortBy(arr, 'index');
    } },

  created: function () {
    _.each(this.columns, column => {
      _.each(column.items, item => {
        item.active = false;
      });
    });
    this.highlightCell(this.cursor.x, this.cursor.y);
  } });


// handle movement based on keys
$('body').on('keydown', function (e) {
  if (e.key == "ArrowUp") {
    xmbVue.handleKey('y', -1);
  } else if (e.key == "ArrowDown") {
    xmbVue.handleKey('y', 1);
  } else if (e.key == "ArrowLeft") {
    const backaudio = document.createElement('audio');
    backaudio.src = "https://files.catbox.moe/5n5fp7.mp3";
    backaudio.play()
    xmbVue.handleKey('x', -1);
  } else if (e.key == "ArrowRight") {
    const goaudio = document.createElement('audio');
    goaudio.src = "https://files.catbox.moe/mrog3o.mp3";
    goaudio.play()
    xmbVue.handleKey('x', 1);
  }
});

$('body').on("mousewheel", _.throttle(scrollHandler, 10));

function scrollHandler(e) {
  console.log(e);
  if (e.deltaX) {
    xmbVue.handleKey('x', Math.sign(e.deltaX));
  }
  if (e.deltaY) {
    xmbVue.handleKey('y', Math.sign(e.deltaY));
  }
}