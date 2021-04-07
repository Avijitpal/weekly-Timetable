







function insertData() {
  var title = document.getElementById("Title").value;
  var event= document.getElementById("Event").value;
  var time = document.getElementById("Time").value;
  var day = document.getElementById("week-days").value;
  if(day == "Monday")
  {
    console.log("its monday");
  }
  if(day == "Tuesday")
  {
     console.log("its tuesday");
  }
  
  document.getElementById("table").innerHTML += "<tr>"
  +"<td>"+day+"</td>"
  +"<td>"+day+"</td>"
  + "<td>"+day+"</td>"
  + "<td>"+day+"</td>"
  + "<td>"+day+"</td>"
  + "<td>"+day+"</td>"
  + "<td>"+day+"</td>"
  
                                              "</tr>";


// event + "</td></tr>";

// The below part is to clear the values after the entry is added.
//document.getElementById("Title") = ""
//document.getElementById("Event") = "";
}


     


