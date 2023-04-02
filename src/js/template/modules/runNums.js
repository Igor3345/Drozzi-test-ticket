export const runNums = ()=> {
    const numbers = document.querySelectorAll('.js-run_number');

    for(let i = 0 ; i < numbers.length; i++){
        run(numbers[i] , Number(numbers[i].dataset.start), Number(numbers[i].dataset.end), Number(numbers[i].dataset.step), Boolean(numbers[i].dataset.plus));
    }

    function run(element , start , end , step, plus){

        let n = start;
        let t = 0.5;
        let interval = setInterval(()=>{
            n = n + step;
            if(n === end){
                clearInterval(interval);
            }
            if(plus === true){
                element.innerHTML = n + '+';
            }else{
                element.innerHTML = n;
            }
        } , t)
    }
}