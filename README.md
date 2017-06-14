# primo-explore-custom-no-results
Add custom text and an option to expand results to PCI when no records retrieved.

The OTB page in the Primo NUI for a no results search looks like this:

![No results OTB](no_results_otb.png?raw=true "No results OTB")

The custom js in this package adds an option to expand results to PCI records that you don't have full-text.  It also allows you to adjust the text and other links you provide when a user isn't successful in their search.

Here's how we've customized at St. Olaf College:

![No results customized](no_results_custom.png?raw=true "No results customized")

If you use the HTML as given in the Angular component, you'll probably want to suppress the OTB tile in the CSS:

```css
prm-no-search-result > md-card {
    display:none;
}
```
