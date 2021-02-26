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
  buttonChildren.push(confirmButton);
  // --Cancel Button--
  if(options.cancelButton){
    let cancelButton = document.createElement('div');
    cancelButton.className='cancelButton';
    cancelButton.innerHTML= options.cancelButtonText||'Cancel';
    cancelButton.style.background= options.cancelButtonColor || '#aaa';
    buttonChildren.push(cancelButton);
  }
  // --Deny Button--
  if(options.denyButton){
    let denyButton = document.createElement('div');
    denyButton.className='denyButton';
    denyButton.innerHTML= options.denyButtonText||'No';
    denyButton.style.background= options.denyButtonColor || '#ff7f7f';
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
