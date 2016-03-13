
var w=800;
var h=800;
var pwr=60;//default is tungsten
var eff=15;//default is tungsten
var n = 0;
var no_of_bulbs = [];
var svg, selected_room;
var width;
var height;
var e=200;
var lighting_type = "New House";

// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene();


// // create a scene
// new ScrollMagic.Scene({
//         duration: 500,    // the scene should last for a scroll distance of 100px
//         offset: 0        // start this scene after scrolling for 50px
//     })
//     .setPin("#container") // pins the element for the the scene's duration
//     .addTo(controller); // assign the scene to the controller

// new ScrollMagic.Scene({
//         duration: 500,    // the scene should last for a scroll distance of 100px
//         offset: 0        // start this scene after scrolling for 50px
//     })
//     .setPin("#container2") // pins the element for the the scene's duration
//     .addTo(controller);



$("#bedroom").click(
    function(){
        //$(this).unbind("mouseenter mouseleave");
        $("#bedroom").fadeTo("fast",1);
        $("#living").fadeTo("fast",0.2);
        $("#kitchen").fadeTo("fast",0.2);
        $("#bathroom").fadeTo("fast",0.2);
        $("#dining").fadeTo("fast",0.2);
        console.log("Bedroom selected");
        $("#roomselected").text("Bedroom");
        selected_room = "#bedroom";
        width = 375;
        height = 375;
        e=150;

    }
);

$("#living").click(
    function(){
        //$(this).unbind("mouseenter mouseleave");
        $("#living").fadeTo("fast",1);
        $("#bedroom").fadeTo("fast",0.2);
        $("#kitchen").fadeTo("fast",0.2);
        $("#bathroom").fadeTo("fast",0.2);
        $("#dining").fadeTo("fast",0.2);
        console.log("Living selected");
        $("#roomselected").text("Living");
        selected_room = "#living";
        width = 250;
        height = 250;
        e=150;
    }
);

$("#kitchen").click(
    function(){
        //$(this).unbind("mouseenter mouseleave");
        $("#kitchen").fadeTo("fast",1);
        $("#living").fadeTo("fast",0.2);
        $("#bedroom").fadeTo("fast",0.2);
        $("#bathroom").fadeTo("fast",0.2);
        $("#dining").fadeTo("fast",0.2);
        console.log("Kitchen selected");
        $("#roomselected").text("Kitchen");
        selected_room = "#kitchen";
        width = 250;
        height = 250;
        e=250;
    }
);

$("#bathroom").click(
    function(){
        //$(this).unbind("mouseenter mouseleave");
        $("#bathroom").fadeTo("fast",1);
        $("#living").fadeTo("fast",0.2);
        $("#kitchen").fadeTo("fast",0.2);
        $("#bedroom").fadeTo("fast",0.2);
        $("#dining").fadeTo("fast",0.2);
        console.log("Bathroom selected");
        $("#roomselected").text("Bathroom");
        selected_room = "#bathroom";
        width = 250;
        height = 250;
        e=200;
    }
);


$("#dining").click(
    function(){
        //$(this).unbind("mouseenter mouseleave");
        $("#dining").fadeTo("fast",1);
        $("#living").fadeTo("fast",0.2);
        $("#kitchen").fadeTo("fast",0.2);
        $("#bathroom").fadeTo("fast",0.2);
        $("#bedroom").fadeTo("fast",0.2);
        console.log("Dining selected");
        $("#roomselected").text("Dining");
        selected_room = "#dining";
        width = 375;
        height = 375;
        d3.selectAll("svg").remove();
        e=150;
    }
);


//initial slider
$( "#slider1" ).slider({

    orientation: "horizontal",
    range: "min",
    value: 60,
    min: 60,
    max: 120,
    step: 20,
    animate: true,
    start: function( event, ui ) {
        pwr=+ui.value;
        $(ui.handle).find('.ui-slider-tooltip').show();
    },
    stop: function( event, ui ) {
        $(ui.handle).find('.ui-slider-tooltip').hide();
    },
    slide: function (event, ui) {
        pwr=+ui.value;
        $(ui.handle).find('.ui-slider-tooltip').text(ui.value + " Watts");
        console.log(ui.value);
    },
    create: function (event, ui) {
        var tooltip = $('<div class="ui-slider-tooltip" />').css({
            position: 'absolute',
            top: -25,
            left: -10
        });
        $(event.target).find('.ui-slider-handle').append(tooltip);
    }
});
//end of initial slider

$('.onoffswitch').change(function()
{
    if($("#myonoffswitch").is(':checked'))
        lighting_type = "New House";  // checked
    else
        lighting_type = "Existing Setup";
    console.log(lighting_type);

});

$(".pref").change(function()
{
    var preference =$("input[type='radio'][name='pref']:checked").val();
    $("#select_preference").text(preference);
})



//Selecting and saving the value of the radio button
var bulb=$("input[type='radio'][name='bulb']:checked").val();
//console.log(bulb);
$('input').on('change', function() {
    bulb=($("input[name='bulb']:checked").val());
    var bulb_type = $("input[type='radio'][name='bulb']:checked").val();
    $("#bulb_type").text(bulb_type);
});
//End of radio

//Selecting and saving values of dimensions
var len=+(document.getElementById("length").value);
$('input').on('change', function() {
    len=+(document.getElementById("length").value);
});
var brd=+(document.getElementById("breadth").value);
$('input').on('change', function() {
    brd=+(document.getElementById("breadth").value);
});

//End of text box

$( ".bulb" ).change(function()
{
    if (bulb == 'inc') {

        eff=15;
        pwr=60;
        $( "#slider1" ).slider("destroy");
        $( "#slider1" ).slider({

            orientation: "horizontal",
            range: "min",
            value: 60,
            min: 60,
            max: 120,
            step: 20,
            animate: true,
            start: function( event, ui ) {
                pwr=+ui.value;
                $(ui.handle).find('.ui-slider-tooltip').show();
            },
            stop: function( event, ui ) {
                $(ui.handle).find('.ui-slider-tooltip').hide();
            },
            slide: function (event, ui) {
                pwr=+ui.value;
                $(ui.handle).find('.ui-slider-tooltip').text(ui.value+ " Watts");
                console.log(ui.value);
            },
            create: function (event, ui) {
                var tooltip = $('<div class="ui-slider-tooltip" />').css({
                    position: 'absolute',
                    top: -25,
                    left: -10
                });
                $(event.target).find('.ui-slider-handle').append(tooltip);
            }
        });
    }
    else if (bulb == 'cfl') {
        eff=60;
        pwr=10;
        $( "#slider1" ).slider("destroy");
        $( "#slider1" ).slider({

            orientation: "horizontal",
            range: "min",
            value: 14,
            min: 14,
            max: 42,
            step: 4,
            animate: true,
            start: function( event, ui ) {
                pwr=+ui.value;
                $(ui.handle).find('.ui-slider-tooltip').show();
            },
            stop: function( event, ui ) {
                $(ui.handle).find('.ui-slider-tooltip').hide();
            },
            slide: function (event, ui) {
                pwr=+ui.value;
                $(ui.handle).find('.ui-slider-tooltip').text(ui.value+ " CFL Watts");
                console.log(ui.value);
            },
            create: function (event, ui) {
                var tooltip = $('<div class="ui-slider-tooltip" />').css({
                    position: 'absolute',
                    top: -25,
                    left: -10
                });
                $(event.target).find('.ui-slider-handle').append(tooltip);
            }
        });
    }
    else if (bulb == 'led') {
        eff=90;
        pwr=5;
        $( "#slider1" ).slider("destroy");
        $( "#slider1" ).slider({

            orientation: "horizontal",
            range: "min",
            value: 5,
            min: 5,
            max: 40,
            step: 5,
            animate: true,
            start: function( event, ui ) {
                pwr=+ui.value;
                $(ui.handle).find('.ui-slider-tooltip').show();
            },
            stop: function( event, ui ) {
                $(ui.handle).find('.ui-slider-tooltip').hide();
            },
            slide: function (event, ui) {
                $(ui.handle).find('.ui-slider-tooltip').text(ui.value+ " LED Watts");
                pwr=+ui.value;
                console.log(ui.value);
            },
            create: function (event, ui) {
                var tooltip = $('<div class="ui-slider-tooltip" />').css({
                    position: 'absolute',
                    top: -25,
                    left: -10
                });
                $(event.target).find('.ui-slider-handle').append(tooltip);
            }
        });
    }
});

function calculate()
{
    var area=len*brd;
    n=Math.ceil((e*area)/(pwr*eff*0.5*0.8));
    console.log(n);

    x = primeFactors(n);
    console.log(x);

    if (n % 2 == 1 & n != 3)
    {
        n += 1;
    }

    document.getElementById("demo").innerHTML=n;

    no_of_bulbs[0] = n;

    d3.selectAll("svg").remove();
    console.log(selected_room);
    svg = d3.select(selected_room).selectAll("svg")
        .data(no_of_bulbs)
        .enter().append("svg")
        .attr("width", width)
        .attr("height", height);

        svg.append("g")
        .attr("transform", "translate(" + [width / 2, height / 2] + ")")
        .each(function(d) {
          d3.select(this).call(bulb_placement, primeFactors(d), width / 2);
        });

        svg = d3.select(selected_room).selectAll("svg")
        .data(no_of_bulbs)
        .enter().append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.append("g")
        .attr("transform", "translate(" + [width / 2, height / 2] + ")")
        .each(function(d) {
          d3.select(this).call(bulb_placement, primeFactors(d), width / 2);
        });

}


function bulb_placement(selection, factors, size) {
    var radialGradient = svg.append("defs")
        .append("radialGradient")
        .attr("id", "radial-gradient");

    radialGradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "red");

    radialGradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#fff");
      if (factors.length) {
        
        // Retrieving factors one by one from the prime factorization array
        var n = factors.pop();
        


        //  calculating the adjustment in angle based on the factor 
        if (n === 4){
            offset = 45; // 45 degrees will place the 4 bulbs in the 4 corners of a square
        }
            else if (n === 2) {
                offset = 0; // 0 degrees will place the 2 bulbs side by side
            }
                else {
                    offset = -90; // -90 degrees will club the bulbs in the form of a triangle
                };
        // Calculating the radius of the circle based on the number of bulbs 
        radius = n * size / (n + 2);
        
        // Displacement in the y coordinate between 2 bulbs in the same cluster
        dy = n & 1 ? (radius / 2) * (1 - Math.cos(3.14 / n)) : 0;

        // Create empty placeholders for all factors n
        selection.selectAll("g")
            .data(d3.range(n))
            .enter().append("g")
            .attr("transform", function(d) {
              var angle = d * 360 / n + offset;
              return "translate(0," + dy + ")rotate(" + angle + ")translate(" + radius + ")rotate(" + - angle + ")";
            })
            .call(bulb_placement, factors, 2 * size / (n + 2));
      } 
      // append the bulbs 
      else selection.append("circle").attr("r", size * 1.5).style("opacity","0.4").style("fill", "url(#radial-gradient)");

}

// Function to calculate the prime factors of the number of bulbs to find the combinations
function primeFactors(n) {
  var factors = [],
      f;
  while (n > 1) {

    factors.push(f = factor(n)); // Calling the function for finding the factors
    n /= f;
  }
  console.log(factors);
  return factors;
}

function factor(n) {


  // Preserving the combination of 4 bulbs
  if (n % 4 === 0) return 4;

  for (var i = 2; i <= n / 2; i++) {
    if (n % i === 0) return i;
  }
  
  return n;
}


// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
        duration: 500,    // the scene should last for a scroll distance of 100px
        offset: 0        // start this scene after scrolling for 50px
    })
    .setPin("#container") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller


