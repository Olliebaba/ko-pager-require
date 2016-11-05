define(['knockout', 'text', 'text!./info.html'], function(ko, text, template) {
    function Product(name, rating) {
      this.name = name;
      this.userRating = ko.observable(rating || false);
    }

    function MyViewModel() {
      this.products = [
        new Product('Garlic bread'),
        new Product('Pain au chocolat'),
        new Product('Seagull spaghetti', true) // This one was already 'liked'
      ];
    }

    return { viewModel: MyViewModel, template: template };
});
