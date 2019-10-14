/* Task 1 */

var heading = document.getElementById("heading")
console.log(heading.textContent)


/* Task 2 using plain JavaScript */

function addText(event){
    var p = document.createElement('p')
    p.innerText = "Hello World"
    var div = document.getElementById ("task 2a")
    div.appendChild(p)

}

function changeColor(event, color){
    document.body.style.backgroundColor = color;
}

function redirect(event){
    window.location.herf = "https://www.google.com/"
}



/* Task 4 using jQuery */
$('#addText').click(function(event){
    let para = $('<p>').text("hello World!!")
    $('#task4a').append(para)
})
//4b
$('.bgBtn').click(function(event){
    $('body').css('background-color',event.target.innerText.toLowerCase())
})

//4c

$('#sum').click(function(event){
    let first = $('#firstInput').val()
    let second = $('#secondInput').val()
    let sum = Number(first) + Number(second)

    $('#result').text(sum)
})

/* Task 1 */

var heading = document.getElementById("heading")
console.log(heading.textContent)


/* Task 2 using plain JavaScript */

function addText(event){
    var p = document.createElement('p')
    p.innerText = "Hello World"
    var div = document.getElementById ("task 2a")
    div.appendChild(p)

}

function changeColor(event, color){
    document.body.style.backgroundColor = color;
}

function redirect(event){
    window.location.herf = "https://www.google.com/"
}



/* Task 4 using jQuery */
$('#addText').click(function(event){
    let para = $('<p>').text("hello World!!")
    $('#task4a').append(para)
})
//4b
$('.bgBtn').click(function(event){
    $('body').css('background-color',event.target.innerText.toLowerCase())
})

//4c

$('#sum').click(function(event){
    let first = $('#firstInput').val()
    let second = $('#secondInput').val()
    let sum = Number(first) + Number(second)

    $('#result').text(sum)
})

