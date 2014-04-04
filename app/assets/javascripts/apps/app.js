App = Ember.Application.create();

App.Router.map(function() {
  this.resource('person', function() {
    this.route(':person_id')
  });
});

App.IndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').findAll('person')
  }
});

App.Person = DS.Model.extend({
  name: DS.attr(),
  email: DS.attr()
});

App.IndexController = Ember.ArrayController.extend({
  actions: {
    save: function() {
      var person = this.get('store').createRecord('person', { name: this.get('name'), email: this.get('email') });
      person.save();
      this.get('store').push('person', person);
    }
  }
});


App.ApplicationAdapter = DS.RESTAdapter;
//App.ApplicationAdapter = DS.FixtureAdapter;

App.Person.FIXTURES = [
  { id: 1, email: 'test@mail.com', name: "Joe"},
  { id: 2, email: 'test@mail.com', name: "Smack"},
  { id: 3, email: 'test@mail.com', name: "My"},
  { id: 4, email: 'test@mail.com', name: "Bitchup"},
];
