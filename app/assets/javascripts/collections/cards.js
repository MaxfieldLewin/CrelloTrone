TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: '/api/cards',
  model: TrelloClone.Models.Card,

  comparator: "ord",

  getOrFetch: function (id) {
    var card = this.get(id);
    if(!card){
      card = new TrelloClone.Models.Card({ id: id });
      this.add(card);
    }

    card.fetch();
    return card;
  },

  tap : function () {}

})
