 
 let speech = new SpeechSynthesisUtterance();
 const btn = document.querySelector(".Listenbtn");
 const txt = document.getElementById("textarea");

 btn.addEventListener('click',()=>{
    speech.text = txt.value;
    speech.lang = 'en-US';
speech.pitch = 1;
speech.rate = 0.6;

  window.speechSynthesis.speak(speech);

 });