const buttons = document.querySelectorAll('button');
const output = document.querySelector('.result');
const outputTop = document.querySelector('.equasion');

buttons.forEach((button) =>{
  button.addEventListener('click', (e) =>{
    const input = e.target.dataset.value;
    if(input === '='){
      if(outputTop.innerText.includes('/')){
        const splitValues = outputTop.innerHTML.split('/')
        operate('/', splitValues[0], splitValues[1]);
      }
      if(outputTop.innerText.includes('+')){
        const splitValues = outputTop.innerHTML.split('+')
        operate('+', splitValues[0], splitValues[1]);
      }
      if(outputTop.innerText.includes('-')){
        const splitValues = outputTop.innerHTML.split('-')
        operate('-', splitValues[0], splitValues[1]);
      }
      if(outputTop.innerText.includes('*')){
        const splitValues = outputTop.innerHTML.split('*')
        operate('*', splitValues[0], splitValues[1]);
      }
    }
    outputTop.innerText += input; 
    if(input === 'DEL'){
      outputTop.innerText = '';
      output.innerText = '';
    }
  })
})
function operate(operators,value1,value2){
  const num1 = (Number(value1));
  const num2 = (Number(value2));
  if(operators == '/'){
   output.innerText= num1 / num2
  }
  if(operators == '+'){
    output.innerText=  num1 + num2
  }
  if(operators == '*'){
    output.innerText=  num1 * num2
  }
  if(operators == '-'){
    output.innerText=  num1 - num2
  }
}
