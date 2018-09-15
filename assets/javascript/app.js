$(document).ready(function () {

    $("#changingContent").html('<button id="startButton" class="btn btn-primary">Let\'s Have Some Fun !!!</button>');

    var q1 = {
        question:"What activity can you do to burn 150 calories besides walking your dog ?",
        op1:"Banging your head against the wall for one hour.",
        op2:"Drink Cold Water every hour of the day.",
        op3:"Chew Gum for 1 hour straight.",
        op4:"Laugh for 5 minutes every hour !!!!"
    };

    

    // Button Clicking
    $("#startButton").on("click", function () {
        gameStart();
    });


    // Starting Game 
    function gameStart() {
        // Screen is emptied
        $("#changingContent").html('');
        
        // Timer Starts
        var seconds = 31;
        var interval;
    
        function timer() {
            clearInterval(interval);
            interval = setInterval(secDecrement, 1000);
            function secDecrement() {
                seconds --;
                
                $("#changingContent").html('<h2 id="timer" class="alert alert-info display-5 align-top"> Time remaining: ' + seconds + ' seconds. </h2>');
                
                $("#changingContent").append('<div id="quesBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h3 id="question" class="text-center alert alert-light"> What activity can you do to burn 150 calories besides walking your dog ? </h3>\
                                                </div>\
                                            </div>');

                $("#quesBox").after('<div id="answers" class="row text-center">\
                                        <div class="col-sm-2"></div>\
                                            <div class="col-sm-8 text-center">\
                                                <ul>\
                                                    <li><h4 id="op1" class= "answer text-center border border-info rounded-top py-3 mx-auto bg-white text-dark"> Banging your head against the wall for one hour. </h4></li>\
                                                    <li><h4 id="op2" class= "answer text-center border border-success rounded-right py-3 mx-auto bg-white text-dark"> Drink Cold Water every hour of the day. </h4></li>\
                                                    <li><h4 id="op3" class= "answer text-center border border-warningrounded-left py-3 mx-auto bg-white text-dark"> Chew Gum for 1 hour straight. </h4></li>\
                                                    <li><h4 id="op4" class= "answer text-center border border-primary rounded-bottom py-3 mx-auto bg-white text-dark"> Laugh for 5 minutes every hour !!!! </h4></li>\
                                                </ul>\
                                            </div>\
                                        <div class="col-sm-2"></div>\
                                    </div>');
                
                $("#op1").click(function(){

                })
                
                
            };

        };

        timer();
        

    }


});