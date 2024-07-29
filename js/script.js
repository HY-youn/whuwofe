// Add custom JavaScript here
function runTypingEffect(){
  const text = '저는 런하고 런하는 런동입니다';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 100;  // 100ms 의 딜레이

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay){
  //3개의 파라미터를 가진다
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i)
  }
}
runTypingEffect();


//글자의 인덱스 값을 찾아서 settimeout을 통해 딜레이를 넣고 글자칸을 채워준다


const button_click = document.querySelector('#about_btn');
const button_change = document.querySelector('.fa-chevron-down');

button_click.addEventListener("click", function(){
  if(button_change.classList.contains('fa-chevron-down')){
  button_change.classList.remove('fa-chevron-down');
  button_change.classList.add('fa-chevron-up');
}
else{
button_change.classList.remove('fa-chevron-up');
button_change.classList.add('fa-chevron-down');
}
}

);

