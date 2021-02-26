async function alertify(options){
  // --Alert Backdrop--
  let alertBackdrop= document.createElement('div');
  alertBackdrop.className='alertBackdrop';
  // --Alert Box--
  let alertBox = document.createElement("div");
  if(options.darkMode){
    alertBox.className='alertBoxDark';
  }
  else{
    alertBox.className='alertBoxLight';
  }
  let children= [];
  // --Alert Title--
  let alertTitle = document.createElement('div');
  alertTitle.className = 'alertTitle';
  alertTitle.innerText = options.title||"";
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
  // --Buttons--
  let buttons= document.createElement('div');
  buttons.className= 'alertButtons';
  childen.push(buttons);
  let buttonChildren=[];
  // --Confirm Button--
  let confirmButton = document.createElement("div");
  confirmButton.className = "confirmButton";
  confirmButton.innerText= options.confirmButtonText||"Ok";
  buttonChildren.push(confirmButton);
  // --Secondary Button--
  if(options.secondaryButton){
    let secondaryButton = document.createElement('div');
    let defaultSecondaryButtonText;
    if(options.secondaryButtonMode=="deny"){
      secondaryButton.className='denyButton';
      defaultSecondaryButtonText='No';
    }
    else{
      secondaryButton.className='cancelButton';
      defaultSecondaryButtonText='Cancel';
    }
    secondaryButton.innerText= options.secondaryButtonText||defaultSecondaryButtonText;
    buttonChildren.push(secondaryButton);
  }
  // --Append Alert--
  document.body.appendChild(alertBackdrop);
  alertBackdrop.appendChild(alertBox);
  // --Append Alert Contents--
  for(let i=0;i<children.length;i++){
    alertBox.appendChild(children[i]);
  }
  for(let i=0; i<buttonChildren.length;i++){
    buttons.appendChild(buttonChildren);
  }
  children=[];
  buttonChildren=[];
  // --Afterwards--
}
