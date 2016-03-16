
var w=800;
var h=800;
var pwr=60;//default is tungsten
var eff=15;//default is tungsten

//initial slider
$( "#slider1" ).slider({

    orientation: "horizontal",
    range: "min",
    value: 60,
    min: 60,
    max: 120,
    step: 20,
    animate: true,
    slide: function (event, ui) {
        $(ui.handle).find('.ui-slider-tooltip').text(ui.value);
        var power=+(ui.value);
        console.log(ui.value);
    },
    create: function (event, ui) {
        var tooltip = $('<div class="ui-slider-tooltip" />').css({
            position: 'absolute',
            top: -25,
            left: -10
        });
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

//var power = ['60W Bulb', '80W Bulb'], select = document.getElementById('power');
//for (bp in power) {
//    select.add(new Option(power[bp]));
//}

//Selecting and saving values of dimensions
var len=+(document.getElementById("length").value);
$('input').on('change', function() {
    len=+(document.getElementById("length").value);
});
var brd=+(document.getElementById("breadth").value);
$('input').on('change', function() {
    brd=+(document.getElementById("breadth").value);
});
var hgt=+(document.getElementById("height").value);
$('input').on('change', function() {
    hgt=+(document.getElementById("height").value);
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
            },
            slide: function (event, ui) {
                pwr=+ui.value;
                $(ui.handle).find('.ui-slider-tooltip').text(ui.value);
                console.log(ui.value);
            },
            create: function (event, ui) {
                var tooltip = $('<div class="ui-slider-tooltip" />').css({
                    position: 'absolute',
                    top: -25,
                    left: -10
                });
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
            value: 10,
            min: 10,
            max: 50,
            step: 10,
            animate: true,
            slide: function (event, ui) {
                pwr=+ui.value;
                $(ui.handle).find('.ui-slider-tooltip').text(ui.value);
                console.log(ui.value);
            },
            create: function (event, ui) {
                var tooltip = $('<div class="ui-slider-tooltip" />').css({
                    position: 'absolute',
                    top: -25,
                    left: -10
                });
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
            max: 50,
            step: 5,
            animate: true,
            start: function( event, ui ) {
                pwr=+ui.value;
            },
            slide: function (event, ui) {
                $(ui.handle).find('.ui-slider-tooltip').text(ui.value);
                pwr=+ui.value;
                console.log(ui.value);
            },
            create: function (event, ui) {
                var tooltip = $('<div class="ui-slider-tooltip" />').css({
                    position: 'absolute',
                    top: -25,
                    left: -10
                });
            }
        });
    }
});

function calculate()
{
    var num;
    var area=len*brd*hgt;
    num=Math.round((300*area)/(pwr*eff*0.5*0.8));
    console.log(num);
    //document.write(num);
}

function create()
    {
        $("#container").hide();
        $("#intro").show();
    d3.selectAll("svg").remove();
 var lineData = [ { "x": 10,   "y": 10},  { "x": 10,  "y": 410},
                  { "x": 10,  "y": 410}, { "x": 710,  "y": 410},
                  { "x": 710,  "y": 410},  { "x": 710, "y": 10},
                  { "x": 710,  "y": 10}, { "x": 90,  "y": 10},
                  { "x": 90,   "y": 10},  { "x": 90,  "y": 190},
                  { "x": 350,  "y": 190}, { "x": 90,  "y": 190},
                  { "x": 90,  "y": 190}, { "x": 90,   "y": 10},
                  { "x": 410,  "y": 10},  { "x": 410, "y": 190},
                  { "x": 410,   "y": 190},  { "x": 650,  "y": 190},
                  { "x": 650,  "y": 190},{ "x": 410,   "y": 190},
                  { "x": 410,  "y": 190},{ "x": 410,   "y": 10},
                  { "x": 410,  "y": 10},{ "x": 710,   "y": 10},
                  { "x": 710,  "y": 190},{ "x": 710,   "y": 410},
                  { "x": 710,  "y": 190},{ "x": 710,   "y": 410},
                  { "x": 710,  "y": 410},{ "x": 410,   "y": 410},
                  { "x": 410,  "y": 250}, { "x": 410,  "y": 410},
                  { "x": 260,   "y": 410},  { "x": 260,  "y": 290}];

 var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x; })
                          .y(function(d) { return d.y; });
                       


var svg = d3.select("body").append("svg")
                                    .attr("width", w)
                                    .attr("height", h);


var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
    svg.append("text")         
    .attr("x", 180)
    .attr("y", 100)
    .text("Kitchen (5000 - 10000 L)")
    .on("click", function() { createkitchen(); }); 
    svg.append("text")         
    .attr("x", 500)
    .attr("y", 100)
    .text("Bath (4000 - 8000 L)")
     .on("click", function() { createbath(); }); 
    svg.append("text")         
    .attr("x", 480)
    .attr("y", 320)
    .text("Bedroom (2000 - 4000 L)")
     .on("click", function() {createbed();} ); 
    svg.append("text")         
    .attr("x", 275)
    .attr("y", 320)
    .text("Dining (3000-6000 L)")
     .on("click", function() { createdining(); }); 
    svg.append("text")         
    .attr("x", 70)
    .attr("y", 320)
    .text("Living (1500 - 3000 L)")
     .on("click", function() { createliving(); }); 
                    
    }
    
    create();

function createbed()
    {
        $("#container").show();
        $("#intro").hide();
    d3.selectAll("svg").remove();
    var lineData = [  
                  { "x": 10,  "y": 10},  { "x": 790, "y": 10},
                  { "x": 790,   "y": 10},  { "x": 790,  "y": 410},
                  { "x": 790,  "y": 410},  { "x": 10, "y": 410},
                  { "x": 10,   "y": 410},  { "x": 10,  "y": 10}
                 ];

    var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x; })
                          .y(function(d) { return d.y; });
                       


    var svg = d3.select("body").append("svg")
                                    .attr("width", w)
                                    .attr("height", h-350);


    var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
     svg.append("text")         
    .attr("x", 310)           
    .attr("y", 80)           
    .text("Bedroom")
    svg.append("text")         
    .attr("x", w-61)
    .attr("y", h-370)
    .text("Go Back!")
    .on("click", function() {create();} ); 
    }



function createbath()
    {
        $("#container").show();
        $("#intro").hide();
         d3.selectAll("svg").remove();
    var lineData = [  
                  { "x": 100,  "y": 100},  { "x": 600, "y": 100},
                  { "x": 600,   "y": 100},  { "x": 600,  "y": 500},
                  { "x": 600,  "y": 500},  { "x": 100, "y": 500},
                  { "x": 100,   "y": 500},  { "x": 100,  "y": 100} 
                 ];

    var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x; })
                          .y(function(d) { return d.y; });
                       


    var svg = d3.select("body").append("svg")
                                    .attr("width", 800)
                                    .attr("height", 800);


    var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
     svg.append("text")         
    .attr("x", 310)           
    .attr("y", 80)           
    .text("Bath")
    svg.append("text")         
    .attr("x", 535)           
    .attr("y", 530)           
    .text("Go Back!")
    .on("click", function() {create();} ); 
    }
    function createdining()
    {
        $("#container").show();
        $("#intro").hide();
         d3.selectAll("svg").remove();
         var svgWidth  = 590
           ,  svgHeight = 490
           ,  nodes = d3.range(10).map(function() { return {
                radius: 8,
                cx: Math.random() * svgWidth  ,
                cy: Math.random() * svgHeight  }
              });
    var lineData = [  
                  { "x": 100,  "y": 100},  { "x": 600, "y": 100},
                  { "x": 600,   "y": 100},  { "x": 600,  "y": 500},
                  { "x": 600,  "y": 500},  { "x": 100, "y": 500},
                  { "x": 100,   "y": 500},  { "x": 100,  "y": 100} 
                 ];

    var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x; })
                          .y(function(d) { return d.y; });
                       


    var svg = d3.select("body").append("svg")
                                    .attr("width", 800)
                                    .attr("height", 800);

 for (var i = 0; i < nodes.length; i++) {
              svg.append("circle")
                 .attr("cx", nodes[i].cx)
                 .attr("cy", nodes[i].cy)
                 .attr("r", nodes[i].radius)
                 .attr("fill", "yellow")
                 .style("stroke", "black")
                 .style("stroke-width", 1);
          }
    var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
     svg.append("text")         
    .attr("x", 310)           
    .attr("y", 80)           
    .text("Dining")
    svg.append("text")         
    .attr("x", 535)           
    .attr("y", 530)           
    .text("Go Back!")
    .on("click", function() {create();} ); 
    }

function createliving()
    {
        $("#container").show();
        $("#intro").hide();
         d3.selectAll("svg").remove();
    var lineData = [  
                  { "x": 100,  "y": 100},  { "x": 600, "y": 100},
                  { "x": 600,   "y": 100},  { "x": 600,  "y": 500},
                  { "x": 600,  "y": 500},  { "x": 100, "y": 500},
                  { "x": 100,   "y": 500},  { "x": 100,  "y": 100} 
                 ];

    var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x; })
                          .y(function(d) { return d.y; });
                       


    var svg = d3.select("body").append("svg")
                                    .attr("width", 800)
                                    .attr("height", 800);


    var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
     svg.append("text")         
    .attr("x", 310)           
    .attr("y", 80)           
    .text("Living")
    svg.append("text")         
    .attr("x", 535)           
    .attr("y", 530)           
    .text("Go Back!")
    .on("click", function() {create();} ); 
    }


function createkitchen()
    {
        $("#container").show();
        $("#intro").hide();
         d3.selectAll("svg").remove();
    var lineData = [  
                  { "x": 100,  "y": 100},  { "x": 600, "y": 100},
                  { "x": 600,   "y": 100},  { "x": 600,  "y": 500},
                  { "x": 600,  "y": 500},  { "x": 100, "y": 500},
                  { "x": 100,   "y": 500},  { "x": 100,  "y": 100} 
                 ];

    var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x; })
                          .y(function(d) { return d.y; });
                       


    var svg = d3.select("body").append("svg")
                                    .attr("width", 800)
                                    .attr("height", 800);


    var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
     svg.append("text")         
    .attr("x", 310)           
    .attr("y", 80)           
    .text("Kitchen")
    svg.append("text")         
    .attr("x", 535)           
    .attr("y", 530)           
    .text("Go Back!")
    .on("click", function() {create();} ); 
    }
    
        