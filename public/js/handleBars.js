$.getJSON('cards.json', function(cards) {
  cards = cards.sort(function(a, b) {
    return a.apr - b.apr
  });

  $(function() {
    var source = $("#document-template").html();
    var template = Handlebars.compile(source);
    var html = template(cards);
    $('.accordion').html(html)
  });
});

Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
});

Handlebars.registerHelper('formatCurrency', function(value) {
  return value.toFixed(2);
});
