'use strict'

function getJson(callback) {
  $.get('./data.json', function(response) {
    console.log(response)
    callback(response)
  })
}

function printData(data) {
  console.log('from callback.js', data)
}

getJson(printData)
