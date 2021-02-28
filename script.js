// --CSS--
var libraryCss=`*{
    --animation-name-in:;
    --animation-name-out:;
    --animation-name-in-toast:;
    --animation-name-out-toast:;
}
.alertifyDisableScroll{
  height:100vh;
  overflow:hidden;
}
.alertBackdrop{
  height:100vh;
  width:100vw;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter:blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:999;
}
.alertBox{
  padding: 20px;
  max-width:90vw;
  border-radius:10px;
  box-sizing:border-box ;
  text-align:center;
}
.alertOpen{
    animation:alertBackdropFadeIn 0.2s ease-out !important;
}
.alertBoxOpen{
    animation-duration:0.2s !important;
    animation-iteration-count:1 !important;
    animation-timing-function:ease-out !important;
    animation-name:var(--animation-name-in);
}
.alertBoxDark{
    box-shadow:0 0 0 2px #aaa;
}
.alertBoxDark .alertFooter{
    border-top-color:rgba(255,255,255,0.1);
}
.alertBoxDark .alertInput{
    color:#eee;
    box-shadow:0 0 0 2px rgba(255,255,255,0.2);
}
.alertTitle{
    font-size:25px;
    text-align:center;
    margin-bottom:25px;
    margin-top:15px;
    font-weight:bold;
}
.alertContent{
    text-align:center;
    font-size:15px;
    margin-bottom:25px;
}
.alertButtons{
    display:flex;
    justify-content:center;
}
.alertButtons div{
    text-align:center;
    color:white;
    border-radius:5px;
    padding-left:20px;
    padding-right:20px;
    padding-top:10px;
    padding-bottom:10px;
    font-size:16px;
    font-weight:bold;
    margin-right:10px;
    margin-left:10px;
    display:flex;
    align-items:center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
.alertButtons div:active{
    transform:scale(0.9);
}
.alertFooter{
    font-size:15px;
    height:50px;
    line-height:50px;
    border-top:1px solid rgba(0,0,0,0.1);
    margin-top:25px;
    text-align:center;
    margin-bottom:-15px;
}
.alertInput{
    width:80%;
    padding:10px;
    font-size:15px;
    outline:none;
    border:none;
    border-radius:5px;
    box-shadow:0 0 0 2px rgba(0,0,0,0.2);
    background:transparent ;
    margin-bottom:25px;
}
.alertClose{
    animation:alertBackdropFadeIn 0.2s ease-in !important;
    animation-direction:reverse !important;
    opacity: 0 !important;
}
.alertBoxClose{
    animation-duration:0.2s !important;
    animation-iteration-count:1 !important;
    animation-timing-function:ease-out !important;
    animation-direction:reverse !important;
    animation-name:var(--animation-name-out);
}
@keyframes alertScaleUp{
    from{
        transform:scale(0.75);
    }
    to{
        transform:scale(1);
    }
}
@keyframes alertScaleDown{
    from{
        transform:scale(1.25);
    }
    to{
        transform:scale(1);
    }
}
@keyframes alertFadeDown{
    from{
        transform:translateY(-100px);
    }
    to{
        transform:translateY(0px);
    }
}
@keyframes alertFadeUp{
    from{
        transform:translateY(100px);
    }
    to{
        transform:translateY(0px);
    }
}
@keyframes alertFadeRight{
    from{
        transform:translateX(-100px);
    }
    to{
        transform:translateX(0px);
    }
}
@keyframes alertFadeLeft{
    from{
        transform:translateX(100px);
    }
    to{
        transform:translateX(0px);
    }
}
@keyframes alertBackdropFadeIn{
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
}
.toastBox{
    position:fixed;
    background:white;
    border-radius:5px;
    padding-left:20px;
    padding-right:20px;
    padding-top:10px;
    padding-bottom:10px;
    font-size:16px;
    max-width:90vw;
    box-sizing:border-box ;
    z-index:1000;
}
@keyframes toastScaleUp{
    from{
        transform:scale(0.75);
        opacity:0;
    }
    to{
        transform:scale(1);
        opacity:1;
    }
}
@keyframes toastScaleDown{
    from{
        transform:scale(1.25);
        opacity:0;
    }
    to{
        transform:scale(1);
        opacity:1;
    }
}
@keyframes toastFadeDown{
    from{
        transform:translateY(-100px);
        opacity:0;
    }
    to{
        transform:translateY(0px);
        opacity:1;
    }
}
@keyframes toastFadeUp{
    from{
        transform:translateY(100px);
        opacity:0;
    }
    to{
        transform:translateY(0px);
        opacity:1;
    }
}
@keyframes toastFadeRight{
    from{
        transform:translateX(-100px);
        opacity:0;
    }
    to{
        transform:translateX(0px);
        opacity:1;
    }
}
@keyframes toastFadeLeft{
    from{
        transform:translateX(100px);
        opacity:0;
    }
    to{
        transform:translateX(0px);
        opacity:1;
    }
}
.toastBoxOpen{
    animation-duration:0.2s !important;
    animation-iteration-count:1 !important;
    animation-timing-function:ease-out !important;
    animation-name:var(--animation-name-in-toast);
}
.toastBoxClose{
    animation-duration:0.2s !important;
    animation-iteration-count:1 !important;
    animation-timing-function:ease-out !important;
    animation-direction:reverse !important;
    animation-name:var(--animation-name-out-toast);
}`
// --Append Stylesheet to Document--

const documentHead= document.head || document.getElementsByTagName('head')[0];
const libraryStylesheet= document.createElement('style');
documentHead.appendChild(libraryStylesheet);
libraryStylesheet.type= 'text/css';
if(libraryStylesheet.styleSheet){
  libraryStylesheet.styleSheet.cssText= libraryCss;
}
else{
  libraryStylesheet.appendChild(document.createTextNode(libraryCss));
}
// --Custom Alert--
function alertify(options){
  // --Alert Backdrop--
  let alertBackdrop= document.createElement('div');
  alertBackdrop.className='alertBackdrop';
  if(options.removeBackdropBlur){
    alertBackdrop.style.backdropFilter='blur(0px)';
  }
  document.body.classList.add('alertifyDisableScroll');
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
// --Custom Toast--
function toastify(options){
  // --Toast Box--
  let toastBox= document.createElement('div');
  toastBox.className= 'toastBox';
  let defaultToastBoxColor='#fff';
  let defaultToastBoxTextColor= '#555';
  let defaultToastBoxShadow='0 0 25px 0 rgba(0,0,0,0.1)';
  let defaultToastBoxTextAlign='left';
  toastBox.style.background= options.toastBoxColor || defaultToastBoxColor;
  toastBox.style.color= options.toastBoxTextColor || defaultToastBoxTextColor;
  toastBox.style.boxShadow= options.toastBoxShadow || defaultToastBoxShadow;
  toastBox.style.textAlign= options.toastBoxTextAlign || defaultToastBoxTextAlign;
  // --Toast Animation In
  let animationIn, animationOut;
  let animationInDict={
      "fade-down":"toastFadeDown",
      "fade-up":"toastFadeUp",
      "scale-down":"toastScaleDown",
      "scale-up":"toastScaleUp",
      "fade-right":"toastFadeRight",
      "fade-left":"toastFadeLeft",
  }
  let animationOutDict={
      "fade-down":"toastFadeUp",
      "fade-up":"toastFadeDown",
      "scale-down":"toastScaleUp",
      "scale-up":"toastScaleDown",
      "fade-right":"toastFadeLeft",
      "fade-left":"toastFadeRight",
  }
  animationIn="toastFadeUp";
  animationOut='toastFadeUp';
  if(options.animationIn in animationInDict){
      animationIn = animationInDict[options.animationIn] ;
  }
  if(options.animationOut in animationOutDict){
      animationOut = animationOutDict[options.animationOut];
  }
  document.body.style.setProperty("--animation-name-in-toast",animationIn);
  document.body.style.setProperty("--animation-name-out-toast",animationOut);
  toastBox.classList.add("toastBoxOpen");
  setTimeout(function(){
      toastBox.classList.remove("toastBoxOpen");
  },200)
  // --Toast Contents--
  if(options.hasOwnProperty('html')){
    toastBox.innerHTML= options.html;
  }
  else if(options.hasOwnProperty('text')){
    toastBox.innerText= options.text;
  }
  // --Toast Position--
  let defaultPosition='top right';
  let position= options.position || defaultPosition;
  if(position=='top right'){
    toastBox.style.top='5vw';
    toastBox.style.right='5vw';
  }
  else if(position=='top left'){
    toastBox.style.top='5vw';
    toastBox.style.left='5vw';
  }
  else if(position=='bottom right'){
    toastBox.style.bottom='5vw';
    toastBox.style.right='5vw';
  }
  else if(position=='bottom left'){
    toastBox.style.bottom='5vw';
    toastBox.style.left='5vw';
  }
  // --Append Toast--
  document.body.appendChild(toastBox);
  // --Toast Close Timer--
  let closeTimer= Number(options.toastCloseTimer) || 2500;
  setTimeout(function(){
    toastBox.classList.add("toastBoxClose");
    setTimeout(function(){
        document.body.classList.remove('alertifyDisableScroll');
        toastBox.remove();
    },200)
  },closeTimer)
}
