function score() {
    let question1 = document.getElementById("question1").value
    let question2 = document.getElementById("question2").value
    let question3 = document.getElementById("question3").value
    let question4 = document.getElementById("question4").value
    let question5 = document.getElementById("question5").value
    let question6 = document.getElementById("question6").value
    let question7 = document.getElementById("question7").value
    let question8 = document.getElementById("question8").value
    let question9 = document.getElementById("question9").value
    let question10 = document.getElementById("question10").value

    let amount = 0

    if ( question1 == 'Los Angeles Lakers'){
        const i = document.getElementById('q1')
        amount++;
        i.style.backgroundColor = 'lightgreen';
    } else {
        const i = document.getElementById('q1')
        i.style.backgroundColor = 'red'
    }
    

    if (question2 == 'Phil Jackson') {
        const i = document.getElementById('q2')
        amount++;
        i.style.backgroundColor = 'lightgreen';
    } else {
        const i = document.getElementById('q1')
        i.style.backgroundColor = 'red'
    }

    if (question3 == 'Michael Jordan') {
        const i = document.getElementById('q3')
        amount++;
        i.style.backgroundColor = 'lightgreen';
    } else {
        const i = document.getElementById('q3')
        i.style.backgroundColor = 'red'
    }

    if (question4 == 'Manute Bol') {
        const i = document.getElementById('q4')
        amount++;
        i.style.backgroundColor = 'lightgreen';
    } else {
        const i = document.getElementById('q4')
        i.style.backgroundColor = 'red'
    }

    if (question5 == 'Vince Carter') {
        const i = document.getElementById('q5')
        amount++;
        i.style.backgroundColor = 'lightgreen';
    } else {
        const i = document.getElementById('q5')
        i.style.backgroundColor = 'red'
    }

    if (question6 == 'Kareem Abdul-Jabbar') {
        const i = document.getElementById('q6')
        amount++;
        i.style.backgroundColor = 'lightgreen';
    } else {
        const i = document.getElementById('q6')
        i.style.backgroundColor = 'red'
    }


    if (question7 == 'Kobe Bryant') {
        const i = document.getElementById('q7')
        amount++;
        i.style.backgroundColor = 'lightgreen';
    } else {
        const i = document.getElementById('q7')
        i.style.backgroundColor = 'red'
    }

    if (question8 == 'John Stockton') {
        const i = document.getElementById('q8')
        amount++;
        i.style.backgroundColor = 'lightgreen';
    } else {
        const i = document.getElementById('q8')
        i.style.backgroundColor = 'red'
    }

    if (question9 == 'Yao Ming') {
        const i = document.getElementById('q9')
        amount++;
        i.style.backgroundColor = 'lightgreen';
    } else {
        const i = document.getElementById('q9')
        i.style.backgroundColor = 'red'
    }
 
    if (question10 == 'Kawhi Leonard') {
        const i = document.getElementById('q10')
        amount++;
        i.style.backgroundColor = 'lightgreen';
    } else {
        const i = document.getElementById('q10')
        i.style.backgroundColor = 'red'
    }
    
document.getElementById("finished").style.visibility = "visible";
document.getElementById("total").innerHTML = "You got " + amount + "/10 questions correct!";

}

 
