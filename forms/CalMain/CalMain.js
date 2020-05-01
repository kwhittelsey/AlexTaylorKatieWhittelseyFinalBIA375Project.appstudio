btnSubmit.onclick=function(){
    let age = Number(inptAge.value)
    let feet = Number(inptFeet.value)
    let inches = Number(inptInches.value)
          height = (12 * feet) + inches
          //console.log(height)
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