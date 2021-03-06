TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "":"boardsIndex",
    "b/:id":"boardShow"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.boards = options.boards;
    this.boardsIndex();
  },

  swapTopView: function (view) {
    if(this._currentTopView){
      this._currentTopView.remove();
    }

    this._currentTopView = view;
    this.$rootEl.html(this._currentTopView.$el)
  },

  boardsIndex: function () {
    var view = new TrelloClone.Views.BoardsIndex({ collection: this.boards });
    this.swapTopView(view.render());
  },

  boardShow: function (id) {
    var board = this.boards.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({ model: board });
    this.swapTopView(view.render());
  }

})
