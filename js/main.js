// A jQuery factory call...
//   By giving it an anonymous function we are waiting for the content to load
//   This anon function is only called when all DOM elements have been loaded
$(function(){
  // Everything in here will be able to see the content *after it has loaded*
  //   We must put all DOM related code inside of this.
  // This is in place of our `document DOMContentLoaded listerner`

  // We need to make var to reference the items
  //   When you give the factory a string... it will use querySelector to find it
  var $itemElements = $("[data-js='item']");

  // Give the item reference a listener
  // Even though `$itemElements` IS A COLLECTION of elements
  //   that have data-js=item... jQuery is smart enough to know to loop for us.
  $itemElements.on("click", function(e){
    // I can find a reference to the element that was clicked with the `this`
    //   keyword. OR by using the `e` (event) data e.g. `e.target`.

    // Find the element that was clicked
    var $clickedItem = $(this);
    // Remove the element that was clicked
    // used the .remove() method to remove the clicked element
    // $clickedItem.remove();

    // Remove class of expand from the one that already has the class of expand
    //   This could be thought of as a "cleanup" of our elements to remove
    //   previously affected elements. Elements that already had the class.
    $itemElements.filter(".expand").removeClass("expand");

    // Expand element to be taller
    // We gave the clicked item the class of expand in html
    $clickedItem.addClass("expand");
  });

  // This is similar to our XHR usage from before
  // Cross-browser compatibility here...
  $.ajax({
    url: "http://www.omdbapi.com/?t=star+wars&y=&plot=short&r=json",
    dataType: "json",
    success: function(data){
      // This code will run when the data comes back
      console.log(data);
    }
  });
})
