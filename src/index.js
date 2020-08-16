console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getJson(url, fun){
  fetch(imgUrl).then(res => res.json()).then(json => fun(json));
}

function list(){}

}
