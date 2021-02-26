async function alertify(options){
  // --Alert Backdrop--
  let alertBackdrop= document.createElement('div');
  alertBackdrop.className='alertBackdrop';
  // --Alert Box--
  let alertBox = document.createElement("div");
  alertBox.className = 'alertBox';
  if(options.darkMode){
    alertBox.classList.add('alertBoxDark');
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
  children.push(buttons);
  let buttonChildren=[];
  // --Confirm Button--
  let confirmButton = document.createElement("div");
  confirmButton.className = "confirmButton";
  confirmButton.innerText= options.confirmButtonText||"Ok";
  buttonChildren.push(confirmButton);
  // --Cancel Button--
  if(options.cancelButton){
    let cancelButton = document.createElement('div');
    cancelButton.className='cancelButton';
    cancelButton.innerText= options.secondaryButtonText||'Cancel';
    buttonChildren.push(cancelButton);
  }
  // --Deny Button--
  if(options.denyButton){
    let secondaryButton = document.createElement('div');
    denyButton.className='denyButton';
    denyButton.innerText= options.secondaryButtonText||'No';
    buttonChildren.push(denyButton);
  }
  // --Footer--
  if(options.footer){
    let footer= document.createElement('div');
    footer.className='alertFooter';
    footer.innerHTML=options.footer;
    children.push(footer);
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
  children=[];
  buttonChildren=[];
  // --Afterwards--
}
