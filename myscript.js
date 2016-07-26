$(document).ready(function() {

    var quest = {
        quest: "How was the first president in usa?",
        options: ["George washington", "Bill Climton", "Obama", "George Bush"],
        correct: 0,
        points: 4,
    }

    $(".question").html(quest.quest);
    for (var i = 0; i < quest.options.length; i++) {
        $(".answer").append('<input type="radio" value="' + i + '" name="btnselect"/>' + quest.options[i] + '<br>')

    }
    //get the imput value
    $('.answer').val()


    $("button").click(function() {
        inputvalue = $("input:checked").val()
        console.log(inputvalue);
        if (inputvalue == undefined) {
            alert("Select an option");
        } else {
            if (quest.correct == inputvalue) {
                console.log("the answer is correct");
                $(".points").html(quest.points)
            } else {
                console.log("the answer is incorret")
            }

        }

    })


    //$("input:radio[".answer"]:checked" ).val();


    //$(".points").html()

    //$(".score").html()

});
