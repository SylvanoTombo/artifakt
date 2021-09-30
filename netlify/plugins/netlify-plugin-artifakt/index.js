const axios = require("axios")

module.exports = {
    async onSuccess () {
        console.log('Axios begin')
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
        console.log('Axios end')
    }
}