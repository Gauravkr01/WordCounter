   const synth = window.speechSynthesis;
   const utterance1 = new SpeechSynthesisUtterance();
   synth.speak(utterance1);
   synth.cancel();