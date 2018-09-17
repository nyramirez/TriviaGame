$(document).ready(function () {

    // Initial Screen
    $("#changingContent").html('<button id="startButton" class="btn btn-primary">Let\'s Have Some Fun !!!</button>');
    // *******************************************************

    // Questions in from of Objects and Methods


    var questions = [

        q1 = ["What activity can you do to burn 150 calories besides walking your dog ?",
            "Banging your head against the wall for one hour.",
            "Drink Cold Water every hour of the day.",
            "Chewing gum for 1 hour straight.",
            "Laugh for 5 minutes every hour !!!!"
        ],

        q2 = ["What is illegal to own in Switzerland due to the believe that is animal cruelty? Hint: They are believed to be social animals.",
            "Horses.",
            "Dogs.",
            "Guinea Pigs.",
            "Cats"
        ],

        q3 = ["What animal can sense a coming earthquake from 75 miles away, up to five days before it happens? ",
            "Snakes.",
            "Dolphins.",
            "Horses.",
            "Dogs."
        ],

        q4 = ["What is a murder in the animal world?",
            "If a tiger attacks a deer, that is a murder.",
            "A group of deers",
            "Nothing related to animals.",
            "A flock of crows"
        ],

        q5 = ["It was created 3500 years ago in a Babylonian tablet and the text remains preserved.",
            "The oldest \"your mom\" joke.",
            "The oldest lawsuit in history.",
            "The first newspaper ever created.",
            "There is no text that old remaining."
        ],

        q6 = ["The average person walks the equivalent of ___________ in a lifetime.",
            "two times around the world.",
            "three times around the world.",
            "one times around the world.",
            "five times around the world."
        ],

        q7 = ["What would be the color of Coca Cola if color was not added to it",
            "Green",
            "White",
            "Clear",
            "Still black"
        ]
    ];

    // *******************************************************

    // Button Clicking to Start Game
    $("#startButton").on("click", function () {
        gameStart();
    });
    // *******************************************************


    // Starting Game after clicking of button.
    function gameStart() {
        var correct = 0
        var incorrect = 0;
        var unAnswered = 0;

        // Question 1
            timer();
            function timer() {
                // Timer Starts
                var seconds = 30;
                var interval;

                // Screen is emptied
                $("#changingContent").html('');

                clearInterval(interval);
                interval = setInterval(secDecrement, 1000);
                function secDecrement() {
                    seconds--;

                    // timer on screen ************************************************************************************************
                    $("#changingContent").html('<h2 id="timer" class="alert alert-danger display-5 align-top"> Time remaining: ' + seconds + ' seconds. </h2>');
                    // *****************************************************


                    // Loop for questions 

                    $("#changingContent").append('<div id="quesBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h3 id="question" class="text-center alert alert-light"> ' + questions[0][0] + ' </h3>\
                                                </div>\
                                            </div>');

                    $("#quesBox").after('<div id="answers" class="row text-center">\
                                        <div class="col-sm-2"></div>\
                                            <div class="col-sm-8 text-center">\
                                                <ul>\
                                                    <li><h4 id="op1" class= "answer text-center border border-info rounded-top py-3 mx-auto bg-white text-dark"> ' + questions[0][1] + ' </h4></li>\
                                                    <li><h4 id="op2" class= "answer text-center border border-success rounded-right py-3 mx-auto bg-white text-dark"> ' + questions[0][2] + ' </h4></li>\
                                                    <li><h4 id="op3" class= "answer text-center border border-warningrounded-left py-3 mx-auto bg-white text-dark"> ' + questions[0][3] + ' </h4></li>\
                                                    <li><h4 id="op4" class= "answer text-center border border-primary rounded-bottom py-3 mx-auto bg-white text-dark"> ' + questions[0][4] + ' </h4></li>\
                                                </ul>\
                                            </div>\
                                        <div class="col-sm-2"></div>\
                                    </div>');

                    // **************************************************************************************************************

                    // Correct Answer ************************************************************************************************
                    $("#op1").on("click", function () {

                        clearInterval(interval);
                        timerClick();
                        correct++;
                        console.log(correct);

                        // Fucntion for timer = 0
                        function timerClick() {
                            seconds = 5;
                            timer();

                            function timer() {
                                clearInterval(interval);
                                interval = setInterval(secDecrement, 1000);
                                function secDecrement() {
                                    seconds--;
                                    // console.log(seconds);
                                    // console.log(typeof(seconds));

                                    if (seconds === 0) {
                                        timer2();

                                    }
                                };
                            };
                        };
                        // *********************************

                        // Screen is emptied
                        $("#changingContent").html('');
                        $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                    <div class="col-sm-12">\
                                                        <h2 id="correctResponse" class="text-center alert alert-success">You are Correct !!!!</h2>\
                                                    </div>\
                                                </div>');

                        $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table class="table table-striped table-hover">\
                                                    <tr>\
                                                        <th scope="col">Correct Answers</th>\
                                                        <th scope="col">Wrong Answers</th>\
                                                        <th scope="col">Unswered Questions</th>\
                                                    </tr>\
                                                    <tr>\
                                                        <td>' + correct + '</td>\
                                                        <td>' + incorrect + '</td>\
                                                        <td>' + unAnswered + '</td>\
                                                    </tr>\
                                                </table></div>');

                        $("#finalScoreTable").after('<div class="row">\
                                                        <div class="col-sm-8">\
                                                            <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/3o7abKhOpu0NwenH3O" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/spongebob-cartoon-nickelodeon-thumbs-3o7abKhOpu0NwenH3O">via GIPHY</a></p>\
                                                        </div>\
                                                    </div>');
                        });
                    // ************************************************************************************************************

                    // Incorrect Answer *****************************************************************************************
                    $("#op2,#op3,#op4").on("click", function () {

                        clearInterval(interval);
                        timerClick();
                        incorrect++;

                        // Fucntion for timer = 0
                        function timerClick() {
                            seconds = 5;
                            timer();

                            function timer() {
                                clearInterval(interval);
                                interval = setInterval(secDecrement, 1000);
                                function secDecrement() {
                                    seconds--;
                                    // console.log(seconds);
                                    // console.log(typeof(seconds));

                                    if (seconds === 0) {
                                        timer2();

                                    }
                                };
                            };
                        };
                        // *******************************************************

                        // Screen is emptied
                        $("#changingContent").html('');
                        $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                    <div class="col-sm-12">\
                                                        <h2 id="incorrect response" class="text-center alert alert-warning">Wrong !!!!!!!!!</h2>\
                                                    </div>\
                                                </div>');

                        $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                    <tr>\
                                                        <th scope="col">Correct Answers</th>\
                                                        <th scope="col">Wrong Answers</th>\
                                                        <th scope="col">Unswered Questions</th>\
                                                    </tr>\
                                                    <tr>\
                                                        <td>' + correct + '</td>\
                                                        <td>' + incorrect + '</td>\
                                                        <td>' + unAnswered + '</td>\
                                                    </tr>\
                                                </table></div>');

                        $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                        <div class="col-sm-8">\
                                                            <div style="width:100%;height:0;padding-bottom:53%;position:relative;"><iframe src="https://giphy.com/embed/m8eIbBdkJK7Go" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/joel-mchale-incorrect-m8eIbBdkJK7Go">via GIPHY</a></p>\
                                                        </div>\
                                                    </div>');
                    });
                    // ********************************************************


                    // Time is up screen
                    if (seconds === 0) {
                        clearInterval(interval);
                        timerZero();
                        unAnswered++;


                        // Fucntion for timer = 0
                        function timerZero() {
                            seconds = 5;
                            timer();

                            function timer() {
                                clearInterval(interval);
                                interval = setInterval(secDecrement, 1000);
                                function secDecrement() {
                                    seconds--;
                                    // console.log(seconds);
                                    // console.log(typeof(seconds));

                                    if (seconds === 0) {
                                        timer2();

                                    }
                                };
                            };


                            $("#changingContent").html('');
                            $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                        <div class="col-sm-12">\
                                                            <h2 id="timeZeroText" class="text-center alert alert-danger">Your time is up !!!</h2>\
                                                        </div>\
                                                    </div>');

                            $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                        <tr>\
                                                            <th scope="col">Correct Answers</th>\
                                                            <th scope="col">Wrong Answers</th>\
                                                            <th scope="col">Unswered Questions</th>\
                                                        </tr>\
                                                        <tr>\
                                                            <td>' + correct + '</td>\
                                                            <td>' + incorrect + '</td>\
                                                            <td>' + unAnswered + '</td>\
                                                        </tr>\
                                                    </table></div>');

                            $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                                <div class="col-sm-8">\
                                                                    <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/3iUMl1Fh6HRew" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/mrw-golden-globes-3iUMl1Fh6HRew">via GIPHY</a></p>\
                                                                </div>\
                                                    </div>');



                        };
                        // *******************************************************

                    }


                };


            };

        // Question2
        
        function timer2() {
            // Timer Starts
            var seconds = 30;
            var interval;

            // Screen is emptied
            $("#changingContent").html('');

            clearInterval(interval);
            interval = setInterval(secDecrement, 1000);
            function secDecrement() {
                seconds--;

                // timer on screen ************************************************************************************************
                $("#changingContent").html('<h2 id="timer" class="alert alert-danger display-5 align-top"> Time remaining: ' + seconds + ' seconds. </h2>');
                // *****************************************************


                // Loop for questions 

                $("#changingContent").append('<div id="quesBox" class="row">\
                                            <div class="col-sm-12">\
                                                <h3 id="question" class="text-center alert alert-light"> ' + questions[1][0] + ' </h3>\
                                            </div>\
                                        </div>');

                $("#quesBox").after('<div id="answers" class="row text-center">\
                                    <div class="col-sm-2"></div>\
                                        <div class="col-sm-8 text-center">\
                                            <ul>\
                                                <li><h4 id="op1" class= "answer text-center border border-info rounded-top py-3 mx-auto bg-white text-dark"> ' + questions[1][1] + ' </h4></li>\
                                                <li><h4 id="op2" class= "answer text-center border border-success rounded-right py-3 mx-auto bg-white text-dark"> ' + questions[1][2] + ' </h4></li>\
                                                <li><h4 id="op3" class= "answer text-center border border-warningrounded-left py-3 mx-auto bg-white text-dark"> ' + questions[1][3] + ' </h4></li>\
                                                <li><h4 id="op4" class= "answer text-center border border-primary rounded-bottom py-3 mx-auto bg-white text-dark"> ' + questions[1][4] + ' </h4></li>\
                                            </ul>\
                                        </div>\
                                    <div class="col-sm-2"></div>\
                                </div>');

                // **************************************************************************************************************

                // Correct Answer ************************************************************************************************
                $("#op3").on("click", function () {

                    clearInterval(interval);
                    timerClick();
                    correct++;
                    console.log(correct);

                    // Fucntion for timer = 0
                    function timerClick() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer3();

                                }
                            };
                        };
                    };
                    // *********************************

                    // Screen is emptied
                    $("#changingContent").html('');
                    $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h2 id="timeZeroText" class="text-center alert alert-success">You are Correct !!!!</h2>\
                                                </div>\
                                            </div>');

                    $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                <tr>\
                                                    <th scope="col">Correct Answers</th>\
                                                    <th scope="col">Wrong Answers</th>\
                                                    <th scope="col">Unswered Questions</th>\
                                                </tr>\
                                                <tr>\
                                                    <td>' + correct + '</td>\
                                                    <td>' + incorrect + '</td>\
                                                    <td>' + unAnswered + '</td>\
                                                </tr>\
                                            </table></div>');

                    $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                        <div class="col-sm-6">\
                                                        <div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/l41YleLHixOeCWNe8" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/l41YleLHixOeCWNe8">via GIPHY</a></p>\
                                                        </div>\
                                                </div>');
                });
                // ************************************************************************************************************

                // Incorrect Answer *****************************************************************************************
                $("#op2,#op1,#op4").on("click", function () {

                    clearInterval(interval);
                    timerClick();
                    incorrect++;

                    // Fucntion for timer = 0
                    function timerClick() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer3();

                                }
                            };
                        };
                    };
                    // *******************************************************

                    // Screen is emptied
                    $("#changingContent").html('');
                    $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h2 id="timeZeroText" class="text-center alert alert-warning">Wrong !!!!!!!!!</h2>\
                                                </div>\
                                            </div>');

                    $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                <tr>\
                                                    <th scope="col">Correct Answers</th>\
                                                    <th scope="col">Wrong Answers</th>\
                                                    <th scope="col">Unswered Questions</th>\
                                                </tr>\
                                                <tr>\
                                                    <td>' + correct + '</td>\
                                                    <td>' + incorrect + '</td>\
                                                    <td>' + unAnswered + '</td>\
                                                </tr>\
                                            </table></div>');

                    $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                    <div class="col-sm-6">\
                                                    <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/49zC0Bm1kbu36" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/thread-discussion-august-49zC0Bm1kbu36">via GIPHY</a></p>\
                                                    </div>\
                                                </div>');
                });
                // ********************************************************


                // Time is up screen
                if (seconds === 0) {
                    clearInterval(interval);
                    timerZero();
                    unAnswered++;


                    // Fucntion for timer = 0
                    function timerZero() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer3();

                                }
                            };
                        };


                        $("#changingContent").html('');
                        $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                    <div class="col-sm-12">\
                                                        <h2 id="timeZeroText" class="text-center alert alert-danger">Your time is up !!!</h2>\
                                                    </div>\
                                                </div>');

                        $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                    <tr>\
                                                        <th scope="col">Correct Answers</th>\
                                                        <th scope="col">Wrong Answers</th>\
                                                        <th scope="col">Unswered Questions</th>\
                                                    </tr>\
                                                    <tr>\
                                                        <td>' + correct + '</td>\
                                                        <td>' + incorrect + '</td>\
                                                        <td>' + unAnswered + '</td>\
                                                    </tr>\
                                                </table></div>');

                        $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                        <div class="col-sm-6">\
                                                        <div style="width:100%;height:0;padding-bottom:70%;position:relative;"><iframe src="https://giphy.com/embed/xUA7aTciVnJtJHGTaU" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/mackenziebourg-mackenzie-bourg-xUA7aTciVnJtJHGTaU">via GIPHY</a></p>\
                                                        </div>\
                                                    </div>');
                    };
                    // *******************************************************

                }


            };


        };

        // Question3
        
        function timer3() {
            // Timer Starts
            var seconds = 30;
            var interval;

            // Screen is emptied
            $("#changingContent").html('');

            clearInterval(interval);
            interval = setInterval(secDecrement, 1000);
            function secDecrement() {
                seconds--;

                // timer on screen ************************************************************************************************
                $("#changingContent").html('<h2 id="timer" class="alert alert-danger display-5 align-top"> Time remaining: ' + seconds + ' seconds. </h2>');
                // *****************************************************


                // Loop for questions 

                $("#changingContent").append('<div id="quesBox" class="row">\
                                            <div class="col-sm-12">\
                                                <h3 id="question" class="text-center alert alert-light"> ' + questions[2][0] + ' </h3>\
                                            </div>\
                                        </div>');

                $("#quesBox").after('<div id="answers" class="row text-center">\
                                    <div class="col-sm-2"></div>\
                                        <div class="col-sm-8 text-center">\
                                            <ul>\
                                                <li><h4 id="op1" class= "answer text-center border border-info rounded-top py-3 mx-auto bg-white text-dark"> ' + questions[2][1] + ' </h4></li>\
                                                <li><h4 id="op2" class= "answer text-center border border-success rounded-right py-3 mx-auto bg-white text-dark"> ' + questions[2][2] + ' </h4></li>\
                                                <li><h4 id="op3" class= "answer text-center border border-warningrounded-left py-3 mx-auto bg-white text-dark"> ' + questions[2][3] + ' </h4></li>\
                                                <li><h4 id="op4" class= "answer text-center border border-primary rounded-bottom py-3 mx-auto bg-white text-dark"> ' + questions[2][4] + ' </h4></li>\
                                            </ul>\
                                        </div>\
                                    <div class="col-sm-2"></div>\
                                </div>');

                // **************************************************************************************************************

                // Correct Answer ************************************************************************************************
                $("#op1").on("click", function () {

                    clearInterval(interval);
                    timerClick();
                    correct++;
                    console.log(correct);

                    // Fucntion for timer = 0
                    function timerClick() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer4();

                                }
                            };
                        };
                    };
                    // *********************************

                    // Screen is emptied
                    $("#changingContent").html('');
                    $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h2 id="timeZeroText" class="text-center alert alert-success">You are Correct !!!!</h2>\
                                                </div>\
                                            </div>');

                    $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                <tr>\
                                                    <th scope="col">Correct Answers</th>\
                                                    <th scope="col">Wrong Answers</th>\
                                                    <th scope="col">Unswered Questions</th>\
                                                </tr>\
                                                <tr>\
                                                    <td>' + correct + '</td>\
                                                    <td>' + incorrect + '</td>\
                                                    <td>' + unAnswered + '</td>\
                                                </tr>\
                                            </table></div>');

                    $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                    <div class="col-sm-6">\
                                                    <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/3o7TKUlP4zQwRkcUN2" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/playboyfragrances-3o7TKUlP4zQwRkcUN2">via GIPHY</a></p>\
                                                    </div>\
                                                </div>');
                });
                // ************************************************************************************************************

                // Incorrect Answer *****************************************************************************************
                $("#op2,#op3,#op4").on("click", function () {

                    clearInterval(interval);
                    timerClick();
                    incorrect++;

                    // Fucntion for timer = 0
                    function timerClick() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer4();

                                }
                            };
                        };
                    };
                    // *******************************************************

                    // Screen is emptied
                    $("#changingContent").html('');
                    $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h2 id="timeZeroText" class="text-center alert alert-warning">Wrong !!!!!!!!!</h2>\
                                                </div>\
                                            </div>');

                    $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                <tr>\
                                                    <th scope="col">Correct Answers</th>\
                                                    <th scope="col">Wrong Answers</th>\
                                                    <th scope="col">Unswered Questions</th>\
                                                </tr>\
                                                <tr>\
                                                    <td>' + correct + '</td>\
                                                    <td>' + incorrect + '</td>\
                                                    <td>' + unAnswered + '</td>\
                                                </tr>\
                                            </table></div>');

                    $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                    <div class="col-sm-6">\
                                                        <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/l0HlPAqWT2etJ2Xeg" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/panicatthedisco-panic-at-the-disco-brendon-urie-l0HlPAqWT2etJ2Xeg">via GIPHY</a></p>\
                                                    </div>\
                                                </div>');
                });
                // ********************************************************


                // Time is up screen
                if (seconds === 0) {
                    clearInterval(interval);
                    timerZero();
                    unAnswered++;


                    // Fucntion for timer = 0
                    function timerZero() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer4();

                                }
                            };
                        };


                        $("#changingContent").html('');
                        $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                    <div class="col-sm-12">\
                                                        <h2 id="timeZeroText" class="text-center alert alert-danger">Your time is up !!!</h2>\
                                                    </div>\
                                                </div>');

                        $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                    <tr>\
                                                        <th scope="col">Correct Answers</th>\
                                                        <th scope="col">Wrong Answers</th>\
                                                        <th scope="col">Unswered Questions</th>\
                                                    </tr>\
                                                    <tr>\
                                                        <td>' + correct + '</td>\
                                                        <td>' + incorrect + '</td>\
                                                        <td>' + unAnswered + '</td>\
                                                    </tr>\
                                                </table></div>');

                        $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                        <div class="col-sm-6">\
                                                            <div style="width:100%;height:0;padding-bottom:138%;position:relative;"><iframe src="https://giphy.com/embed/NhkMeVafqPkPK" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/NhkMeVafqPkPK">via GIPHY</a></p>\
                                                        </div>\
                                                    </div>');
                    };
                    // *******************************************************

                }


            };


        };

        // Question4
        
        function timer4() {
            // Timer Starts
            var seconds = 30;
            var interval;

            // Screen is emptied
            $("#changingContent").html('');

            clearInterval(interval);
            interval = setInterval(secDecrement, 1000);
            function secDecrement() {
                seconds--;

                // timer on screen ************************************************************************************************
                $("#changingContent").html('<h2 id="timer" class="alert alert-danger display-5 align-top"> Time remaining: ' + seconds + ' seconds. </h2>');
                // *****************************************************


                // Loop for questions 

                $("#changingContent").append('<div id="quesBox" class="row">\
                                            <div class="col-sm-12">\
                                                <h3 id="question" class="text-center alert alert-light"> ' + questions[3][0] + ' </h3>\
                                            </div>\
                                        </div>');

                $("#quesBox").after('<div id="answers" class="row text-center">\
                                    <div class="col-sm-2"></div>\
                                        <div class="col-sm-8 text-center">\
                                            <ul>\
                                                <li><h4 id="op1" class= "answer text-center border border-info rounded-top py-3 mx-auto bg-white text-dark"> ' + questions[3][1] + ' </h4></li>\
                                                <li><h4 id="op2" class= "answer text-center border border-success rounded-right py-3 mx-auto bg-white text-dark"> ' + questions[3][2] + ' </h4></li>\
                                                <li><h4 id="op3" class= "answer text-center border border-warningrounded-left py-3 mx-auto bg-white text-dark"> ' + questions[3][3] + ' </h4></li>\
                                                <li><h4 id="op4" class= "answer text-center border border-primary rounded-bottom py-3 mx-auto bg-white text-dark"> ' + questions[3][4] + ' </h4></li>\
                                            </ul>\
                                        </div>\
                                    <div class="col-sm-2"></div>\
                                </div>');

                // **************************************************************************************************************

                // Correct Answer ************************************************************************************************
                $("#op4").on("click", function () {

                    clearInterval(interval);
                    timerClick();
                    correct++;
                    console.log(correct);

                    // Fucntion for timer = 0
                    function timerClick() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer5();

                                }
                            };
                        };
                    };
                    // *********************************

                    // Screen is emptied
                    $("#changingContent").html('');
                    $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h2 id="timeZeroText" class="text-center alert alert-success">You are Correct !!!!</h2>\
                                                </div>\
                                            </div>');

                    $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                <tr>\
                                                    <th scope="col">Correct Answers</th>\
                                                    <th scope="col">Wrong Answers</th>\
                                                    <th scope="col">Unswered Questions</th>\
                                                </tr>\
                                                <tr>\
                                                    <td>' + correct + '</td>\
                                                    <td>' + incorrect + '</td>\
                                                    <td>' + unAnswered + '</td>\
                                                </tr>\
                                            </table></div>');

                    $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                    <div class="col-sm-6">\
                                                    <div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/10FtKJcFdmSgqA" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/random-page-pictures-10FtKJcFdmSgqA">via GIPHY</a></p>\
                                                    </div>\
                                                </div>');
                });
                // ************************************************************************************************************

                // Incorrect Answer *****************************************************************************************
                $("#op2,#op3,#op1").on("click", function () {

                    clearInterval(interval);
                    timerClick();
                    incorrect++;

                    // Fucntion for timer = 0
                    function timerClick() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer5();

                                }
                            };
                        };
                    };
                    // *******************************************************

                    // Screen is emptied
                    $("#changingContent").html('');
                    $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h2 id="timeZeroText" class="text-center alert alert-warning">Wrong !!!!!!!!!</h2>\
                                                </div>\
                                            </div>');

                    $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                <tr>\
                                                    <th scope="col">Correct Answers</th>\
                                                    <th scope="col">Wrong Answers</th>\
                                                    <th scope="col">Unswered Questions</th>\
                                                </tr>\
                                                <tr>\
                                                    <td>' + correct + '</td>\
                                                    <td>' + incorrect + '</td>\
                                                    <td>' + unAnswered + '</td>\
                                                </tr>\
                                            </table></div>');

                    $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                    <div class="col-sm-6">\
                                                    <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/l2QDRptflGKMbnamc" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/Bounce-TV-comedy-l2QDRptflGKMbnamc">via GIPHY</a></p>\
                                                    </div>\
                                                </div>');
                });
                // ********************************************************


                // Time is up screen
                if (seconds === 0) {
                    clearInterval(interval);
                    timerZero();
                    unAnswered++;


                    // Fucntion for timer = 0
                    function timerZero() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer5();

                                }
                            };
                        };


                        $("#changingContent").html('');
                        $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                    <div class="col-sm-12">\
                                                        <h2 id="timeZeroText" class="text-center alert alert-danger">Your time is up !!!</h2>\
                                                    </div>\
                                                </div>');

                        $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                    <tr>\
                                                        <th scope="col">Correct Answers</th>\
                                                        <th scope="col">Wrong Answers</th>\
                                                        <th scope="col">Unswered Questions</th>\
                                                    </tr>\
                                                    <tr>\
                                                        <td>' + correct + '</td>\
                                                        <td>' + incorrect + '</td>\
                                                        <td>' + unAnswered + '</td>\
                                                    </tr>\
                                                </table></div>');

                        $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                        <div class="col-sm-6">\
                                                        <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/4MWlbZOdknZUTDeHLO" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/love-happy-sad-4MWlbZOdknZUTDeHLO">via GIPHY</a></p>\
                                                        </div>\
                                                    </div>');
                    };
                    // *******************************************************

                }


            };


        };

        // Question5
        
        function timer5() {
            // Timer Starts
            var seconds = 30;
            var interval;

            // Screen is emptied
            $("#changingContent").html('');

            clearInterval(interval);
            interval = setInterval(secDecrement, 1000);
            function secDecrement() {
                seconds--;

                // timer on screen ************************************************************************************************
                $("#changingContent").html('<h2 id="timer" class="alert alert-danger display-5 align-top"> Time remaining: ' + seconds + ' seconds. </h2>');
                // *****************************************************


                // Loop for questions 

                $("#changingContent").append('<div id="quesBox" class="row">\
                                            <div class="col-sm-12">\
                                                <h3 id="question" class="text-center alert alert-light"> ' + questions[4][0] + ' </h3>\
                                            </div>\
                                        </div>');

                $("#quesBox").after('<div id="answers" class="row text-center">\
                                    <div class="col-sm-2"></div>\
                                        <div class="col-sm-8 text-center">\
                                            <ul>\
                                                <li><h4 id="op1" class= "answer text-center border border-info rounded-top py-3 mx-auto bg-white text-dark"> ' + questions[4][1] + ' </h4></li>\
                                                <li><h4 id="op2" class= "answer text-center border border-success rounded-right py-3 mx-auto bg-white text-dark"> ' + questions[4][2] + ' </h4></li>\
                                                <li><h4 id="op3" class= "answer text-center border border-warningrounded-left py-3 mx-auto bg-white text-dark"> ' + questions[4][3] + ' </h4></li>\
                                                <li><h4 id="op4" class= "answer text-center border border-primary rounded-bottom py-3 mx-auto bg-white text-dark"> ' + questions[4][4] + ' </h4></li>\
                                            </ul>\
                                        </div>\
                                    <div class="col-sm-2"></div>\
                                </div>');

                // **************************************************************************************************************

                // Correct Answer ************************************************************************************************
                $("#op1").on("click", function () {

                    clearInterval(interval);
                    timerClick();
                    correct++;
                    console.log(correct);

                    // Fucntion for timer = 0
                    function timerClick() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer6();

                                }
                            };
                        };
                    };
                    // *********************************

                    // Screen is emptied
                    $("#changingContent").html('');
                    $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h2 id="timeZeroText" class="text-center alert alert-success">You are Correct !!!!</h2>\
                                                </div>\
                                            </div>');

                    $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                <tr>\
                                                    <th scope="col">Correct Answers</th>\
                                                    <th scope="col">Wrong Answers</th>\
                                                    <th scope="col">Unswered Questions</th>\
                                                </tr>\
                                                <tr>\
                                                    <td>' + correct + '</td>\
                                                    <td>' + incorrect + '</td>\
                                                    <td>' + unAnswered + '</td>\
                                                </tr>\
                                            </table></div>');

                    $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                    <div class="col-sm-6">\
                                                    <div style="width:100%;height:0;padding-bottom:50%;position:relative;"><iframe src="https://giphy.com/embed/xT9DPGqnUpBoq1kzUQ" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/conormcgregor-ufc-conor-mcgregor-xT9DPGqnUpBoq1kzUQ">via GIPHY</a></p>\
                                                    </div>\
                                                </div>');
                });
                // ************************************************************************************************************

                // Incorrect Answer *****************************************************************************************
                $("#op2,#op3,#op4").on("click", function () {

                    clearInterval(interval);
                    timerClick();
                    incorrect++;

                    // Fucntion for timer = 0
                    function timerClick() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer6();

                                }
                            };
                        };
                    };
                    // *******************************************************

                    // Screen is emptied
                    $("#changingContent").html('');
                    $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h2 id="timeZeroText" class="text-center alert alert-warning">Wrong !!!!!!!!!</h2>\
                                                </div>\
                                            </div>');

                    $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                <tr>\
                                                    <th scope="col">Correct Answers</th>\
                                                    <th scope="col">Wrong Answers</th>\
                                                    <th scope="col">Unswered Questions</th>\
                                                </tr>\
                                                <tr>\
                                                    <td>' + correct + '</td>\
                                                    <td>' + incorrect + '</td>\
                                                    <td>' + unAnswered + '</td>\
                                                </tr>\
                                            </table></div>');

                    $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                    <div class="col-sm-6">\
                                                    <div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/l0OXWXUHdp4K9nitq" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/converse-l0OXWXUHdp4K9nitq">via GIPHY</a></p>\
                                                    </div>\
                                                </div>');
                });
                // ********************************************************


                // Time is up screen
                if (seconds === 0) {
                    clearInterval(interval);
                    timerZero();
                    unAnswered++;


                    // Fucntion for timer = 0
                    function timerZero() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer6();

                                }
                            };
                        };


                        $("#changingContent").html('');
                        $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                    <div class="col-sm-12">\
                                                        <h2 id="timeZeroText" class="text-center alert alert-danger">Your time is up !!!</h2>\
                                                    </div>\
                                                </div>');

                        $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                    <tr>\
                                                        <th scope="col">Correct Answers</th>\
                                                        <th scope="col">Wrong Answers</th>\
                                                        <th scope="col">Unswered Questions</th>\
                                                    </tr>\
                                                    <tr>\
                                                        <td>' + correct + '</td>\
                                                        <td>' + incorrect + '</td>\
                                                        <td>' + unAnswered + '</td>\
                                                    </tr>\
                                                </table></div>');

                        $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                        <div class="col-sm-6">\
                                                            <div style="width:100%;height:0;padding-bottom:50%;position:relative;"><iframe src="https://giphy.com/embed/6uGhT1O4sxpi8" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/awkward-pulp-fiction-john-travolta-6uGhT1O4sxpi8">via GIPHY</a></p>\
                                                        </div>\
                                                    </div>');
                    };
                    // *******************************************************

                }


            };


        };

        // Question6
        function timer6() {
            // Timer Starts
            var seconds = 30;
            var interval;

            // Screen is emptied
            $("#changingContent").html('');

            clearInterval(interval);
            interval = setInterval(secDecrement, 1000);
            function secDecrement() {
                seconds--;

                // timer on screen ************************************************************************************************
                $("#changingContent").html('<h2 id="timer" class="alert alert-danger display-5 align-top"> Time remaining: ' + seconds + ' seconds. </h2>');
                // *****************************************************


                // Loop for questions 

                $("#changingContent").append('<div id="quesBox" class="row">\
                                            <div class="col-sm-12">\
                                                <h3 id="question" class="text-center alert alert-light"> ' + questions[5][0] + ' </h3>\
                                            </div>\
                                        </div>');

                $("#quesBox").after('<div id="answers" class="row text-center">\
                                    <div class="col-sm-2"></div>\
                                        <div class="col-sm-8 text-center">\
                                            <ul>\
                                                <li><h4 id="op1" class= "answer text-center border border-info rounded-top py-3 mx-auto bg-white text-dark"> ' + questions[5][1] + ' </h4></li>\
                                                <li><h4 id="op2" class= "answer text-center border border-success rounded-right py-3 mx-auto bg-white text-dark"> ' + questions[5][2] + ' </h4></li>\
                                                <li><h4 id="op3" class= "answer text-center border border-warningrounded-left py-3 mx-auto bg-white text-dark"> ' + questions[5][3] + ' </h4></li>\
                                                <li><h4 id="op4" class= "answer text-center border border-primary rounded-bottom py-3 mx-auto bg-white text-dark"> ' + questions[5][4] + ' </h4></li>\
                                            </ul>\
                                        </div>\
                                    <div class="col-sm-2"></div>\
                                </div>');

                // **************************************************************************************************************

                // Correct Answer ************************************************************************************************
                $("#op2").on("click", function () {

                    clearInterval(interval);
                    timerClick();
                    correct++;
                    console.log(correct);

                    // Fucntion for timer = 0
                    function timerClick() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer7();

                                }
                            };
                        };
                    };
                    // *********************************

                    // Screen is emptied
                    $("#changingContent").html('');
                    $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h2 id="timeZeroText" class="text-center alert alert-success">You are Correct !!!!</h2>\
                                                </div>\
                                            </div>');

                    $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                <tr>\
                                                    <th scope="col">Correct Answers</th>\
                                                    <th scope="col">Wrong Answers</th>\
                                                    <th scope="col">Unswered Questions</th>\
                                                </tr>\
                                                <tr>\
                                                    <td>' + correct + '</td>\
                                                    <td>' + incorrect + '</td>\
                                                    <td>' + unAnswered + '</td>\
                                                </tr>\
                                            </table></div>');

                    $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                    <div class="col-sm-6">\
                                                        <div style="width:100%;height:0;padding-bottom:68%;position:relative;"><iframe src="https://giphy.com/embed/UR2r2iWXjq65O" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/spike-notting-hill-rhys-ifans-UR2r2iWXjq65O">via GIPHY</a></p>\
                                                    </div>\
                                                </div>');
                });
                // ************************************************************************************************************

                // Incorrect Answer *****************************************************************************************
                $("#op1,#op3,#op4").on("click", function () {

                    clearInterval(interval);
                    timerClick();
                    incorrect++;

                    // Fucntion for timer = 0
                    function timerClick() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer7();

                                }
                            };
                        };
                    };
                    // *******************************************************

                    // Screen is emptied
                    $("#changingContent").html('');
                    $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h2 id="timeZeroText" class="text-center alert alert-warning">Wrong !!!!!!!!!</h2>\
                                                </div>\
                                            </div>');

                                            $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                            <tr>\
                                                <th scope="col">Correct Answers</th>\
                                                <th scope="col">Wrong Answers</th>\
                                                <th scope="col">Unswered Questions</th>\
                                            </tr>\
                                            <tr>\
                                                <td>' + correct + '</td>\
                                                <td>' + incorrect + '</td>\
                                                <td>' + unAnswered + '</td>\
                                            </tr>\
                                        </table></div>');

                    $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                    <div class="col-sm-6">\
                                                        <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/A3t48v7vgzk1G" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/lifetimetelly-no-hell-not-good-A3t48v7vgzk1G">via GIPHY</a></p>\
                                                    </div>\
                                                </div>');
                });
                // ********************************************************


                // Time is up screen
                if (seconds === 0) {
                    clearInterval(interval);
                    timerZero();
                    unAnswered++;


                    // Fucntion for timer = 0
                    function timerZero() {
                        seconds = 5;
                        timer();

                        function timer() {
                            clearInterval(interval);
                            interval = setInterval(secDecrement, 1000);
                            function secDecrement() {
                                seconds--;
                                // console.log(seconds);
                                // console.log(typeof(seconds));

                                if (seconds === 0) {
                                    timer7();

                                }
                            };
                        };


                        $("#changingContent").html('');
                        $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                    <div class="col-sm-12">\
                                                        <h2 id="timeZeroText" class="text-center alert alert-danger">Your time is up !!!</h2>\
                                                    </div>\
                                                </div>');

                        $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                    <tr>\
                                                        <th scope="col">Correct Answers</th>\
                                                        <th scope="col">Wrong Answers</th>\
                                                        <th scope="col">Unswered Questions</th>\
                                                    </tr>\
                                                    <tr>\
                                                        <td>' + correct + '</td>\
                                                        <td>' + incorrect + '</td>\
                                                        <td>' + unAnswered + '</td>\
                                                    </tr>\
                                                </table></div>');

                        $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                        <div class="col-sm-6">\
                                                            <div style="width:100%;height:0;padding-bottom:85%;position:relative;"><iframe src="https://giphy.com/embed/eBCnpuRGBhQGY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/mondays-eBCnpuRGBhQGY">via GIPHY</a></p>\
                                                        </div>\
                                                    </div>');
                    };
                    // *******************************************************

                }


            };


        };

        // Question7
        function timer7() {
            // Timer Starts
            var seconds = 30;
            var interval;

            // Screen is emptied
            $("#changingContent").html('');

            clearInterval(interval);
            interval = setInterval(secDecrement, 1000);
            function secDecrement() {
                seconds--;

                // timer on screen ************************************************************************************************
                $("#changingContent").html('<h2 id="timer" class="alert alert-danger display-5 align-top"> Time remaining: ' + seconds + ' seconds. </h2>');
                // *****************************************************


                // Loop for questions 

                $("#changingContent").append('<div id="quesBox" class="row">\
                                            <div class="col-sm-12">\
                                                <h3 id="question" class="text-center alert alert-light"> ' + questions[6][0] + ' </h3>\
                                            </div>\
                                        </div>');

                $("#quesBox").after('<div id="answers" class="row text-center">\
                                    <div class="col-sm-2"></div>\
                                        <div class="col-sm-8 text-center">\
                                            <ul>\
                                                <li><h4 id="op1" class= "answer text-center border border-info rounded-top py-3 mx-auto bg-white text-dark"> ' + questions[6][1] + ' </h4></li>\
                                                <li><h4 id="op2" class= "answer text-center border border-success rounded-right py-3 mx-auto bg-white text-dark"> ' + questions[6][2] + ' </h4></li>\
                                                <li><h4 id="op3" class= "answer text-center border border-warningrounded-left py-3 mx-auto bg-white text-dark"> ' + questions[5][6] + ' </h4></li>\
                                                <li><h4 id="op4" class= "answer text-center border border-primary rounded-bottom py-3 mx-auto bg-white text-dark"> ' + questions[6][4] + ' </h4></li>\
                                            </ul>\
                                        </div>\
                                    <div class="col-sm-2"></div>\
                                </div>');

                // **************************************************************************************************************

                // Correct Answer ************************************************************************************************
                $("#op2").on("click", function () {
                    
                    clearInterval(interval);
                    correct++;
                    console.log(correct);

                    $("#changingContent").html('');
                    $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h2 id="timeZeroText" class="text-center alert alert-success">You are Correct !!!!</h2>\
                                                </div>\
                                            </div>');

                    $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                <tr>\
                                                    <th scope="col">Correct Answers</th>\
                                                    <th scope="col">Wrong Answers</th>\
                                                    <th scope="col">Unswered Questions</th>\
                                                </tr>\
                                                <tr>\
                                                    <td>' + correct + '</td>\
                                                    <td>' + incorrect + '</td>\
                                                    <td>' + unAnswered + '</td>\
                                                </tr>\
                                            </table></div>');

                    $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                    <div class="col-sm-6">\
                                                        <div style="width:100%;height:0;padding-bottom:38%;position:relative;"><iframe src="https://giphy.com/embed/UR2r2iWXjq65O" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/spike-notting-hill-rhys-ifans-UR2r2iWXjq65O">via GIPHY</a></p>\
                                                    </div>\
                                                </div>');

                    $("#timeZeroGIFF").after('<button id="resetButton" class="btn btn-primary">Reset Game</button>');

                    $("#resetButton").on("click", function () {
                            gameStart();
                    });
                });
                // ************************************************************************************************************

                // Incorrect Answer *****************************************************************************************
                $("#op1,#op3,#op4").on("click", function () {

                    clearInterval(interval);
                    incorrect++;

                    // Screen is emptied
                    $("#changingContent").html('');
                    $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h2 id="timeZeroText" class="text-center alert alert-warning">Wrong !!!!!!!!!</h2>\
                                                </div>\
                                            </div>');

                                            $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                            <tr>\
                                                <th scope="col">Correct Answers</th>\
                                                <th scope="col">Wrong Answers</th>\
                                                <th scope="col">Unswered Questions</th>\
                                            </tr>\
                                            <tr>\
                                                <td>' + correct + '</td>\
                                                <td>' + incorrect + '</td>\
                                                <td>' + unAnswered + '</td>\
                                            </tr>\
                                        </table></div>');

                    $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                    <div class="col-sm-6">\
                                                        <div style="width:100%;height:0;padding-bottom:28%;position:relative;"><iframe src="https://giphy.com/embed/A3t48v7vgzk1G" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/lifetimetelly-no-hell-not-good-A3t48v7vgzk1G">via GIPHY</a></p>\
                                                    </div>\
                                                </div>');

                    $("#timeZeroGIFF").after('<button id="resetButton" class="btn btn-primary">Reset Game</button>');

                    $("#resetButton").on("click", function () {
                            gameStart();
                    });
                });
                // ********************************************************


                // Time is up screen
                if (seconds === 0) {
                    clearInterval(interval);
                    
                    unAnswered++;

                    $("#changingContent").html('');
                    $("#changingContent").append('<div id="timeZeroBox" class="row">\
                                                <div class="col-sm-12">\
                                                    <h2 id="timeZeroText" class="text-center alert alert-danger">Your time is up !!!</h2>\
                                                </div>\
                                            </div>');

                    $("#timeZeroBox").after('<div id="finalScoreTable" class="row"><table  class="table table-striped table-hover">\
                                                <tr>\
                                                    <th scope="col">Correct Answers</th>\
                                                    <th scope="col">Wrong Answers</th>\
                                                    <th scope="col">Unswered Questions</th>\
                                                </tr>\
                                                <tr>\
                                                    <td>' + correct + '</td>\
                                                    <td>' + incorrect + '</td>\
                                                    <td>' + unAnswered + '</td>\
                                                </tr>\
                                            </table></div>');

                    $("#finalScoreTable").after('<div id="timeZeroGIFF" class="row">\
                                                    <div class="col-sm-6">\
                                                        <div style="width:100%;height:0;padding-bottom:44%;position:relative;"><iframe src="https://giphy.com/embed/eBCnpuRGBhQGY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/mondays-eBCnpuRGBhQGY">via GIPHY</a></p>\
                                                    </div>\
                                                </div>');

                    $("#timeZeroGIFF").after('<button id="resetButton" class="btn btn-primary">Reset Game</button>');

                    $("#resetButton").on("click", function () {
                            gameStart();
                    });
                };
                    // *******************************************************
            };


        };

        // Finish *****************************************
        


    };


});