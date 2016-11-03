requirejs.config({
    "baseUrl": "js",
    shim:{
        bootstrap:['jquery']
    },
    paths:{
        jquery:'jquery',
        knockout:'knockout',
        pager:'pager',
        bootstrap:'bootstrap'
    }
});




requirejs(['jquery', 'knockout', 'pager', 'bootstrap'], function ($, ko, pager) {

    function MyApp() {

    }


    myApp = new MyApp();
    pager.Href.hash = "#!/";
    pager.extendWithPage(myApp);
    ko.applyBindings(myApp);
    pager.start();
});
