
var w=800;
var h=800;

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
    
        