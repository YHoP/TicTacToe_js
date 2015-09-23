function Player(mark) {
  this.mark = mark;
}

Player.prototype.mark = function() {
  return mark;
}

function Space(x-coordinate, y-coordinate) {
  this.x-coordinate = x-coordinate;
  this.y-coordinate = y-coordinate;
}

Space.prototype.x-coordinate = function() {
  return x-coordinate;
}

Space.prototype.y-coordinate = function() {
  return y-coordinate;
}

$(document).ready(function() {
  $("#add-address").click(function() {

  });



  $("form#new-contact").submit(function(event) {
  event.preventDefault();

  var inputtedFirstName = $("input#new-first-name").val();
  var inputtedLastName = $("input#new-last-name").val();

  // var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [] };
  var newContact = new Contact(inputtedFirstName, inputtedLastName);

  $(".new-address").each(function() {
    var inputtedStreet = $(this).find("input.new-street").val();
    var inputtedCity = $(this).find("input.new-city").val();
    var inputtedState = $(this).find("input.new-state").val();

    // var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
    newContact.addresses.push(newAddress);

  });


  // $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
   $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

  $(".contact").last().click(function() {
    $("#show-contact").show();

    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);

    $("ul#addresses").text("");
    newContact.addresses.forEach(function(address) {
      // $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
      $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
    });
  });

  resetFields();

}); // end of new-contact submit

}); // end of document
