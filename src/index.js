console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl).then(res => res.json()).then(json => console.log(json));

function message(json){
  console.log(json.message);
}
