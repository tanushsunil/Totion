function add(){
    let input = document.getElementById("input_box").value
    let tasks = document.getElementsByClassName("tasks")[0]
    let categories = document.getElementsByClassName("categorydiv")[0]
    
    let personal = document.getElementById("personal").checked
    let business = document.getElementById("business").checked
    let other = document.getElementById("other").checked

    if(personal==true){
      let p = document.createElement("p")
      let tag = document.createElement("p")
      let i = document.createElement("i")
      i.classList.add("fa-sharp")
      i.classList.add("fa-solid")
      i.classList.add("fa-user-astronaut")
      i.classList.add("icon")
      i.style.color="white"
      tag.classList.add("tag")
      tag.appendChild(i)

      let div = document.createElement("div")
      div.style.display="flex"
      div.style.justifyContent="center"
      tag.style.marginTop="10px"
      p.classList.add('todos')
      p.innerText=input
      
      div.appendChild(p)
      div.appendChild(tag)
      tasks.appendChild(div)


    }
    else if(business==true){
      let p = document.createElement("p")
      let tag = document.createElement("p")
      let i = document.createElement("i")
      i.classList.add("fa-sharp") 
      i.classList.add("fa-solid")
      i.classList.add("fa-bolt")
      i.classList.add("icon")
      i.style.color="white"
      tag.classList.add("tag")
      tag.appendChild(i)

      let div = document.createElement("div")
      div.style.display="flex"
      div.style.justifyContent="center"
      tag.style.marginTop="10px"
      p.classList.add('todos')
      p.innerText=input
      
      div.appendChild(p)
      div.appendChild(tag)
      tasks.appendChild(div)
    }
    else{
        let p = document.createElement("p")
        let tag = document.createElement("p")
        let i = document.createElement("i")
        i.classList.add("fa-solid")
        i.classList.add("fa-user-secret") 
        i.classList.add("icon")
        i.style.color="white"
        tag.classList.add("tag")
        tag.appendChild(i)
  
        let div = document.createElement("div")
        div.style.display="flex"
        div.style.justifyContent="center"
        tag.style.marginTop="10px"
        p.classList.add('todos')
        p.innerText=input
        
        div.appendChild(p)
        div.appendChild(tag)
        tasks.appendChild(div)
    }
   }


function clear1(){
    document.getElementsByClassName("tasks")[0].innerText=""
   }
    


