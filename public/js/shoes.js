$(document).ready(function(){

  // $('#products, h6').hide();
  var apikey = 'df180f455f59f4441b26c77d27a8727e',
      URL = 'https://api.gilt.com/v1/products?q=shoes&store=women&size=WoSh%3A8&apikey=df180f455f59f4441b26c77d27a8727e';
       // URL = 'https://api.gilt.com/v1/sales/women/active.json?apikey=df180f455f59f4441b26c77d27a8727e';
  $.ajax({
    url: URL,
    type: 'GET',
    dataType: 'json',
    success: function (response){
      console.log("Gilt API Successful");

      for (var i = 0; i < response.products.length; i++) {
        var product_name = response.products[i].name;
        var brand_name = response.products[i].brand;
        var product_url = response.products[i].url;
        var product = response.products[i].skus

        for (var j = 0; j < product.length; j++){
          var product_msrp = product[j].msrp_price;
          var product_price = product[j].sale_price;
          var color_object = product[j].attributes
          
          for (var k = 0; k < color_object.length; k++){
            var name = color_object[0].name;
            var color = color_object[0].value;
          }

        }
 
        $('#products').append("<li><a href='" + product_url + "'target='_blank'>" +
                              "<h3>" + product_name + "</h3></a></li>" + 
                              "<li>"+ brand_name +"</li>" +
                              "<li>" + name+ ": " + color + "</li>" +
                              "<li>" + product_price + "</li>" +
                              "<li><s>" + product_msrp + "</s></li>");
        $('#products, h6').fadeIn(3000);

      }
  
    },
    error: function(response){
      console.log("Gilt Failed")
    }
  }); 
});


// {products":[
// {"name":"Mixed Media T-Strap Platform Sandal",
// "product":"https://api.gilt.com/v1/products/1056675027/detail.json",
// "id":1056675027,
// "brand":"Rene Caovilla",
// "content":
//   {"description":"High heel platform sandal  Leather and suede upper  T-strap vamp with embellishments  Ankle strap with adjustable metal buckle closure  Covered heel  Leather insole and glitter sole    
//     Measurements:   Heel height 4.75\", platform sole 0.5\"",
//     "material":"Leather, suede, and glitter",
//     "origin":"Italy"},
// "url":"http://www.gilt.com/sale/women/fall-fetes/product/1056675027-rene-caovilla-mixed-media-t-strap-platform-sandal?utm_medium=api&utm_campaign=ShoppingObsessions&utm_source=salesapi",
// "image_urls":
//   {"91x121":[
//     {"url":"http://cdn1.gilt.com/images/share/uploads/0000/0004/0090/400907975/91x121.jpg","width":91,"height":121},
//     {"url":"http://cdn1.gilt.com/images/share/uploads/0000/0004/0090/400907976/91x121.jpg","width":91,"height":121},
//     {"url":"http://cdn1.gilt.com/images/share/uploads/0000/0004/0090/400907979/91x121.jpg","width":91,"height":121}
//   ],
//   "300x400":[
//     {"url":"http://cdn1.gilt.com/images/share/uploads/0000/0004/0090/400907975/300x400.jpg","width":300,"height":400},
//     {"url":"http://cdn1.gilt.com/images/share/uploads/0000/0004/0090/400907976/300x400.jpg","width":300,"height":400},
//     {"url":"http://cdn1.gilt.com/images/share/uploads/0000/0004/0090/400907979/300x400.jpg","width":300,"height":400}
//   ],
//   "420x560":[
//     {"url":"http://cdn1.gilt.com/images/share/uploads/0000/0004/0090/400907975/420x560.jpg","width":420,"height":560},
//     {"url":"http://cdn1.gilt.com/images/share/uploads/0000/0004/0090/400907976/420x560.jpg","width":420,"height":560},
//     {"url":"http://cdn1.gilt.com/images/share/uploads/0000/0004/0090/400907979/420x560.jpg","width":420,"height":560}
//   ],
//   "1080x1440":[
//     {"url":"http://cdn1.gilt.com/images/share/uploads/0000/0004/0090/400907975/1080x1440.jpg","width":1080,"height":1440},
//     {"url":"http://cdn1.gilt.com/images/share/uploads/0000/0004/0090/400907976/1080x1440.jpg","width":1080,"height":1440},
//     {"url":"http://cdn1.gilt.com/images/share/uploads/0000/0004/0090/400907979/1080x1440.jpg","width":1080,"height":1440}
//   ]
// },
// "skus":[
//   {"id":3368556,
//    "inventory_status":"for sale",
//    "units_for_sale":2,
//    "msrp_price":"990.00",
//    "sale_price":"449.00",
//    "attributes":[
//     {"name":"color","value":"black"},
//     {"name":"size","value":"38"}
//     ]
//   }
// ],
// "categories":["Shoes","Sandals","Women"]
// },










