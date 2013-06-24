$(function () {
  window.App = Ember.Application.create({
    rootElement: '.form-inline'
  });
  App.Controller = Ember.Controller.extend({
    launch: function (testType) {
      switch (testType) {
        case 'scroll':
          window.open('./candidates/' + App.frameworks.get('selected.title').toLowerCase() + '/index.html?=scroll&' + App.scrollOptions.get('selected'));
          break;
        case 'speed':
          window.open('./candidates/' + App.frameworks.get('selected.title').toLowerCase() + '/index.html?=speed&' + App.speedOptions.get('selected'));
          break;
      }

    }
  });
  App.frameworks = Ember.ObjectController.create({
    selected: null,
    content: [
      Ember.Object.create({
        value: 'ng',
        title: 'Angular'
      }),
      Ember.Object.create({
        value: 'em',
        title: 'Ember'
      })//,
//      Ember.Object.create({
//        value: 'ko',
//        title: 'Knockout'
//      })
    ]
  });
  App.Options = Ember.Object.extend({
    selected: null,
    content: [1000, 2000, 3000, 4000]
  });
  App.scrollOptions = App.Options.create();
  App.speedOptions = App.Options.create();
});