const textDescription = document.querySelector("input.description");
const buttonDescription = document.querySelector("button.description");
const list = document.querySelectorAll("ul>li");

buttonDescription.addEventListener("click", () =>{
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
