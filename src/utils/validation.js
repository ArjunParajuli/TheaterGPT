export const validateEmailAndPwSignIn = (email, password) =>{
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); // returns true if email is validated
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!emailValidate) return "Invalid Email";
    if(!passwordValidate) return "Password too weak";

    return null;
}

export const validateEmailAndPwSignUp = (email, password, name, confirmPw)=>{
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const nameValidate = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);

    if(!nameValidate) return "Enter Valid Name";
    if(!emailValidate) return "Invalid Email";
    if(!passwordValidate) return "Password too weak";

    if(password !== confirmPw) return "Passwords don't match";

    return null;
}