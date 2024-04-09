// const red = document.getElementById('red');
// const blue = document.getElementById('blue')
// const green = document.getElementById('green')
// const violet = document.getElementById('violet')

// red.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = "red";
// })
// blue.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = "blue";
// })
// green.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = "green";
// })
// violet.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = "violet";
// })

const buttons = document.querySelectorAll('.box')
console.log(buttons)
const body = document.querySelector('body')
buttons.forEach(function (button)  {
    console.log(button)
    button.addEventListener('click', function(e)  {
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
        }
        else{
            body.style.backgroundColor = e.target.id
        }

        

    })
})
