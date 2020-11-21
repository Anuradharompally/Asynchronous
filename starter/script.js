'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
<<<<<<< HEAD
 const request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/name/India');
request.send();

request.addEventListener('load',function(){
    const[data]=JSON.parse(this.responseText);
console.log(data);
});
=======
>>>>>>> 546999803e1fd62667239ea79f47058ab58a3ac8
