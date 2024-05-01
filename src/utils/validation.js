export const validateEmailAndPwSignIn = (email, password) =>{
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); // returns true if email is validated
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // console.log("In SignIn func")

    if(!emailValidate) return "Invalid Email";
    if(!passwordValidate) return "Password too weak";

    return null;
}

export const validateEmailAndPwSignUp = (email, password, confirmPw)=>{
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    // console.log("In SignUp func")

    if(!emailValidate) return "Invalid Email";
    if(!passwordValidate) return "Password too weak";

    if(confirmPw && (password !== confirmPw)) return "Passwords don't match";

    return null;
}