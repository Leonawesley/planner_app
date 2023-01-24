//To display the current date in the header
let currentDate = moment().format("dddd , MMMM Do");
$("#currentDay").text(currentDate);


//

$(function(){
    //storing the current hour
    const currentHour =  moment().format("H");
    let timeTense = "";
    let loopTime;

    //For loop for generating the timeslot 
    for (let i = 9; i < 18; i++) {
        loopTime = moment(i,"H").format("ha");
              
        //For finding the present,past, future timeline
        if(i == currentHour){
            timeTense = "present";
        }
        else if(i < currentHour){
            console.log("past");
            timeTense = "past";
        }
        else{
            timeTense = "future";
        }

        //Based on past, present or future the corresponding classes are added to the div tag
       if(timeTense === "present"){
            let timeStamp = `<div class="row">
                            <div class="col-2 hour">${loopTime}</div>
                            <textarea class="col-8 textArea present" data-time="${loopTime}" data-tense="${timeTense}"></textarea>
                            <button class="col-2 saveBtn" data-time="${loopTime}"><i class="fas fa-save"></i></button>
                            </div>`;
            $(".container").append(timeStamp);
       }
       else if(timeTense === "past"){
            let timeStamp = `<div class="row">
                            <div class="col-2 hour">${loopTime}</div>
                            <textarea class="col-8 textArea past" data-time="${loopTime}" data-tense="${timeTense}" ></textarea>
                            <button class="col-2 saveBtn" data-time="${loopTime}"><i class="fas fa-save"></i></button>
                            </div>`;
            $(".container").append(timeStamp);
       }
       else{
            let timeStamp = `<div class="row">
                            <div class="col-2 hour">${loopTime}</div>
                            <textarea class="col-8 textArea future" data-time="${loopTime}" data-tense="${timeTense}" ></textarea>
                            <button class="col-2 saveBtn" data-time="${loopTime}"><i class="fas fa-save"></i></button>
                            </div>`;
            $(".container").append(timeStamp);
       }
    }
});
    
