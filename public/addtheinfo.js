
function insertData() {
  var title = document.getElementById("Title").value;
  var event= document.getElementById("Event").value;
  var time = document.getElementById("Time").value;
  var day = document.getElementById("week-days").value;
 
  if(day == "Monday")
  {
    insert(day);
  }
  else if(day == "Tuesday")
  {
     console.log("its tuesday");
  }
  else if(day == "Wednesday")
  {
    console.log("its Wednesday");
  }
  else if(day == "Thursday")
  {
    console.log("its Thursday");
  }
  else if(day == "Friday")
  {
    console.log("its Friday");
  }
  else if(day == "Satarday")
  {
    console.log("its Satarday");
  }
  else{
    console.log("its Sunday");
  }
  function insert(JSON)
  {
     var day = JSON;
      console.log("the data is inserted"+day);
  }
  document.getElementById("table").innerHTML += "<tr>"
  + "<td>"+day+" "+time+"</td>"
  + "<td>"+day+"</td>"
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


     


