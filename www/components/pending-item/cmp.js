var app = require('../app');

app.component('pendingItem', {
  bindings: {
    pending: '='
  },
  controller: function () {
    this.styles = require('./cmp.css');
    this.date = new Date(this.pending.date);
  },
  template: require('./tpl.html')
});
