let secretNumber = 42; 
let attempts = 0;

function SandiTabiniz() {
    while (true) {
        let adamninjaziu = parseInt(prompt("1-100дін кіші болмау керек және одан үлкені болмау керек:"));
        attempts++;

        if (adamninjaziu < secretNumber) {
            alert("Құпия саны осы саннан үлкенірек!");
        } else if (adamninjaziu > secretNumber) {
            alert("кұпия саны осы саннан кішірек!");
        } else if (adamninjaziu === secretNumber) {
            alert("ай красавчик сіз/сен құпия сөзді таптыныз");
            alert("Сен\сіз " + attempts + " осынша попыткадан құпия сөзді таптыныз.");
            break;
        } else {
            alert("0 ден аз болмау керек және 100 ден үлкен болмау керек😡🤬");
        }
    }
}

SandiTabiniz();