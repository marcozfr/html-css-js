const textDescription = document.querySelector("input.description");
const buttonDescription = document.querySelector("button.description");

buttonDescription.addEventListener("click", () =>{
    let list = document.querySelectorAll("ul>li");
    let content = textDescription.value;
    let splitContent = content.split(":");
    for(let i = 0 ; i < list.length ; i++){
      if (list[i].textContent === splitContent[0]){
          if(splitContent[2] !== undefined){
              list[i].innerHTML = "<p style='color:" + splitContent[2]+ "' >"+splitContent[1]+"</p>";
          }else{
              list[i].textContent = splitContent[1];
          }
          break;
      }
    }
})

const addItem = document.querySelector('input.liElementText');
const addItemButton = document.querySelector('button.liElementButton');

addItemButton.addEventListener('click', ()=>{
  let ul = document.getElementsByTagName('ul')[0];
  let liElement = document.createElement('li');
  liElement.textContent = addItem.value;
  ul.appendChild(liElement);
  addItem.value = '';
});

const removeItemButton = document.querySelector('button.removeLiElementButton');

removeItemButton.addEventListener('click', ()=>{
  let ul = document.getElementsByTagName('ul')[0];
  let lastLi = document.querySelector('li:last-child');
  let liElement = ul.removeChild(lastLi);
})
