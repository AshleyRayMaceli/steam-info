import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var userURL = 'http://localhost:4000/steam/user/' + params.userid + '/profile';
    var recentGamesURL = 'http://localhost:4000/steam/user/' + params.userid + '/profile/two-weeks-data';
    var allGamesURL = 'http://localhost:4000/steam/' + params.userid + '/allgames';

    return Ember.RSVP.hash({
      user: Ember.$.getJSON(userURL).then(function(responseJSON) {
        console.log("USER:");
        console.log(responseJSON.response.players[0]);
        return responseJSON.response.players[0];
      }),
      recentGames: Ember.$.getJSON(recentGamesURL).then(function(responseJSON) {
        console.log(responseJSON);
        return responseJSON.response.games;
      }),
      allGames: Ember.$.getJSON(allGamesURL).then(function(responseJSON) {
        console.log("allgames: ");
        console.log(responseJSON.response);
        return responseJSON.response;
      })
    });
  }
});
