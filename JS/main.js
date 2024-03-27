var counter = 4;

function clicked(){

    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var amount = document.getElementById("amount").value;
    var table = document.getElementById("table");
    var btnn=document.getElementById("btn").innerHTML;

    

    var Service = {Name: name, Address:address, Amount:amount };
    var Button = {btnnn:btnn};

   // const select = document.getElementById("selectors").getElementsByTagName("option").innerHTML;
    if(name == "" || address =="" && amount == ""){
        alert("please fill up the field")
        
        
    }else{


        table.innerHTML+=`<td>${counter++}</td> <td>${Service.Name}</td> <td>${Service.Address}</td>
        <td>$${Service.Amount}</td> <td>${Button.btnnn}</td>`

       function myBtn(){
           var v = document.getElementsByTagName("button").className += (" newclass");
            
        }
        myBtn(v);

        document.getElementById("name").value = "";
        document.getElementById("address").value = "";
        document.getElementById("amount").value = "";

        
        
          
    }
    

    
 

}
// function del(delet){
//     table.innerHTML-=`<td>${counter}</td> <td>${Service.Name}</td> <td>${Service.Address}</td>
//     <td>#${Service.Amount}</td> <td>${Button.btnnn}</td>`
// }
// function del(this){
//     table.remove()

// }


 