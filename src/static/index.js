const words = ["rover", "loser", "mover", "eagle", "evens", "extra"]

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","x","z"]

const word = words[getRandomNum(words.length)]


function clearLogin(){
    var x = document.querySelector(".container1");
    var y = document.querySelector(".container2");

    y.innerHTML = "";
    x.innerHTML = "";
}

function clearLogin2(){
    var x = document.querySelector(".container1after");
    var y = document.querySelector(".container2");
    var z = document.querySelector(".container3");

    y.innerHTML = "";
    x.innerHTML = "";
    z.innerHTML = "";
}


function startGame(){

    let name = document.forms["myForm"]["fname"].value;

    let worda = document.forms["myForm"]["fword"].value;

    clearLogin();
    
    var con = document.querySelector(".container1")

    con.setAttribute("class", "container1after")

    var con2 = document.querySelector(".container2")

    var con3 = document.querySelector(".container3")

    const img = document.createElement("img")
    const textbox = document.createElement("p")
    const tag = document.createElement("h3")
    let guessie = document.createElement("h4")
    // const but = document.createElement("button")
    // const humaninfor = document.createElement("input")


    const tag2 = document.createElement("h3")
    const img2 = document.createElement("img")
    const textbox2 = document.createElement("p")
    let guesser = document.createElement("h4")



    guessie.textContent = worda

    img.setAttribute("src", "hangman1.png")
    tag.textContent = "Your Hangman and Word"
    textbox.textContent = "This is your your hangman, it displays how many more guesses your opponent has until he hangs. This is the word you are defending: " + worda
    img.setAttribute("id", "opp")

    guesser.textContent = "_____"
    guesser.setAttribute("id", "guesser")

    img2.setAttribute("src", "hangman1.png")
    img2.setAttribute("id", "gang")
    tag2.textContent = "Opponent's Hangman and Word"
    tag2.setAttribute("text-align", "center")
    textbox2.textContent = "This is your opponents word, you are going to try to figure out what his word is while simutaneously defending yours. His hangman displays how many more guesses you have until you hang."

    con.appendChild(tag)
    con.appendChild(img)
    con.appendChild(textbox)
    con.appendChild(guessie)


    
    con3.appendChild(tag2)
    con3.appendChild(img2)
    con3.appendChild(textbox2)
    con3.appendChild(guesser)

    for(let i =0;i<27;i++){
        var chong = document.createElement("button");
        chong.setAttribute("onclick", "checkLetter(this.id)")
        chong.setAttribute("class", "letterbtn")
        chong.setAttribute("id", String(alphabet[i]))
        chong.textContent = alphabet[i]
        con2.appendChild(chong)
    }
    }

function getRandomNum(max){
 return Math.floor(Math.random()*max)
}

function checkLetter(letter){
    var flag = false
    var gue = document.getElementById("guesser").textContent
    var ching = document.getElementById(letter)
    ching.setAttribute("class", "letterbtnchosen")

    for(let i =0; i< word.length;i++){
        if(letter == word[i]){
            flag = true
            update(i,letter)
        }
    }

    for(let i = 0; i<gue.length;i++){
        if(letter == gue[i]){
            alert("You already guessed this letter")
        }
    }

    if (flag == false) {
        alert("Your letter is not in the word try again")
        changeimage()
    }

    
}

function update(pos, let){
    let banana = document.getElementById("guesser");
    var ban2 = banana.textContent.substring(0,pos) + let + banana.textContent.substring(pos+1);
    banana.innerHTML=ban2;

    if(ban2 == word){
        gameover()
    }
}

function gameover(){
    clearLogin2()
    var con = document.querySelector(".container1after")
    con.setAttribute("class", "container1")
    alert("You got the word")
    let end = document.createElement("h1")
    let break1 = document.createElement("br")
    let wack = document.createElement("h2")

    wack.textContent = word

    end.textContent = "You Won Hangman! The word was"

    con.appendChild(end)
    con.appendChild(break1)
    con.appendChild(wack)
}

function gamelose(){
    clearLogin2()
    var con = document.querySelector(".container1after")
    con.setAttribute("class", "container1")
    let end = document.createElement("h1")
    let break1 = document.createElement("br")
    let wack = document.createElement("h2")

    wack.textContent = word

    end.textContent = "You lost Hangman! The word was"

    con.appendChild(end)
    con.appendChild(break1)
    con.appendChild(wack)
}


function changeimage(){
    let gang = document.getElementById("gang")

    if(gang.src == "http://127.0.0.1:5500/REACTJS/hangman1.png") {
        gang.setAttribute("src", "http://127.0.0.1:5500/REACTJS/images/hangman2.png")
    }
    else if(gang.src == "http://127.0.0.1:5500/REACTJS/hangman2.png") {
        gang.setAttribute("src", "http://127.0.0.1:5500/REACTJS/images/hangman3.png")
    }
    else if(gang.src == "http://127.0.0.1:5500/REACTJS/hangman3.png") {
        gang.setAttribute("src", "http://127.0.0.1:5500/REACTJS/images/hangman4.png")
    }
    else if(gang.src == "http://127.0.0.1:5500/REACTJS/hangman4.png") {
        gang.setAttribute("src", "http://127.0.0.1:5500/REACTJS/images/hangman5.png")
    }
    else if(gang.src == "http://127.0.0.1:5500/REACTJS/hangman5.png") {
        gang.setAttribute("src", "http://127.0.0.1:5500/REACTJS/images/hangman6.png")
    }
    else if(gang.src == "http://127.0.0.1:5500/REACTJS/hangman6.png") {
        gang.setAttribute("src", "http://127.0.0.1:5500/REACTJS/images/hangman7.png")
        alert("You have been Hanged!")
        gamelose()

    }
}

