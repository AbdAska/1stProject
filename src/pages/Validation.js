const Validation = (values) =>{
    let errors={};
    if(!values.username){
    errors.username="Username is required"
    }
if(!values.password){
    errors.password="Password is required"
}
// else if (!/\S+@\S+\.\S+/.test(values.email)){
//     errors.email="email is invalid"
// }for email
// if (values.password.length< 5)
return errors
}
export default Validation