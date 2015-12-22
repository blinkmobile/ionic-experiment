var app = require('../app');

app.component('inspectionItem', {
  bindings: {
    inspection: '='
  },
  template: require('./tpl.html')
});
