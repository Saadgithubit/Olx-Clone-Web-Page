
function signIn(){
    const inputField = document.getElementsByTagName('input')
    const email = inputField[0]
    const password = inputField[1]
    
    const users = JSON.parse(localStorage.getItem('users'))
    
    

    var found = false
    for(var i = 0; i < users.length; i++){
        if(users[i].email == email.value && users[i].password == password.value){
            found = true
            alert('log in succesfull')
            window.location.href = '../index.html'
            break
        }

        if(!found){
            alert('invalid email or password')
        }
    }

    // console.log(inputField)
}