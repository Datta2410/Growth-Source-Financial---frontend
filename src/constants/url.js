let prod=true
let url = ''
if(prod){
    url = "https://gsf-loanapp.herokuapp.com"
}else{
    url = "http://localhost:3001"
}

export default url