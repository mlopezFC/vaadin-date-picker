module.exports = {
  files: [
    'vaadin-date-range-picker.js',
    'vaadin-date-range-picker-light.js'
  ],
  from: [
    /import '\.\/theme\/lumo\/vaadin-(.+)\.js';/
  ],
  to: [
    `import './theme/lumo/vaadin-$1.js';\nexport * from './src/vaadin-$1.js';`
  ]
};
