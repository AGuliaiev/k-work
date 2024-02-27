
const tokenKey = 'token';
const authService = {
    setToken(token:string):void {
        localStorage.setItem(tokenKey, token)
    },
    getToken(token:string) {
        return localStorage.getItem(tokenKey)
    }
}

export {
    authService
}