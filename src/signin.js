const usersData = JSON.parse(localStorage.getItem('users'))
console.log(usersData)

function signIn(){
    const inputField = document.getElementsByTagName('input')
    const email = inputField[0]
    const password = inputField[1]
    
    
    

    var found = false
    for(let i = 0; i < usersData.length; i++){
        if(usersData[i].email == email.value && usersData[i].password == password.value){
            found = true
            alert('log in succesfull')
            window.location.href = '../index.html'
            break
        }

        if(!found){
            alert('invalid email or password')
            
        }
        if(usersData.length < 1){
            alert('Please Sign Up First')
            break
        }
    }

    // console.log(inputField)
}
