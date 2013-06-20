$(function () {
  window.App = Ember.Application.create({
    rootElement: '.form-inline'
  });
  App.controller = Ember.Object.create({
    selected: null,
    content: [
      Ember.Object.create({
        value: 'ng',
        title: 'Angular'
      }),
      Ember.Object.create({
        value: 'em',
        title: 'Ember'
      }),
      Ember.Object.create({
        value: 'ko',
        title: 'Knockout'
      })
    ]
  });
  App.Launch = Ember.View.extend({
    tagName: 'button',
    classNames: ['btn', 'btn-success'],
    click: function (ev) {
      ev.preventDefault();
      window.open('./candidates/' + App.controller.get('selected.title').toLowerCase() + '/index.html');
    }
  })
});