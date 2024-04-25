const word_list = ["rover", "loser", "mover", "eagle", "evens", "extra"]

const chosen_word = word_list[getRandomNum(word_list.length)]

function getRandomNum(max){
    return Math.floor(Math.random()*max)
   }

document.getElementById('originalButton').addEventListener('click', function() {
  // Hide the original button
  this.style.display = 'none';
  // Show alphabet buttons
  var alphabetContainer = document.getElementById('alphabet-container');
  alphabetContainer.style.display='block'

  

  // Create alphabet buttons dynamically
  for (var i = 65; i <= 90; i++) {
    console.log("hello")
    var letter = String.fromCharCode(i);
    var button = document.createElement('button');
    button.textContent = letter;
    button.className = 'letterbtn';
    alphabetContainer.appendChild(button);
    button.setAttribute("onclick", "checkLetter2(this.textContent)");
  }
  // Show reset button
  document.getElementById('resetButton').style.display = 'block';
});

document.getElementById('resetButton').addEventListener('click', function() {
  // Show the original button
  document.getElementById('originalButton').style.display = 'block';

  // Hide alphabet buttons
  var alphabetContainer = document.getElementById('alphabet-conatiner');
  alphabetContainer.style.display = 'none';

  alphabetContainer.innerHTML = '';


  // Hide reset button
  this.style.display = 'none';
});



   
function checkLetter2(letter){
    console.log(chosen_word)
    var flag = false
    var gue = document.getElementById("oppword").textContent
    let chosen = chosen_word.toUpperCase()
    console.log(letter)
    for(let i =0; i< chosen_word.length;i++){
        if(letter == chosen[i]){
            flag = true
            //flash('Good Guess!', category='success')
            update2(i,letter)
        }
    }

    for(let i = 0; i<gue.length;i++){
        if(letter == gue[i]){
            //flash('You Already Guessing This :/', category='warning')
            alert("You already guessed this letter")
        }
    }

    if (flag == false) {
        //flash('WRONG', category='danger')
        alert("Your letter is not in the word try again")
        //changeimage()
    }
}
function update2(pos, let){
    let banana = document.getElementById("oppword");
    if(pos==0){
        var ban2 = banana.textContent.substring(0,pos) + let + banana.textContent.substring(pos+1);
    }
    else if(pos==1){
        var ban2 = banana.textContent.substring(0,pos+1) + let + banana.textContent.substring(pos+2);
    }
    else if(pos==2){
        var ban2 = banana.textContent.substring(0,pos+3) + let + banana.textContent.substring(pos+4);
    }
    else if(pos==3){
        var ban2 = banana.textContent.substring(0,pos+5) + let + banana.textContent.substring(pos+6);
    }
    else if(pos==4){
        var ban2 = banana.textContent.substring(0,pos+7) + let + banana.textContent.substring(pos+8);
    }

    banana.innerHTML=ban2;

    if(ban2 == chosen_word){
        alert("You Win")
    }
}




