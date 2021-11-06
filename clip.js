function myFunction() {
    var copyText = document.getElementById("demo");
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(document.querySelector('#demo'));
    
    selection.removeAllRanges();
    selection.addRange(range);
    navigator.clipboard.writeText(copyText.innerText);
  
    var tooltip = document.getElementById("myTooltip");
    // tooltip.innerHTML = "Copied wish" + copyText.innerText;
    tooltip.innerHTML = "Copied wish" ;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}