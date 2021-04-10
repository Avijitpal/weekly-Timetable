
function insertData() {
  var title = document.getElementById("Title").value;
  var event= document.getElementById("Event").value;
  var time = document.getElementById("Time").value;
  var day = document.getElementById("week-days").value;
  details = "Time:"+time+"<br>"+"Title:"+title+"<br>"+"Event:"+event+"<br>";
  insert(details)
 
  function insert(JSON)
  {
    var details = JSON;
       
     if(day == "Monday")
     {
      document.getElementById("table").innerHTML += "<tr>"
      + "<td>"+details+"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      
                                                  "</tr>";
     }
    else if(day == "Tuesday")
    {
      document.getElementById("table").innerHTML += "<tr>"
      + "<td>"+" " +"</td>"
      + "<td>"+details +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      
                                                  "</tr>";
    }
    else if(day == "Wednesday")
    {
      document.getElementById("table").innerHTML += "<tr>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+details +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      
                                                  "</tr>";
    }
  else if(day == "Thursday")
  {
    document.getElementById("table").innerHTML += "<tr>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+ details +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      
                                                  "</tr>";
  }
  else if(day == "Friday")
  {
    document.getElementById("table").innerHTML += "<tr>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+details+"</td>"
      + "<td>"+" " +"</td>"
      + "<td>"+" " +"</td>"
      
                                                  "</tr>";
  }
  else if(day == "Satarday")
       {
        document.getElementById("table").innerHTML += "<tr>"
        + "<td>"+ " "+"</td>"
        + "<td>"+" " +"</td>"
        + "<td>"+" " +"</td>"
        + "<td>"+" " +"</td>"
        + "<td>"+" " +"</td>"
        + "<td>"+details+"</td>"
        + "<td>"+" "+"</td>"
        
                                                    "</tr>";
       }
       else if(day == "Sunday")
       {
        document.getElementById("table").innerHTML += "<tr>"
        + "<td>"+" "+"</td>"
        + "<td>"+" " +"</td>"
        + "<td>"+" " +"</td>"
        + "<td>"+" " +"</td>"
        + "<td>"+" " +"</td>"
        + "<td>"+" " +"</td>"
        + "<td>"+details+"</td>"
        
                                                    "</tr>";
       }
 
  



// The below part is to clear the values after the entry is added.
//document.getElementById("Title") = ""
//document.getElementById("Event") = "";
}
}


 


