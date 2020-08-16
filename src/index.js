console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
function getJson(url, fun){
  fetch(url).then(res => res.json()).then(json => fun(json.message));
}

function image(json){
    console.log(json)
}

function breedList(json){
  for (const key in json){
    const array = json[key];
    if (array.length>0){
      for (const name of array){
        const li = document.createElement('li');
        li.innerText = `${name}`
        document.getElementById('dog-breeds').appendChild(li);
      }
    }
  }
}
