define(['knockout', 'text', 'text!./cat.html'], function(ko, text, template) {
  return {
    template: template,
    viewModel: function(params) {
      self.catName = params.catName;
      self.picture = params.picture;
      self.likes = params.likes;
      self.dislikes = params.dislikes;

      // determines if/where 'and' or ',' should be added to the string of likes/dislikes
      self.combineString = function(data) {
        return data.reduce(function(s,d,i,a) {
          return s += ((i + 1 === a.length && a.length > 1) ? ' and ' : '') + d + ((i + 2 < a.length && a.length > 2) ? ', ' : '');
        }, '');
      }
    }
  };
});
