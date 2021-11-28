let button=document.querySelector(".btn")
let input = document.querySelector("#upload")
let images = document.querySelector(".row")

button.onclick=function(){
    input.click();
}

input.addEventListener("change",(e)=>{
    let files =Array.from(e.target.files)
    files.forEach(file=>{
        PixShower(file)
    })
})

function PixShower(file){
    if (file.type !== "image/png" && file.type !== "image/jpeg" && file.type !== "image/jpg"){
        alert("Choose only image")
        return;
    }

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file)

    fileReader.addEventListener("loadend",()=>{
        let col12 = document.createElement("div")
        col12.className="col-lg-12  bg-dark text-white mt-5"
        let img =document.createElement("img")
        let btn = document.createElement("button")
        btn.className="btn btn-warning ms-5   "
        btn.innerText="delete"
        img.src =fileReader.result
        img.style.width="100px";
        

        btn.onclick=function(){
            let conf= confirm("Are you sure?")
            if(conf){
                col12.remove();
            }
        }
         

        col12.append(img)
        
        col12.append(btn)
        images.appendChild(col12)
        

        


         
    })
}

let DropZone =document.querySelector(".DropZone")




DropZone.addEventListener("dragover",(e)=>{
    e.preventDefault();

})

DropZone.addEventListener("drop",(e)=>{
    e.preventDefault();

    let files =Array.from(e.dataTransfer.files)

    files.forEach(file=>{
        PixShower(file)
        

    })


})
