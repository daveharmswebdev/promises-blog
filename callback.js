'use strict'

function getJson(callback) {
  $.get('./data.json', function(response) {
    console.log('from $.get', response)
    callback(response)
  })
}

function printData(data) {
  console.log('from callback', data)
}

getJson(printData)
