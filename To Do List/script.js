function addtext() {
    var text = document.getElementById('type').value; // Ambil Value Textbox
    var contain = document.createTextNode(text); // Simpen Variabel
    var showText = document.createElement('li'); // Bikin List
    showText.setAttribute('id','textID')
    var spc = document.createElement('br'); // Bikin Spasi
    spc.setAttribute('id','spaceID')
    var check = document.createElement('input'); // Bikin Input buat Checkbox
    check.setAttribute('type','checkbox'); // Bikin Checkbox
    showText.appendChild(contain); // Bikin value text kehubung sama List
    document.getElementById('listtext').appendChild(showText);
    document.getElementById('listtext').appendChild(spc);
    document.getElementById('listtext').appendChild(check);
    document.getElementById('type').value = ''; // Reset Box Value
}

window.addEventListener('keydown', ({keyCode}) => {
    if (keyCode == 13) {
        return addtext()
    }        
})

function delfc() {
    var test = confirm("Are u sure u want to reset ur To Do List??")
    if (test == true) {
        setTimeout("location.reload(true);",200);
    }
}