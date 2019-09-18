


/* chrome.runtime.sendMessage({greeting: "hello"}, function(response) {

  var delay= setInterval(show,1000);

  function show(){
  
    let doc=document.querySelector("#eed3 > h1")
  
    clearInterval(delay)
  
  }
  
}); */


 chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.txt == "hello"){
      let doc=document.querySelector("#ep > div.pbBody > div:nth-child(5) > table > tbody > tr:nth-child(1) > td:nth-child(1)")

      doc.innerHTML='hi'

      alert(doc.innerHTML)
    }

    else {
      alert('no')
    }
    
  }); 