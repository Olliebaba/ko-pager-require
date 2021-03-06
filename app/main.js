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

// register custom components
requirejs(['components/components']);

requirejs(['jquery', 'knockout', 'pager', 'bootstrap'], function ($, ko, pager) {

    ko.bindingHandlers.stopBinding = {
        init: function() {
            return {controlsDescendantBindings: true};
        }
    };
    ko.virtualElements.allowedBindings.stopBinding = true;

    function RKO() {}

    myApp = new RKO();
    ko.applyBindings(myApp);
    pager.Href.hash = "#!/";
    pager.extendWithPage(myApp);
    pager.start();
});
