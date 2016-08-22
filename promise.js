'use strict'

let dataPromise = new Promise(function(resolve, reject) {
  $.get('./data.json')
    .done(function(response) {
      resolve(response)
    })
    .fail(function(error) {
      reject(error)
    })
})

dataPromise.then( data => console.log(data))
