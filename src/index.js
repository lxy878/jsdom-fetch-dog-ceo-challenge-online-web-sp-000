console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
function getJson(url, fun){
  fetch(url).then(res => res.json()).then(json => fun(json.message));
}

function image(json){
  const div = document.getElementById('dog-image-container');
  for (const image of json){
    const img = document.createElement('img');
    img.src = image;
    div.appendChild(img);
  }
}

function breedList(json){
  const ul = document.getElementById('dog-breeds');
  for (const key in json){
    const li = document.createElement('li');
    li.innerText = key
    li.addListener('click', color())
    ul.appendChild(li);
  }
}

function color(){
  element.style.color = hexColor;
}
