
function getUpdate(){


    var tit = document.getElementById('title').value;
    var des = document.getElementById('description').value;  
    if(localStorage.getItem('itemsJson')==null){
      
    
        ItemJsonArray = [];
        ItemJsonArray.push([tit,des]);
        localStorage.setItem('itemsJson',JSON.stringify(ItemJsonArray));    

    }else{

       
            ItemJsonSTR = localStorage.getItem('itemsJson')
            ItemJsonArray = JSON.parse(ItemJsonSTR)
            ItemJsonArray.push([tit,des]);
            localStorage.setItem('itemsJson',JSON.stringify(ItemJsonArray));   

    }
    update();
}


function update(){

    if(localStorage.getItem('itemsJson')==null){
      
        ItemJsonArray = [];
        localStorage.setItem('itemsJson',JSON.stringify(ItemJsonArray));    
    }else{
        ItemJsonSTR = localStorage.getItem('itemsJson')
        localStorage.setItem('itemsJson',JSON.stringify(ItemJsonArray));   

    }

    //model populate

   let tableBody = document.getElementById("tableBody");
   let str = "";
   ItemJsonArray.forEach( (element,index) => {
       
        str +=`
        <tr>
        <th scope="row">${index +1 }</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button type="button" class="btn btn-primary" onClick="deleted(${index})" >Delete</button></td>
      </tr>
        `;
   }); 
   
   tableBody.innerHTML = str;
   
}



add = document.getElementById("add");
add.addEventListener("click",getUpdate);
update();    

function deleted(indexItem){
    ItemJsonSTR = localStorage.getItem('itemsJson')
    ItemJsonArray = JSON.parse(ItemJsonSTR);
    ItemJsonArray.splice(indexItem,1);
    localStorage.setItem('itemsJson',JSON.stringify(ItemJsonArray));   
    update();  
}
