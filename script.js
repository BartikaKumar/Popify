async function alert(options){
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
  alertTitle.innerText = options.title;
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
  chidren.push(alertContent);
  // --Confirm Button--
  let confirmButton = document.createElement("div");
  confirmButton.className = "confirmButton";
  if(options.hasOwnProperty('confirmButtonText')){
    confirmButton.innerText= options.confirmButtonText;
  }
  else{
    confirmButton.innerText= 'OK';
  }
  children.push(confirmButton);
  // --Secondary Button--
  if(options.secondaryButton){
    let secondaryButton = document.createElement('div');
    var defaultSecondaryButtonText;
    if(options.secondaryButtonMode=="deny"){
      secondaryButton.className='denyButton';
      defaultSecondaryButtonText='No';
    }
    else{
      secondaryButton.className='cancelButton';
      defaultSecondaryButtonText='Cancel';
    }
    if(options.hasOwnProperty('secondaryButtonText')){
      secondaryButton.innerText= options.secondaryButtonText;
    }
    else{
      secondaryButton.innerText= defaultSecondaryButtonText;
    }
    children.push(secondaryButton);
  }
  // --Afterwards--
}
