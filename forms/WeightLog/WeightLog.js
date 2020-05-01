btnShow.onclick=function(){
    query = "SELECT * FROM weightlog"
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=alt49968&pass=Bballsoccer24!&database=alt49968&query=" + query)

    if (req.status == 200) { //transit worked.
        results = JSON.parse(req.responseText)
        //console.log(results)
        
    if (results.length == 0)
        NSB.MsgBox("There are no logged weights.")
    else {        
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i]+ "\n"
        txtResults.value = message
    } // end else

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req.status)
}

btnSubmit3.onclick=function(s){
    let d = inptDate.value
    let w = inptWeight2.value
    //console.log(d)
    //console.log(w)
    query = "INSERT INTO weightlog (dateoflog,Weight) VALUES ('" + d + "', '" + w + "')"
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=alt49968&pass=Bballsoccer24!&database=alt49968&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // means the insert succeeded
            NSB.MsgBox(`You have successfully added your weight!`)
          } else
            NSB.MsgBox(`There was a problem adding your weight to the database.`)
            
    } else {
        // transit error
        NSB.MsgBox(`Error: $req.status}`)
  }
}

hmbrMenu5.onclick=function(s){     // when just click the control. 's' is
                                 // the object returned
    if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
    
        // if user clicked on a form name change based on what they chose (s)
        switch(s) {
        case "Search for Food":
            ChangeForm(Search)
            break
        case "Home":
            ChangeForm(Home)
            break
        case "Food Log":
            ChangeForm(FoodLog)
            break
       case "Calorie Calculation":
            ChangeForm(CalMain)
            break
        case "Meal Plan":
            ChangeForm(MealPlan)
            break
        }
    }
}