const word_list = ["rover", "loser", "mover", "eagle", "evens", "extra"]

const chosen_word = word_list[getRandomNum(word_list.length)]

function getRandomNum(max){
    return Math.floor(Math.random()*max)
   }


function checkLetter2(letter){
    console.log("I am here")
    var flag = false
    var gue = document.getElementById("oppword").textContent
    var ching = document.getElementById(letter)
    ching.setAttribute("class", "btn btn-secondary letterbtnchosen")

    for(let i =0; i< word.length;i++){
        if(letter == chosen_word[i]){
            flag = true
            update2(i,letter)
        }
    }

    for(let i = 0; i<gue.length;i++){
        if(letter == gue[i]){
            alert("You already guessed this letter")
        }
    }

    if (flag == false) {
        alert("Your letter is not in the word try again")
        //changeimage()
    }
function update2(pos, let){
    let banana = document.getElementById("oppword");
    var ban2 = banana.textContent.substring(0,pos+1) + let + banana.textContent.substring(pos+2);
    banana.innerHTML=ban2;

    if(ban2 == word){
        alert("You Win")
    }
}
    
    
}
