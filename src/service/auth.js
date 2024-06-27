import http from './config'
const auth = {
    sign_in: (data)=> http.post("/auth/login",data),
    sign_up: (data)=> http.post("/auth/register", data),
    verify_code: (data)=> http.post("/auth/verify", data),
    forget_password: (data)=>http.post("/auth/verify-forgot-password"),
}
export default auth