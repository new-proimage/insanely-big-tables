App = Ember.Application.create({
  type: window.location.search.split('&')[0].slice(2),
  amount: window.location.search.split('&')[1]
});

App.Record = Ember.Object.extend({
  init: function () {
    this.set('key', Math.random());
    this.set('value', Math.random()*100);
  }
});

function createCustomContent () {
  var amount = App.amount, records = [];
  if (App.type === 'speed') {
    return records;
  }
  for (var i = 0; i < amount; i += 1) {
    records.push(App.Record.create());
  }
  return records;
}

App.DataController = Ember.ArrayProxy.create({
  timer: (App.type === 'scroll') ? 1000 : 10,
  amount: (App.type === 'scroll') ? "1000" : App.amount,
  elapsed: null,
  selected: -1,
  content: createCustomContent()
});

App.RecordView = Ember.View.extend({
  tagName: 'tr',
  record: null,
  click: function (ev) {
    App.DataController.set('selected', App.DataController.content.indexOf(this.record));
    $('.error').each(function (i, el) {
      $(el).removeClass('error');
    });
    $(ev.target).parent().addClass('error');
  }
});

App.ButtonView = Ember.View.extend({
  tagName: 'button',
  classNames: ['btn']
});

App.InsButtonView = App.ButtonView.extend({
  click: function () {
    App.DataController.unshiftObject(App.Record.create());
  }
});

App.AddButtonView = App.ButtonView.extend({
  click: function () {
    App.DataController.pushObject(App.Record.create());
  }
});

App.EditButtonView = App.ButtonView.extend({
  click: function () {
    var index = App.DataController.get('selected');
    if (index !== -1) {
      App.DataController.content[index].set('value', 'Edited');
    }
  }
});


App.RemoveButtonView = App.ButtonView.extend({
  click: function () {
    var index = App.DataController.get('selected');
    if (index !== -1) {
      App.DataController.removeObject(App.DataController.content[index]);
    }
  }
});


App.StartButtonView = App.ButtonView.extend({
  classNames: ['btn', 'btn-danger'],
  click: function () {
    var timer = App.DataController.get('timer'),
        amount = App.DataController.get('amount'),
        i = 0,
        launch = new Date().getTime();
    (function adding() {
      App.DataController.unshiftObject(App.Record.create());
      i += 1;
      if (i % 100 === 0) {
        console.log((new Date().getTime() - launch)/1000);
      }
      if (i < amount) setTimeout(adding, timer);
      else App.DataController.set('elapsed', (new Date().getTime() - launch)/1000);
    })();

  }
});

App.TimerInputView = Ember.TextField.extend({
  attributeBindings: ['placeholder', 'readonly'],
  placeholder: 'timer, ms',
  readonly: 'readonly',
  valueBinding: 'App.DataController.timer'
});

App.AmountInputView = Ember.TextField.extend({
  attributeBindings: ['placeholder', 'readonly'],
  placeholder: 'amount',
  readonly: 'readonly',
  valueBinding: 'App.DataController.amount'
});

App.TotalView = Ember.TextField.extend({
  attributeBindings: ['readonly'],
  classNames: ['total'],
  readonly: 'readonly',
  valueBinding: 'App.DataController.content.length'
});

App.ElapsedView = Ember.TextField.extend({
  attributeBindings: ['readonly', 'placeholder'],
  classNames: ['elapsed'],
  readonly: 'readonly',
  placeholder: 'elapsed time, sec',
  valueBinding: 'App.DataController.elapsed'
});
