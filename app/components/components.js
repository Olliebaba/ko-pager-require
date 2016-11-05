define(['knockout'], function(ko) {
    return function() {
        ko.components.register('like-or-dislike', {
            viewModel: { require: '../components/info/info' },
            template: { require: 'text!../components/info/info.html' }
        });
    }
});
