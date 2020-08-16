console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getJson(url, fun){
  fetch(url).then(res => res.json()).then(json => fun(json.message));
}

function breedList(json){
  const li = document.createElement('p');
  li.innerText = 'dfdfdf'
  document.getElementById('dog-breeds').appendChild(li);
  // console.log(json);
}
