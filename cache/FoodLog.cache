btnAdd2.onclick=function(){
    let meal = inptMeal1.value
    let calories = inptCalories1.value
    let query = "INSERT INTO foodlog (Meal,Calories) VALUES ('" + meal + "', '" + calories + "')"
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=alt49968&pass=Bballsoccer24!&database=alt49968&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // means the insert succeeded
            modMessage4.toggle()   // show the modal control
            modMessage4.value = "You have successfully added the meal!"
          } else
            modMessage5.toggle()   // show the modal control
            modMessage5.value = "There was a problem with adding the meal to the database."
            
    } else {
        // transit error
        modMessage6.toggle()   // show the modal control
        modMessage6.value = "Error: " + req.status
  }
}

hmbrMenu2.onclick=function(s){     // when just click the control. 's' is
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
        case "Weight Log":
            ChangeForm(WeightLog)
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