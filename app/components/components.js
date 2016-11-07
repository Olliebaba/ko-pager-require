define(['knockout'], function(ko) {
  ko.components.register("app", { require: 'components/app/app' });
  ko.components.register("like-or-dislike", { require: 'components/info/info' });
  ko.components.register("cat", { require: 'components/cats/cat/cat' });
  ko.components.register("cats", { require: 'components/cats/cats' });
});
