/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
import chroma from 'chroma-js';
/* {
    paletteName: 'Material UI Colors',
    id: 'material-ui-colors',
    emoji: '🎨',
    colors: [
      { name: 'red', color: '#F44336' },
      { name: 'pink', color: '#E91E63' },
      { name: 'purple', color: '#9C27B0' },
      { name: 'deeppurple', color: '#673AB7' },
      { name: 'indigo', color: '#3F51B5' },
      { name: 'blue', color: '#2196F3' },
      { name: 'lightblue', color: '#03A9F4' },
      { name: 'cyan', color: '#00BCD4' },
      { name: 'teal', color: '#009688' },
      { name: 'green', color: '#4CAF50' },
      { name: 'lightgreen', color: '#8BC34A' },
      { name: 'lime', color: '#CDDC39' },
      { name: 'yellow', color: '#FFEB3B' },
      { name: 'amber', color: '#FFC107' },
      { name: 'orange', color: '#FF9800' },
      { name: 'deeporange', color: '#FF5722' },
      { name: 'brown', color: '#795548' },
      { name: 'grey', color: '#9E9E9E' },
      { name: 'bluegrey', color: '#607D8B' },
    ],
  }, */

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

// Here we will generate colors and convert colors from hex to RBG etc.
// We are using chroma.js for this purpose.

function generatePalette(starterPalette) {
  // we will create our new palette we will return in the end

  // we are setting the id, emoji, and color.
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {
      // Here we could hardcode arrays for each level
      // 50:[]
      // colorlevel and array containing colors corresponding.
    },
  };

  // its better to loop through the levels const we made below:
  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    // / we are reversing the scale since it initially goes from dark to light
    // / we want it from light to dark to match array above
    let scale = getScale(color.color, 10).reverse();

    // For each one of the colors in the scale, there is going to be 10 colors
    // We will add the dark color levels of "i" into our new palette

    // this code below keeps the levels array in sync with the newPalette.colors array.
    // the 0 index in newPalette.colors will match our levels array.
    // we are pushing the i value in scale ( our 10 new colors ), into
    // the levels array per index.

    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        // name is going to take the color value itself.
        name: `${color.name} ${levels[i]}`,

        // generating ID
        id: color.name.toLowerCase().replace(/ /g, '-'),

        // generating hex,rgb and rgba.
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgba', 'rgba')
          .replace(')', ',1.0)'),
      });
    }
  }
  return newPalette;
}

// //// VODOO MAGIC WITH CHROMA TO GENERATE RANGE OF COLORS ///////
// /// Generates an array with three color values /////

function getRange(hexColor) {
  const end = '#fff';
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end,
  ];
}

function getScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode('lab')
    .colors(numberOfColors);
}

export { generatePalette };
