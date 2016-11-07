define(['knockout', 'text', 'text!./cats.html'], function(ko, text, template) {
  // cat view model
  function c(params) {
    var self = this;
    self.catName = ko.observable(params.catName ? params.catName : '');
    self.picture = ko.observable(params.picture ? params.picture : '');
    self.likes = ko.observable(params.likes ? params.likes : []);
    self.dislikes = ko.observable(params.dislikes ? params.dislikes : []);

    self.update = function(p) {
      self.catName(p.catName);
      self.picture(p.picture)
      self.likes(p.likes)
      self.dislikes(p.dislikes)
    }
  }

  function CatsVM() {
    var self = this;

    cats = [{
          catName: 'marvin',
          picture: 'https://pixabay.com/static/uploads/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
          likes: ['food', 'blankets', 'baskets'],
          dislikes: []
        },{
          catName: 'ollie',
          picture: 'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-06.jpg',
          likes: ['spanks', 'face rubs'],
          dislikes: ['being wet', 'gentle pets', 'bad music']
        },{
          catName: 'petunia',
          picture: "http://i.imgur.com/tpYRZkZ.jpg",
          likes: ['screech'],
          dislikes: ['cuddles', 'dingle berries']
      }
    ]

    self.cats = ko.observableArray(cats.reduce(function(a,c) {
      a.push(c.catName);
      return a;
    }, []));

    self.selectCat = function(e, i) {
      self.selectedCat.update(cats.find(function(c) {
        return c.catName === e;
      }))
      return true
    };

    self.selectedCat = new c({});

    self.showSel = ko.computed(function() {
      return self.selectedCat.catName().length;
    });
  }

  return {viewModel: CatsVM, template: template}
});
