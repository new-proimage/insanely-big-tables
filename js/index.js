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
      })
    ]
  });
  App.Launch = Ember.View.extend({
    tagName: 'button',
    classNames: ['btn', 'btn-success'],
    click: function (ev) {
      ev.preventDefault();
      console.log(App.controller.get('selected.value'));
    }
  })
});