import { Navigate } from "react-router-dom"
const ProtectedRoute =({childern,user}) =>{
if(!user){
    return <Navigate to='/bjbjb'/>
}
return childern
}
export default ProtectedRoute