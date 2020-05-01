let req1 = ""

btnLogin.onclick=function(){
  req1 = Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptNetPass.value)
if (req1.status == 200) {
     ChangeForm(Home)
} else {
     error = (`There was an error, please try again.`)
     NSB.MsgBox(error)
     }
}
btnFoodLog.onclick=function(){
ChangeForm(FoodLog)
  }
  
btnWeightLog.onclick=function(){
ChangeForm(WeightLog)
  }
  
btnCalMain.onclick=function(){
ChangeForm(CalMain)
  }
  
btnSearchFood.onclick=function(){
ChangeForm(Search)
  }
  
btnMealPlanGen.onclick=function(){
ChangeForm(MealPlan)
  }
btnSubmit.onclick=function(){
    let age = Number(inptAge.value)
    let feet = Number(inptFeet.value)
    let inches = Number(inptInches.value)
          height = (12 * feet) + inches
          console.log(height)
    let weight = Number(inptWeight.value)
  
    let femaleCalories = (655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age))
        let fCals = femaleCalories.toFixed(2) 
    let maleCalories = (66.47 + (6.42 * weight) + (12.7 * height) - (6.755 * age))
        let mCals = maleCalories.toFixed(2)  
     
       if (selGender == "Female") {
       modHome.toggle()   // show the modal control
       modHome.value = `Your daily calorie intake to maintain your weight should be ${fCals} calories.`
  } else {
       modHome.toggle()   // show the modal control
       modHome.value = `Your daily calorie intake to maintain your weight should be ${mCals} calories.`
       }
}

Home.onshow=function(){
     let allGender = ["Male","Female", "Transgender"]
     allGender.pop()
     let gender = allGender
     
  selGender.clear()
  for (i = 0; i <= gender.length - 1; i++) {
       selGender.addItem(gender[i])
       }
}

hmbrMenu4.onclick=function(s){     // when just click the control. 's' is
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
       case "Food Log":
            ChangeForm(FoodLog)
            break
        case "Meal Plan":
            ChangeForm(MealPlan)
            break
        }
    }
}
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
var query = ""
var req = ""

function onXHRLoad() {
    let apiData2 = JSON.parse(this.responseText)
    console.log(apiData2)
    //console.log(apiData2.products[0].title)
    for (i = 0; i < 10; i++) {
        //console.log(`${apiData2.products[i].title}`)
        selMeal.addItem(apiData2.products[i].title)
    }
}

function callAPI2(URL2) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
        xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL2)
    
    
       xhttp.setRequestHeader('x-rapidapi-host','spoonacular-recipe-food-nutrition-v1.p.rapidapi.com')
       xhttp.setRequestHeader('x-rapidapi-key','edc7eb4035mshe6375f705bb6efep1b33c9jsn5d2c01d6c528')
        

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}


// change name of button below
btnSearch.onclick=function(){
   meal = inptFood.value
    // url that Postman made with all the parameters embedded into it
    let requestURL2 = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?query=" + meal 
  // call the API calling code above
  callAPI2(requestURL2)
}

btnAdd1.onclick=function(s){
    let m = selMeal.value
    let c = "unknown"
    //console.log(m)
    //console.log(c)
    query = "INSERT INTO foodlog (Meal,Calories) VALUES ('" + m + "', '" + c + "')"
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=alt49968&pass=Bballsoccer24!&database=alt49968&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // means the insert succeeded
            NSB.MsgBox(`You have successfully added the meal!`)
          } else
             NSB.MsgBox(`There was a problem with adding the meal to the database.`)
    } else {
        // transit error
        NSB.MsgBox(`Error: $req.status}`)
  }
}

//  change name of Form below
Search.onshow=function(){
}

hmbrMenu1.onclick=function(s){     // when just click the control. 's' is
                                 // the object returned
    if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
    
        // if user clicked on a form name change based on what they chose (s)
        switch(s) {
        case "Food Log":
            ChangeForm(FoodLog)
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
function onXHRLoad2() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    console.log(apiData)
    
    for (j = 0; j < 3; j++) {
        //console.log(`${apiData.meals[j].title}`)
        
        message = message + apiData.meals[j].title + "\n" + "\n"
        //console.log(message)
    }
    // change name of textArea below
    txtData.value = `Your meal plan is:\n\n${message}`
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
        xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    
    
       xhttp.setRequestHeader('x-rapidapi-host','spoonacular-recipe-food-nutrition-v1.p.rapidapi.com')
       xhttp.setRequestHeader('x-rapidapi-key','edc7eb4035mshe6375f705bb6efep1b33c9jsn5d2c01d6c528')
        

    // make the API request
    xhttp.addEventListener('load', onXHRLoad2)
    xhttp.send()
}


// change name of button below
btnSubmit2.onclick=function(){
    timeFrame = inptTime.value
    calories = inptCalories.value
    diet = inptDiet.value
    exclude = inptExclude.value
    // url that Postman made with all the parameters embedded into it
    let requestURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=" + timeFrame + "&targetCalories=" + calories + "&diet=" + diet + "&exclude=" + exclude
    // call the API calling code above
    callAPI(requestURL)
}

//  change name of Form below
MealPlan.onshow=function(){
}

hmbrMenu3.onclick=function(s){     // when just click the control. 's' is
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
        case "Food Log":
            ChangeForm(FoodLog)
            break
        }
    }
}