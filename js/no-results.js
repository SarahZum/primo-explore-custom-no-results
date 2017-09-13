// Enhance No Results tile
app.controller('prmNoSearchResultAfterController', [function () {
  var vm = this;
  vm.getSearchTerm = getSearchTerm;
  vm.pciSetting = vm.parentCtrl.searchStateService.searchObject.pcAvailability || '';
  function getSearchTerm() {
    return vm.parentCtrl.term;
  }
}]);

// Update links in template line below to direct to your Primo server and WorldCat, etc.
app.component('prmNoSearchResultAfter',{
  bindings: {parentCtrl: '<'},
  controller: 'prmNoSearchResultAfterController',
  template: '<md-card class="default-card zero-margin _md md-primoExplore-theme"><md-card-title><md-card-title-text><span translate="" class="md-headline ng-scope">No records found</span></md-card-title-text></md-card-title><md-card-content><p><span>There are no results matching your search:<blockquote><i>{{$ctrl.getSearchTerm()}}</i>.</blockquote><div ng-if="$ctrl.pciSetting !== \'true\'"><a href="https://stolaf-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,{{$ctrl.getSearchTerm()}}&tab=default_tab&search_scope=Everything&vid=01BRC_SOC&offset=0&sortby=rank&pcAvailability=true"><b>Try again searching items held at other libraries?</b></a></div></span></p><p><span translate="" class="bold-text ng-scope">Suggestions:</span></p><ul><li translate="" class="ng-scope">Make sure that all words are spelled correctly.</li><li translate="" class="ng-scope">Try a different search scope.</li><li translate="" class="ng-scope">Try different search terms.</li><li translate="" class="ng-scope">Try more general search terms.</li><li translate="" class="ng-scope">Try fewer search terms.</li></ul><p><b><a href="https://stolaf.on.worldcat.org/search?queryString=kw:{{$ctrl.getSearchTerm()}}&databaseList=283">Search WorldCat</a></b></p><p><b><a href="https://www.stolaf.edu/library/research/students.cfm">Contact a Research Librarian for Assistance</a></b></p></md-card-content></md-card>'
});
