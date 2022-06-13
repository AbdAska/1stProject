const Validation = (values) =>{
    let errors={};
    if(!values.username){
    errors.username="Field must be filled"
    }
     if(!values.username1){
    errors.username1="Field must be filled"
    }
if(!values.password){
    errors.password="Password is required."
} else if (values.password.length< 5){
    errors.password="Password must be longer than 5 characters."
};
if(!values.password1){
    errors.password1="Password is required."
} else if (values.password1.length< 5){
    errors.password1="Password must be longer than 5 characters."
}
if (!values.email){
    errors.email="Email is required."
}else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email="Please enter valid email address."
}
if (values.password != values.password1){
    errors.password2="Both passwords must be identical."
}
// else if (!/\S+@\S+\.\S+/.test(values.email))
//     errors.email="email is invalid"
// }for email
// if (values.password.length< 5)
return errors
}
export default Validation