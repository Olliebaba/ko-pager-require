requirejs.config({
    "baseUrl": ".",
    shim:{
        bootstrap:['jquery']
    },
    paths:{
        jquery:'js/jquery',
        knockout:'js/knockout',
        pager:'js/pager',
        bootstrap:'js/bootstrap',
        text: 'js/tools/text'
    }
});

requirejs(['jquery', 'knockout', 'pager', 'bootstrap'], function ($, ko, pager) {
    ko.components.register("like-or-dislike", { require: 'components/info/info' });

    ko.bindingHandlers.stopBinding = {
        init: function() {
            return {controlsDescendantBindings: true};
        }
    };
    ko.virtualElements.allowedBindings.stopBinding = true;

    function MyApp() {}

    myApp = new MyApp();
    pager.Href.hash = "#!/";
    pager.extendWithPage(myApp);
    ko.applyBindings(myApp);
    pager.start();
});
