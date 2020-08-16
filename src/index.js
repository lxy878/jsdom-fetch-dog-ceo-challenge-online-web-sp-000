console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getJson(url, fun){
  fetch(url).then(res => res.json()).then(json => fun(json.message));
}

function list(json){
  console.log(json);
}
