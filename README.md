# primo-explore-custom-no-results
Add custom text and an option to expand results to PCI when no records retrieved.

The OTB page in the Primo NUI for a no results search looks like this:

![No results OTB](no_results_otb.png?raw=true "No results OTB")

The custom js in this package adds an option to expand results to PCI records that you don't have full-text.  The key part of the URL is the pcAvailability=true parameter.  This will return results from all records you have activated in PCI, whether you have full-text holdings or not.  

It also allows you to adjust the text and other links you provide when a user isn't successful in their search.  If you are on WorldCat Discovery, you can add a WorldCat link to query the orginal search term by using the following syntax:

https://[site-ID].on.worldcat.org/search?queryString=kw:{{$ctrl.getSearchTerm()}}&databaseList=283

Here's how we've customized at [St. Olaf College](https://stolaf-primo.hosted.exlibrisgroup.com/primo-explore/search?institution=01BRC_SOC&vid=01BRC_SOC&mode=Basic&displayMode=full&bulkSize=10&highlight=true&dum=true&query=any,contains,saj%20eofi&displayField=all&search_scope=default_scope&pcAvailabiltyMode=false&tab=library_collections):

![No results customized](no_results_custom.png?raw=true "No results customized")

If you use the HTML as given in the Angular component, you'll probably want to suppress the OTB tile in the CSS:

```css
prm-no-search-result > md-card {
    display:none;
}
```

