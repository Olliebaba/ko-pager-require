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

    function MyApp() {
      var self = this;

      self.pages = [{
          pageName: 'Home',
          pagePath: '#!/'
      },
      {
          pageName: 'Info',
          pagePath: '#!/info'
      },{
          pageName: 'Cats',
          pagePath: '#!/cats'
      }]


      self.currentPage = function() {
          var page = window.location.href.split('/')
          return pager.activePage$().currentId || page[page.length - 1];
      };
      self.pageIsActive = function(name) {
          var n  = name.split('/');
          return self.currentPage() === n[n.length - 1];
      }
    }

    myApp = new MyApp();
    pager.Href.hash = "#!/";
    pager.extendWithPage(myApp);
    ko.applyBindings(myApp);
    pager.start();
});
