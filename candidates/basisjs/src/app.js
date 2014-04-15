basis.require('basis.ui');

var Item = basis.ui.Node.subclass({
  template:  resource('./row.tmpl'),
  binding: {
    key: 'key',
    value: 'value'
  },
  init: function(){
    basis.ui.Node.prototype.init.call(this);
    this.key = Math.random();
    this.value = Math.random();
  }
});

var table = new basis.ui.Node({
  template: resource('./table.tmpl'),
  childClass: Item
});

var app = new basis.ui.Node({
  contentLength: basis.data.Value.from(table, 'childNodesModified', 'childNodes.length'),
  amount: new basis.Token(3000),
  rate: new basis.Token(250),
  time: new basis.Token(0),

  container: document.body,
  template: resource('./app.tmpl'),
  binding: {
    table: table,
    time: 'time',
    rate: 'rate',
    amount: 'amount',
    contentLength: 'contentLength'
  },
  action: {
    unshift: function(){
      table.insertBefore(new Item(), table.firstChild);
    },
    push: function(){
      table.appendChild(new Item());
    },
    remove: function(){
      table.removeChild(table.lastChild);
    },
    clear: function(){
      table.clear();
    },
    start: function () {
      if (this.intervalId)
        this.action.stop.call(this);

      if (isNaN(this.amount.value) || !this.amount.value ||
          isNaN(this.rate.value) || !this.rate.value) {
        console.log('amount and rate should be specified');
        return;
      }

      // start mark
      global.IBT.startMeasuring();

      // add the first
      this.action.unshift();

      // set interval for further adds
      this.intervalId = setInterval(this.add.bind(this), global.IBT.calculateInterval(this.rate.value));
    },
    stop: function(){
      // stop mark
      global.IBT.stopMeasuring();
      this.intervalId = clearInterval(this.intervalId);
      this.time.set(global.IBT.calculateMeasure());
      global.IBT.calculateHundreds().forEach(function (item) {
        console.log(item);
      });
    },

    setRate: function(event){
      this.rate.set(event.sender.value);
    },
    setAmount: function(event){
      this.amount.set(event.sender.value);
    }
  },

  add: function () {
    if (this.contentLength.value % 100 === 0) {
      global.IBT.markHundred(this.contentLength.value / 100);
    }

    if (this.amount.value === 0)
      this.action.stop.call(this);
    else
    {
      this.action.unshift.call(this);
      this.amount.set(this.amount.value - 1);
    }
  }
});
