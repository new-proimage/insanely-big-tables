(function (global) {

  global.App = Ember.Application.create();

  App.Item = Ember.Object.extend({
    init: function () {
      this._super.apply(this, arguments);
      this.set('key', Math.random());
      this.set('value', Math.random());
    }
  });

  App.ApplicationController = Ember.ArrayController.extend({
    init: function () {
      this._super.apply(this, arguments);
      var content = this.get('content');
      content.pushObjects([
        App.Item.create(),
        App.Item.create()
      ]);
    },
    actions: {
      unshift: function () {
        this.get('content').unshiftObject(App.Item.create());
      },
      push: function () {
        this.get('content').pushObject(App.Item.create());
      },
      remove: function () {

      },
      clear: function () {
        this.get('content').clear();
      },
      start: function () {
        var intervalId;
        if (this.get('amount') === null && this.get('rate') === null) {
          console.log('amount and rate should be specified');
          return;
        }

        // start mark
        global.IBT.startMeasuring();

        // add the first
        this.send('unshift');

        // set interval for further adds
        intervalId = setInterval(this.add.bind(this), global.IBT.calculateInterval(this.get('rate')));
        this.set('intervalId', intervalId);
      },
      stop: function () {
        // stop mark
        global.IBT.stopMeasuring();
        clearInterval(this.get('intervalId'));
        this.set('time', global.IBT.calculateMeasure());
      }
    },
    content: [],
    rate: null,
    amount: null,
    time: null,
    stats: [],
    add: function () {
      if (this.get('amount') === 0) {
        this.send('stop');
      }
      else {
        this.send('unshift');
        this.decrementProperty('amount');
      }
    }
  });

  App.RowView = Ember.View.extend({
    tagName: 'tr'
  });

})(window);