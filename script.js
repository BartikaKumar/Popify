function alertify(options){
  // --Alert Backdrop--
  let alertBackdrop= document.createElement('div');
  alertBackdrop.className='alertBackdrop';
  // --Alert Box--
  let alertBox = document.createElement("div");
  alertBox.className = 'alertBox';
  let defaultAlertBoxColor="#fff";
  let defaultAlertBoxTextColor = "#555";
  let animationIn, animationOut;
  let animationInDict={
      "fade-down":"alertFadeDown",
      "fade-up":"alertFadeUp",
      "fade":"",
      "scale-down":"alertScaleDown",
      "scale-up":"alertScaleUp",
      "fade-right":"alertFadeRight",
      "fade-left":"alertFadeLeft",
  }
  let animationOutDict={
      "fade-down":"alertFadeUp",
      "fade-up":"alertFadeDown",
      "fade":"",
      "scale-down":"alertScaleUp",
      "scale-up":"alertScaleDown",
      "fade-right":"alertFadeLeft",
      "fade-left":"alertFadeRight",
  }
  if(options.animationIn){
      animationIn = animationInDict[options.animationIn];
  }
  if(options.animationOut){
      animationOut = animationOutDict[options.animationOut];
  }
  document.body.style.setProperty("--animation-name-in",animationIn);
  document.body.style.setProperty("--animation-name-out",animationOut);

  if(options.darkMode){
    alertBox.classList.add('alertBoxDark');
    defaultAlertBoxColor = "#222";
    defaultAlertBoxTextColor = "#eee";
  }
  alertBox.style.background= options.alertBoxColor || defaultAlertBoxColor;
  alertBox.style.color= options.alertBoxTextColor || defaultAlertBoxTextColor;
  let children= [];

  alertBackdrop.classList.add("alertOpen");
  alertBox.classList.add("alertBoxOpen");
  setTimeout(function(){
      alertBackdrop.classList.remove("alertOpen");
      alertBox.classList.remove("alertBoxOpen");

  },200)
  // --Alert Title--
  let alertTitle = document.createElement('div');
  alertTitle.className = 'alertTitle';
  alertTitle.innerHTML = options.title||"";
  children.push(alertTitle);
  //--Alert Content--
  let alertContent = document.createElement('div');
  alertContent.className='alertContent';
  if(options.hasOwnProperty('html')){
    alertContent.innerHTML= options.html;
  }
  else if(options.hasOwnProperty('text')){
    alertContent.innerText= options.text;
  }
  children.push(alertContent);
  // --ALert Input--
  if(options.input){
   let alertInput = document.createElement('input');
    if(options.inputSetAttributes){
      let inputAttributes= options.inputSetAttributes;
      let attributes= Object.keys(inputAttributes);
      let values= Object.values(inputAttributes);
      for(let i=0;i<attributes.length;i++){
        alertInput.setAttribute(attributes[i],values[i]);
      }
    }
    alertInput.classList.add("alertInput");
    children.push(alertInput);
  }
  // --Buttons--
  let buttons= document.createElement('div');
  buttons.className= 'alertButtons';
  children.push(buttons);
  let buttonChildren=[];
  // --Confirm Button--
  let confirmButton = document.createElement("div");
  confirmButton.className = "confirmButton";
  confirmButton.innerHTML= options.confirmButtonText||"Ok";
  confirmButton.style.background= options.confirmButtonColor || '#3cb371';
  confirmButton.addEventListener("click",function(){
  let alertInputValue= getInputValue();
  if(options.hasOwnProperty("onConfirmed")){
      options.onConfirmed(alertInputValue);
  }
  if(!options.alertPersistOnConfirmed){close()}
  });
  buttonChildren.push(confirmButton);
  // --Cancel Button--
  if(options.cancelButton){
    let cancelButton = document.createElement('div');
    cancelButton.className='cancelButton';
    cancelButton.innerHTML= options.cancelButtonText||'Cancel';
    cancelButton.style.background= options.cancelButtonColor || '#aaa';
    cancelButton.addEventListener("click",function(){
    let alertInputValue= getInputValue();
    if(options.hasOwnProperty("onCanceled")){
      options.onCanceled(alertInputValue);
    }
    if(!options.alertPersistOnCanceled){close()}
    });
    buttonChildren.push(cancelButton);
  }
  // --Deny Button--
  if(options.denyButton){
    let denyButton = document.createElement('div');
    denyButton.className='denyButton';
    denyButton.innerHTML= options.denyButtonText||'No';
    denyButton.style.background= options.denyButtonColor || '#ff595e';
    denyButton.addEventListener("click",function(){
    let alertInputValue= getInputValue();
    if(options.hasOwnProperty("onDenied")){
      options.onDenied(alertInputValue);
    }
    if(!options.alertPersistOnDenied){close()}
    });
    buttonChildren.push(denyButton);
  }
  // --Footer--
  if(options.footer){
    let footer= document.createElement('div');
    footer.className='alertFooter';
    footer.innerHTML=options.footer;
    children.push(footer);
  }
  // --Auto Timer Close
  if(options.hasOwnProperty("autoTimerClose")){
      setTimeout(function(){
          let alertInputValue= getInputValue();
    if(options.hasOwnProperty("onAutoTimerClose")){
      options.onAutoTimerClose(alertInputValue);
    }
    close();
      }, options.autoTimerClose)
  }
  // --Append Alert--
  document.body.appendChild(alertBackdrop);
  alertBackdrop.appendChild(alertBox);
  // --Append Alert Contents--
  for(let i=0;i<children.length;i++){
    alertBox.appendChild(children[i]);
  }
  for(let i=0; i<buttonChildren.length;i++){
    buttons.appendChild(buttonChildren[i]);
  }
  // --Afterwards--
  function getInputValue(){
      let alertInputValue = "No Input";
    if(document.querySelector(".alertBox .alertInput")){
  alertInputValue= document.querySelector(".alertBox .alertInput").value;
      return alertInputValue;
  }
  }
  function close(){
      alertBackdrop.classList.add("alertClose");
      alertBox.classList.add("alertBoxClose");
      setTimeout(function(){
          alertBackdrop.remove();
      },200)
  }
};
function toastify(options){
  // --Toast Box--
  let toastBox= document.createElement('div');
  toastBox.className= 'toastBox';
  let defaultToastBoxColor='#fff';
  let defaultToastBoxTextColor= '#555';
  let defaultToastBoxShadow='0 0 5px 0 rgba(0,0,0,0.5)';
  if(options.darkMode){
    defaultToastBoxColor= '#222';
    defaultToastBoxTextColor='#eee';
    defaultToastBoxShadow='0 0 5px 0 rgba(255,255,255,0.5)';
  }
  toastBox.style.background= options.toastBoxColor || defaultToastBoxColor;
  toastBox.style.color= options.toastBoxTextColor || defaultToastBoxTextColor;
  toastBox.style.boxShadow= options.toastBoxShadow || defaultToastBoxShadow;
  // --Toast Contents--
  if(options.hasOwnProperty('html')){
    toastBox.innerHTML= options.html;
  }
  else if(options.hasOwnProperty('text')){
    toastBox.innerText= options.text;
  }
  // --Toast Position--

  // --Append Toast--
  document.body.appendChild(toastBox);
  // --Toast Close Timer--
  setTimeout(function(){
    toastBox.remove();
  },options.toastCloseTimer)
}
