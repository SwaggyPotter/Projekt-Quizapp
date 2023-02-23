let htmlQuizButton = document.getElementById('htmlQuizButton')
let cssQuizButton = document.getElementById('cssQuizButton')
let jsQuizButton = document.getElementById('jsQuizButton')
let quizName = document.getElementById('quizName')
let quizCounter = 0;
let startButton = document.getElementById('startButton')
let quizWindow = document.getElementById('quizWindow')
let rightQuestionCounter = 0;
let sideBar = document.getElementById('sideBarContainer')

// HTML Quiz

let HTMLQuestions = {
    fragen:
        [
            '<b>Wofür steht HTML?</b>',
            '<b>Welches HTML "tag" gibt es nicht?</b>',
            '<b>Finde den fehler</b>',
            '<b>Wann wurde HTML erfunden?</b>',
            '<b>Wer hat HTML erfunden?</b>'
        ],
    antworten: [
        antworten1 = [
            'Hyper Turbo Master Language',
            'Hypertext Markup Language',
            'Hat keine bedeutung',
            'Hallo Welt'
        ],
        antworten2 = [
            'nav',
            'main',
            'header',
            'fooder'
        ],
        antworten3 = [
            'mit link bindet man ein Stylesheet ein',
            'mit script bindet man nur eine Audio Datei ein',
            'mit img bindet man ein Bild ein',
            'mit video bindet man ein Video ein'
        ],
        antworten4 = [
            '1989 v.Chr',
            '1999',
            '1970',
            '1989'
        ],
        antworten5 = [
            'Bruce Lee',
            'Tim Berners-Lee',
            'Jet Li',
            'Jamie-Lee'
        ],
    ],

    // add the right answer, number beginning from 0 - 3
    rightAnws: [1, 3, 1, 3, 1]

};


let currentQuestionHTML = 0;


function startHTMLQuiz() {
    quizWindow.innerHTML = `${HTMLQuestions.fragen[currentQuestionHTML]}`;
    HTMLQuestion(currentQuestionHTML)
    updateProgressbar()
    hideSidebar();
}


function HTMLQuestion(q) {
    if (currentQuestionHTML < 4) {
        for (i = 0; i < HTMLQuestions.antworten[q].length; i++) {
            quizWindow.innerHTML += `<button onclick="checkIfRight(${i})" id="question${i}"
        class="btn btn-primary mt-2 mb-2 w-100 p-3" type="submit ">${HTMLQuestions.antworten[q][i]}</button>`;
        }
        quizWindow.innerHTML += `<button id="nextButton" onclick="nextHTMLQuestion()" type="button" 
        class="btn btn-secondary btn-sm disabled">Nächste Frage</button>`;
    }
    else if (currentQuestionHTML == 4) {
        for (i = 0; i < HTMLQuestions.antworten[q].length; i++) {
            quizWindow.innerHTML += `<button onclick="checkIfRight(${i})" id="question${i}"
        class="btn btn-primary mb-2 w-100 p-3" type="submit">${HTMLQuestions.antworten[q][i]}</button>`;
        }
        quizWindow.innerHTML += `<button id="nextButton" onclick="finishQuiz()" type="button" 
        class="btn btn-secondary btn-sm disabled" >Finish Quiz</button>`;
    }
}


function checkIfRight(n) {
    if (n == HTMLQuestions.rightAnws[currentQuestionHTML]) {
        document.getElementById(`question${n}`).classList.add('btn-success')
        let audio = new Audio('sounds/correct.mp3');
        audio.volume = 0.2
        audio.play();
        rightQuestionCounter++
        enableButton();
        disableButtons();
    }
    else {
        document.getElementById(`question${n}`).classList.add('btn-danger')
        let audio = new Audio('sounds/wrong.mp3');
        audio.volume = 0.2
        audio.play();
        enableButton();
        showWrongAnswer();
        showRightAnswer();
    }
}


function disableButtons() {
    document.getElementById('question0').setAttribute("disabled", "");
    document.getElementById('question1').setAttribute("disabled", "");
    document.getElementById('question2').setAttribute("disabled", "");
    document.getElementById('question3').setAttribute("disabled", "");
}


function showRightAnswer() {
    if (0 == HTMLQuestions.rightAnws[currentQuestionHTML]) {
        document.getElementById('question0').classList.add('btn-success')
        document.getElementById('question0').setAttribute("disabled", "");
    }
    if (1 == HTMLQuestions.rightAnws[currentQuestionHTML]) {
        document.getElementById('question1').classList.add('btn-success')
        document.getElementById('question1').setAttribute("disabled", "");
    }
    if (2 == HTMLQuestions.rightAnws[currentQuestionHTML]) {
        document.getElementById('question2').classList.add('btn-success')
        document.getElementById('question2').setAttribute("disabled", "");
    }
    if (3 == HTMLQuestions.rightAnws[currentQuestionHTML]) {
        document.getElementById('question3').classList.add('btn-success')
        document.getElementById('question3').setAttribute("disabled", "");
    }
}


function showWrongAnswer() {
    if (0 != HTMLQuestions.rightAnws[currentQuestionHTML]) {
        document.getElementById('question0').classList.add('btn-danger')
        document.getElementById('question0').setAttribute("disabled", "");
    }
    if (1 != HTMLQuestions.rightAnws[currentQuestionHTML]) {
        document.getElementById('question1').classList.add('btn-danger')
        document.getElementById('question1').setAttribute("disabled", "");
    }
    if (2 != HTMLQuestions.rightAnws[currentQuestionHTML]) {
        document.getElementById('question2').classList.add('btn-danger')
        document.getElementById('question2').setAttribute("disabled", "");
    }
    if (3 != HTMLQuestions.rightAnws[currentQuestionHTML]) {
        document.getElementById('question3').classList.add('btn-danger')
        document.getElementById('question3').setAttribute("disabled", "");
    }
}


function enableButton() {
    let nextButton = document.getElementById('nextButton')
    nextButton.classList.remove('disabled');
}


function nextHTMLQuestion() {
    quizWindow.innerHTML = ``;
    currentQuestionHTML++;
    startHTMLQuiz()
    updateProgressbar();

}


function hideSidebar() {
    sideBar.style.display = 'none';
}


function updateProgressbar() {
    let progressCounter = (currentQuestionHTML / 5) * 100;
    let progressbar = document.getElementById('progressbar')
    progressbar.style.width = `${progressCounter}%`;
    progressbar.innerText = `${progressCounter}%`;
}


function restartQuiz() {
    location.reload()
}


function finishQuiz() {
    progressbar.style.width = `${100}%`;
    progressbar.innerText = `100%`;
    quizWindow.innerHTML = `
    <p>Quiz abgeschlossen</p>
    <p>Du hast ${rightQuestionCounter} von 5 Fragen Richtig beantwortet</p>
    <button onclick="restartQuiz()" type="button" class="btn btn-primary btn-lg">Neustart</button>
    `
}


htmlQuizButton.addEventListener('click', () => {
    htmlQuizButton.classList.add('active')
    quizName.innerText = 'HTML';
    quizCounter = 0;
})


startButton.addEventListener('click', () => {
    if (quizCounter == 0) {
        startHTMLQuiz();
    }
})