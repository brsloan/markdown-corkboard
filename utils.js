function closePopups(){
    removeElementsByClass('popup');
    focusEditor();
}
  
function closePopupDialogs(){
    removeElementsByClass('popup-dialog');
    var popups = document.getElementsByClassName('popup');
    if(popups.length > 0){
        popups[0].focus();
    }
    else {
        focusEditor();
    }
} 

function removeElementsByClass(className){
    try{
      var elements = document.getElementsByClassName(className);
      while(elements.length > 0){
          elements[0].onblur = null;
          elements[0].parentNode.removeChild(elements[0]);
      }
    }
    catch(err){
      logError(err);
    }
  }
  

function createButton(text){
    var btn = document.createElement("button");
    btn.innerHTML = text;
    btn.type = "button";
    return btn;
}

function getPaddedDateTimeString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}-${hours}${minutes}${seconds}`;
}

function downloadTextFile(text, filename) {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function logError(e){
    console.log(e);
  }