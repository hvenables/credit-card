describe('Handlebars Tests', function() {

    describe('helper tests', function() {

        it('will return a number to 2 decimal places', function() {
          var html = "{{formatCurrency number}}";
          var field = { number: 120 };
          var template = Handlebars.compile(html);
          var result = template(field);
          expect(result.toString()).toEqual("120.00");
        });

        it('will perform addition', function() {
          var html = "{{math number1 '+' number2}}";
          var field = {
            number1: 10,
            number2: 20
          };
          var template = Handlebars.compile(html);
          var result = template(field);
          expect(result).toEqual('30');
        })

    });
});
