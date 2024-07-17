const urll= "http://localhost:10000"; 
 
if(state == 1){  
    if(mac == cmac && tabID == tid ){ 


        $("#add_user").submit(function(event){ 
            event.preventDefault();
            var unindexed_array = $(this).serializeArray();
            console.log(unindexed_array)
            var data = {}
            $.map(unindexed_array, function(n, i){
                data[n['name']] = n['value']
                
            });  



            var request1 = {
                "url" : `${urll}/api/login/63f2585545933bb8d5c0b8f9`,
                "method" : "GET"
            }   
                
            $.ajax(request1).done(function(response){  
            if(response.login == 1){  
                if(mac == response.mac && tabID == response.tid ){  
 

            var request2 = {
                "url" : `${urll}/api/items`,
                "method" : "POST",
                "data" : data
            }  

            $.ajax(request2).done(function(response){
                alert("Item added Successfully!");
                window.location.replace("/");
            }); 


            }else if(entered == null){ 
                alert("Application already in use , please logout to continue..."); 
                window.location.replace("/auth?in=1");
            } 
            }else if(response.login == 0 && entered == null) {  
                alert("Please login to continue");
                window.location.replace("/auth?in=1");
            } 
        }); 
        });

        
        $("#update_item").submit(function(event){
                    $(".btn").prop('disabled', true);  
                    event.preventDefault();
                    var unindexed_array = $(this).serializeArray();
                    var data = {}
                    $.map(unindexed_array, function(n, i){
                        data[n['name']] = n['value']
                    })
                    

                    var request1 = {
                        "url" : `${urll}/api/login/63f2585545933bb8d5c0b8f9`,
                        "method" : "GET"
                    }   
                        
                    $.ajax(request1).done(function(response){  
                    if(response.login == 1){  
                        if(mac == response.mac && tabID == response.tid ){ 
                    var request = {
                        "url" : `${urll}/api/items/${data.id}`,
                        "method" : "PUT",
                        "data" : data
                    }

                    $.ajax(request).done(function(response){
                        alert("Item updated successfully!");
                        window.location.replace("/");
                    })
                    
                    }else if(entered == null){ 
                        alert("Application already in use , please logout to continue..."); 
                        window.location.replace("/auth?in=1");
                    } 
                    }else if(response.login == 0 && entered == null) {  
                        alert("Please login to continue");
                        window.location.replace("/auth?in=1");
                    }
                    
                })
            })




        if(window.location.pathname == "/" || window.location.pathname == "/index1"){


                        $ondelete = $(".table tbody td a.delete");
                        $ondelete.click(function(){  
                            $(".delete").hide(); 
                            var id = $(this).attr("data-id"); 
                            var request1 = {
                                "url" : `${urll}/api/login/63f2585545933bb8d5c0b8f9`,
                                "method" : "GET"
                            }   
                                
                            $.ajax(request1).done(function(response){  
                            if(response.login == 1){  
                                if(mac == response.mac && tabID == response.tid ){  

                            var request = {
                                "url" : `${urll}/api/items/${id}`,
                                "method" : "DELETE"
                            } 
                            if(confirm("Do you really want to delete this record?")){
                                $.ajax(request).done(function(response){
                                    alert("Item deleted successfully!");
                                    location.reload();
                                    window.location.replace("/");
                                })
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







        $("#update_delivery").submit(function(event){ 
            $(".btn").prop('disabled', true);   
            event.preventDefault();
            var unindexed_array = $(this).serializeArray();
            var data = {}
            $.map(unindexed_array, function(n, i){
                data[n['name']] = n['value']
            })
            

            var request1 = {
                "url" : `${urll}/api/login/63f2585545933bb8d5c0b8f9`,
                "method" : "GET"
            }   
                
            $.ajax(request1).done(function(response){  
            if(response.login == 1){  
                if(mac == response.mac && tabID == response.tid ){ 
            var request = {
                "url" : `${urll}/api/delivery/${data.id}`,
                "method" : "PUT",
                "data" : data
            }

            $.ajax(request).done(function(response){
                alert("Updated successfully!");
                window.location.replace("/delivery");
            })
            
            }else if(entered == null){ 
                alert("Application already in use , please logout to continue..."); 
                window.location.replace("/auth?in=1");
            } 
            }else if(response.login == 0 && entered == null) {  
                alert("Please login to continue");
                window.location.replace("/auth?in=1");
            }
            
        })
    })






    $("#searchform").submit(function(event){  
        var searchText =  $("#searchText").val(); 
        window.location.replace(`/index1?name=${searchText}`);  
        return false;
});




$("#searchform1").submit(function(event){   
    var searchText =  $("#searchText1").val(); 
    window.location.replace(`/index1?name=${searchText}`);  
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

 