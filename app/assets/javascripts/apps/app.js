App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.Person.find();
  }
});

App.Person = Ember.Model.extend({
  name: Ember.attr(),
  email: Ember.attr()
});

App.IndexController = Ember.ArrayController.extend({
  save: function() {
    var newPerson = App.Person.create({ name: this.get('name'), email: this.get('email') });
    newPerson.save();
  }
});

//App.Person.adapter = Ember.FixtureAdapter.create();
App.Person.adapter = Ember.RESTAdapter.create();
App.Person.url = "/people";
App.Person.collectionKey = "people";

//App.Person.FIXTURES = [
//  { id: 1, name: "Joe"},
//  { id: 2, name: "Smack"},
//  { id: 3, name: "My"},
//  { id: 4, name: "Bitchup"},
//];
