const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('calculator'));
    buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
























// const dataDisplay = document.getElementById('display');
// const mathOperatorsArray = document.querySelectorAll('.numkeys, .mathkeys, .decimalkey');
// const calculate = document.getElementById('answerkey')

// for (let button of mathOperatorsArray) {
//     button.addEventListener('click', (target) => {
//         console.log (button.textContent)

//     })
// }
// // console.log(dataDisplay);

// function getOutput() {
//     document.getElementById('display').innerText;
//   }