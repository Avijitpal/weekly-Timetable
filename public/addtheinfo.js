function insertData() {
    var title = document.getElementById("Title").value;
    var event= document.getElementById("Event").value;
    document.getElementById("insertionPoint").innerHTML += "<tr><td>"
     + title + "</td><td>" +
     event + "</td><td>";
  
    // The below part is to clear the values after the entry is added.
    document.getElementById("Title").value = ""
    document.getElementById("Event").value = "";
}
