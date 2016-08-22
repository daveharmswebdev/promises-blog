'use strict'

console.log('error.js')

let data
$.get('./data.json', function(response) {
  data = response
  console.log(response, 'this happened at ' + Date.now())
})
console.log(data, 'this happened at ' + Date.now())
