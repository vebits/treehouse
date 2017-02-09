//Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);
//Cycle over menu links
$("#menu a").each(function() {
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option>");

  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //option's value is the href
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});

// Bind change listener to the select
$select.change(function() {
  //Go to select's location
  window.location = $select.val();
});

//Deal with selected options depending on current page
