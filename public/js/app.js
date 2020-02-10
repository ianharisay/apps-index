'use strict'



let getListData = async () => {
    let config = {
        method: 'GET',
        url: 'js/links.json',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return await axios(config)

}

getListData()
    .then((response) => {
        console.log(response.data)
    })
// console.log(getListData())

// fetch(myRequest)
//     .then((resp) => {
//          console.log(resp.json())
//     })
    // .then((data) => {
    //     console.log(data)
    // })