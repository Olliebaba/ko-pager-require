define(["knockout","text","text!./app.html","pager"],function(e,t,a,n){function o(){var e=this;e.pages=[{pageName:"Home",pagePath:"#!/",pageConfig:{role:"start",sourceOnShow:"routes/home",title:"ko and require - home"}},{pageName:"Info",pagePath:"#!/info",pageConfig:{id:"info",sourceOnShow:"routes/info",title:"ko and require - info"}},{pageName:"Cats",pagePath:"#!/cats",pageConfig:{id:"cats",sourceOnShow:"routes/cats",title:"ko and require - cats"}}],e.currentPage=function(){var e=window.location.href.split("/");return n.activePage$().currentId||e[e.length-1]},e.pageIsActive=function(t){var a=t.split("/");return e.currentPage()===a[a.length-1]}}return{viewModel:o,template:a}});