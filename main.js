const onRegister=()=>{
    const username=regName.value
    const userEmail=email.value
    const userPassword=password.value

    console.log(username)

    if(username==""){
        usernameError.innerHTML="Enter your username"
        return
    }
    if(userEmail==""){
        emailError.innerHTML="Enter your email"
        return
    }

    if(userPassword==""){
        passwordError.innerHTML="Enter your password"
        return
    }

    try {
        if(userPassword.length<4){
            passwordError.innerHTML="Password must have four characters"
        }else{
            localStorage.setItem("username",username)
            localStorage.setItem("password",userPassword)
            window.location="login.html"
        }
        
    } catch (error) {
        console.log("Internal Error")
    }

}

const onLogin=()=>{
    const username=loginName.value
    const password=loginPassword.value

    if(username==""){
        loginUserNameError.innerHTML="Enter your username"
        return
    }

    if(password==""){
        loginPasswordError.innerHTML="Enter your password"
        return
    }

    try {
        if(username==localStorage.getItem("username")&&password==localStorage.getItem("password")){
            window.location="index.html"
        }else{
            CredErrror.innerHTML="Invalid credintials"
        }
    } catch (error) {
        console.log("Internal Error")
    }

}

