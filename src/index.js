console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let j;
function getJson(url, fun){
  fetch(url).then(res => res.json()).then(json => fun(json.message));
}

function breedList(json){
  const li = document.createElement('li');
  j=json;
  for (const key in json){
    const array = json[key]
  }
  li.innerText = 'dfdfdf'
  document.getElementById('dog-breeds').appendChild(li);
  console.log(json);
}
