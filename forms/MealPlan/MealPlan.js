function onXHRLoad2() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    //console.log(apiData)
    
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
