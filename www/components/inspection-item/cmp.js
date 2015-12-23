var app = require('../app');

app.component('inspectionItem', {
  bindings: {
    inspection: '='
  },
  controller: function () {
    this.styles = require('./cmp.css');
  },
  template: require('./tpl.html')
});
