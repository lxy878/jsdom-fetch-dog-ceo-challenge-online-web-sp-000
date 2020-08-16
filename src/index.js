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
    li.style.cursor = "pointer";
    li.addEventListener('click', () => color(li, "#FF6060"))
    ul.appendChild(li);
  }
}

function color(e, c){
  e.style.color = c;
}

function filter(){
  const list = document.getElementById('dog-breeds').children;
  const select = document.querySelector('select#breed-dropdown');
  for(const breed of list){
    if(breed.textContent[0] !== select.value){
      breed.style.display = 'none';
    }
  }
}

document.addEventListener('DOMContentLoaded', () =>{
  getJson(imgUrl, image);
  getJson(breedUrl, breedList)
});
