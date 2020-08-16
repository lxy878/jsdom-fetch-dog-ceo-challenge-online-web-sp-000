console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function getJson(url, fun){
  fetch(imgUrl).then(res => res.json()).then(json => fun(json));
}
