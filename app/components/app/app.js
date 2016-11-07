define(['knockout', 'text', 'text!./app.html', 'pager'], function(ko, text, template, pager) {
  function App() {
    var self = this;

    self.pages = [{
      pageName: 'Home',
      pagePath: '#!/',
      pageConfig: {
        role: 'start',
        sourceOnShow: 'routes/home',
        title: 'ko and require - home'
      }
    },
    {
      pageName: 'Info',
      pagePath: '#!/info',
      pageConfig: {
        id: 'info',
        sourceOnShow: 'routes/info',
        title: 'ko and require - info'
      }
    },{
      pageName: 'Cats',
      pagePath: '#!/cats',
      pageConfig: {
        id: 'cats',
        sourceOnShow: 'routes/cats',
        title: 'ko and require - cats'
      }
    }];


    self.currentPage = function() {
        var page = window.location.href.split('/')
        return pager.activePage$().currentId || page[page.length - 1];
    };
    self.pageIsActive = function(name) {
        var n  = name.split('/');
        return self.currentPage() === n[n.length - 1];
    }
  }

  return {viewModel: App, template: template}
});
