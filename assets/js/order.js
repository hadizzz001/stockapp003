 
const urll= "http://localhost:10000"; 

if(state == 1){
    if(mac == cmac && tabID == tid){  

    

    if(window.location.pathname == "/order" || window.location.pathname == "/order1"){
        $ondelete = $(".table tbody td a.delete");
        $ondelete.click(function(event){ 
            $(".delete").hide();
            var datas = $(this).attr("data-id");
            var oid = $(this).attr("data-oid");
            const myArray = datas.split(",");
            let id = myArray[0];
            let qtyy = myArray[1];
            let iid = $.trim(myArray[2]); 

            var request1 = {
                "url" : `${urll}/api/login/63f2585545933bb8d5c0b8f9`,
                "method" : "GET"
            }   
                
            $.ajax(request1).done(function(response){  
            if(response.login == 1){  
                if(mac == response.mac && tabID == response.tid ){ 
            

  
                        var request3 = {
                            "url" : `${urll}/api/users/${id}`,
                            "method" : "DELETE"
                        }

                        if(confirm("Do you really want to delete this record?")){ 
                        $.ajax(request3).done(function(response){ 
                            
                            var request = {
                                "url" : `${urll}/api/items/${iid}`,
                                "method" : "GET"
                            }   
                            $.ajax(request).done(function(response){  

                            var data = {
                                instock: parseInt(qtyy) + parseInt(response.instock)
                            }  
                            var request2 = {
                                "url" : `${urll}/api/items/${iid}`,
                                "method" : "PUT",
                                "data" : data
                            } 
        
                            $.ajax(request2).done(function(response){   
                            var request4 = {
                                "url" : `${urll}/api/oid/${oid}`,
                                "method" : "GET"
                            }  
            
                            $.ajax(request4).done(function(responsed){   
                                if(responsed == 0){ 

                                    var request5 = {
                                        "url" : `${urll}/api/did/${oid}`,
                                        "method" : "DELETE"
                                    }
            
                                    $.ajax(request5).done(function(response){
                                        alert("Order Deleted Successfully! "); 
                                        location.reload();
                                        window.location.replace("/order");

                                    });

                                } else{
                                    alert("Order Deleted Successfully! "); 
                                    location.reload();
                                    window.location.replace("/order");
                                }
                                
                            });  
                        })
                    })
                });
                    } else $(".delete").show();
                    
                 
                  

            

                 

        }else if(entered == null){ 
            alert("Application already in use , please logout to continue..."); 
            window.location.replace("/auth?in=1");
        } 
        }else if(response.login == 0 && entered == null) {  
            alert("Please login to continue");
            window.location.replace("/auth?in=1");
        }

        }); 

        })
        
    }












 








$("#searchform").submit(function(event){
    var searchText =  $("#searchText").val();     
    window.location.replace(`/order1?name=${searchText}`);
    return false;  
});






    


     
 
 

} else if(entered == null){
    alert("Application already in use , please logout to continue..."); 
    window.location.replace("/auth?in=1");
}





























} 

else if(state == 0 && entered == null) { 
    alert("Please login to continue");
    window.location.replace("/auth?in=1");
}
