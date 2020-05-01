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
