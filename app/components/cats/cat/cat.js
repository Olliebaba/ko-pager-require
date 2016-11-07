define(['knockout', 'text', 'text!./cat.html'], function(ko, text, template) {
  return {
    template: template,
    viewModel: function(params) {
      self.catName = params.catName;
      self.picture = params.picture;
      self.likes = params.likes;
      self.dislikes = params.dislikes;
    }
  };
});
