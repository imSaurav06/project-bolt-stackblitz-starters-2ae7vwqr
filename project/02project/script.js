const form = document.querySelector('form')


form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result')
    const bmi = weight / ((height*height)/10000)
    result.innerHTML = `<span>${bmi}</span>`
    

})





const textresult = document.querySelector('.textresult')