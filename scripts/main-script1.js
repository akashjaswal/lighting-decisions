
var w=800;
var h=800;
var pwr=60;//default is tungsten
var eff=15;//default is tungsten

$("#bedroom").click(
    function(){
        console.log("Bedroom selected");
        $("#roomselected").text("Bedroom");
    }
);

$("#living").click(
    function(){
        console.log("Living selected");
        $("#roomselected").text("Living");
    }
);

$("#kitchen").click(
    function(){
        console.log("Kitchen selected");
        $("#roomselected").text("Kitchen");
    }
);

$("#bathroom").click(
    function(){
        console.log("Bathroom selected");
        $("#roomselected").text("Bathroom");
    }
);

$("#dining").click(
    function(){
        console.log("Dining selected");
        $("#roomselected").text("Dining");
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
    var num;
    var area=len*brd;
    num=Math.round((150*area)/(pwr*eff*0.5*0.8));
    console.log(num);
    document.getElementById("demo").innerHTML=num;
    //document.write(num);
}


