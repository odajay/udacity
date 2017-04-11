function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $streetStr = $('#street').val();
    var $cityStr = $("#city").val();
    // var $concat = $street+","+$city;

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    $body.append('<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=1280x900&location='+$streetStr+','+$cityStr+'">');
    return false;
};

$('#form-container').submit(loadData);
