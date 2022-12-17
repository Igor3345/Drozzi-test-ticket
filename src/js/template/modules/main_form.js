export const main_form = () => {
    let form = document.querySelector(".js-form_section");
    form.onsubmit = form_submit;

    let validate = true;

    function form_submit(e){
        
        const inputs = form.querySelectorAll('.js-main_form-input');
        const textarea = form.querySelector(".js-main_form-textarea");
        if(!checkInputs(inputs)){
            e.preventDefault();
        }

        if(textarea.querySelector('textarea').value.trim() === ""){
            textarea.classList.add('--error');
            e.preventDefault();
        }else{
            textarea.classList.remove('--error');
           
        }
    }


    function checkInputs(inputs){
        let validate = true;
        for(let i=0; i<inputs.length; i++){
            if(inputs[i].querySelector('input') && inputs[i].querySelector('input').value.trim() === ""){
                inputs[i].classList.add('--error');
                validate = false
            }else{
                inputs[i].classList.remove('--error');
            }
        }
        if(!validate){
            return false
        }else{
            return true
        }
    }
}