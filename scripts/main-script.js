
var w=800;
var h=800;
var pwr=60;//default is tungsten
var eff=15;//default is tungsten
var n = 0;
var no_of_bulbs = [];
var svg, selected_room;
var width;
var height;

$("#bedroom").click(
    function(){
        console.log("Bedroom selected");
        $("#roomselected").text("Bedroom");
        selected_room = "#bedroom";
        width = 450;
        height = 450;

    }
);

$("#living").click(
    function(){
        console.log("Living selected");
        $("#roomselected").text("Living");
        selected_room = "#living";
        width = 300;
        height = 300;

    d3.selectAll("svg").remove();
    }
);

$("#kitchen").click(
    function(){
        console.log("Kitchen selected");
        $("#roomselected").text("Kitchen");
        selected_room = "#kitchen";
        width = 300;
        height = 300;
    }
);

$("#bathroom").click(
    function(){
        console.log("Bathroom selected");
        $("#roomselected").text("Bathroom");
        selected_room = "#bathroom";
        width = 300;
        height = 300;
    }
);

$("#dining").click(
    function(){
        console.log("Dining selected");
        $("#roomselected").text("Dining");
        selected_room = "#dining";
        width = 450;
        height = 450;
        d3.selectAll("svg").remove();
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

//Selecting and saving the value of the radio button
var bulb=$("input[type='radio'][name='bulb']:checked").val();
//console.log(bulb);
$('input').on('change', function() {
    bulb=($("input[name='bulb']:checked").val());
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
    n=Math.ceil((150*area)/(pwr*eff*0.5*0.8));
    console.log(n);
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

