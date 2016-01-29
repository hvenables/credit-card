# Credit Card Comparison

#### Tools Used

Jquery, Sass, HTML5, Handlebars, Bootstrap

#### Comments about build

Credit Card Comparison was built using Handlebars to dynamically generate content. This was made responsive by using Bootstrap and also Sass. To improve cross browser compatablity i used normalize and also pre fixed and problematic css selectors with the correct pre fix.

I thought about using Angularjs for this project but considered it to be to bulky for the page and chose a smaller framework in Handlebars to generate the content. I also could have retrived the data with a Angular Factory but chose Jquery for the same reason.

## How to build

All commands assume you are running this from terminal.

1. Clone this repo and open the containing folder
  * `https://github.com/hvenables/credit-card.git`
2. Make sure you have node: `node -v`
3. Run `npm install`  
4. Run `npm -g install http-server` (http-server node_module has to be installed
   globally)
4. Run `http-server`
5. Visit: [http://localhost:8080/ ](http://localhost:8080/ )

### Testing

Run the following commands from terminal to run the tests

##### Jasmine (Unit Tests):  
1. `open SpecRunner.html`

##### jasmine-jquery(feature test):
I struggled to get jasmine-jquery to work due to CORS issues if i had more time I would like to
investigate jasmine-ajax as i feel this could get my feature tests working.
