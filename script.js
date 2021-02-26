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
    alertContent.innerHtml= options.html;
  }
  else if(options.hasOwnProperty('text')){
    alertContent.innerText= options.text;
  }
  children.push(alertContent);
  // --Confirm Button--
  let confirmButton = document.createElement("div");
  confirmButton.className = "confirmButton";
  confirmButton.innerText= options.confirmButtonText||"Ok";
  children.push(confirmButton);
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
    children.push(secondaryButton);
  }
  // --Append Alert--
  document.body.appendChild(alertBackdrop);
  alertBackdrop.appendChild(alertBox);
  // --Append Alert Contents--
  for(let i=0;i<children.length;i++){
    alertBox.appendChild(children[i]);
  }
  children=[];
  // --Afterwards--
}
