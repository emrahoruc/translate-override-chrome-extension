function removeTranslateNo() {
    const elements = document.querySelectorAll("[translate='no']");
    elements.forEach(el => {
      el.removeAttribute("translate");
      // console.log("no-translate removed from: ", el);
    });
  }
  
  if (document.readyState === "complete") {
    removeTranslateNo();
  } else {
    window.addEventListener("load", removeTranslateNo);
  }
  