function insertData() {
     var title = document.getElementById("Title").value;
     var event= document.getElementById("Event").value;
     var time = document.getElementById("Time").value;
     document.getElementById("insertionPoint").innerHTML += "<tr><td>"
     + title +"</td><td>"+ time+
     
       
                              "<td></td>"+
                              "<td></td>"+
                              "<td></td>"+
                              "<td></td>"+
                              "<td></td>"+

               "</td></tr>"
   // event + "</td></tr>";
  
    // The below part is to clear the values after the entry is added.
   //document.getElementById("Title").value = ""
   //document.getElementById("Event").value = "";
}


