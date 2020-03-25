$(document).ready(function() {  
    var tabstrip = $("#tabstrip").kendoTabStrip().data("kendoTabStrip"); 
    getProducts();  
    getOrders();
   getContoso();
   getNorthWind();
}); 

function getProducts() { 
$.ajax({ 
   method: 'GET', 
   url: "http://labsp16app:2101/Beazley/_api/web/lists/Getbytitle('BBList')/items?&$select=ID,Title,MatterDevelopments&$filter=SaveButtonClicked%20eq%20null&$top=1000", 
   headers: { 
       "accept": "application/json;odata=verbose",
       "content-type": "application/json;odata=verbose",
   },
    success: mySuccHandler,
   error: myErrHandler
});

function mySuccHandler(response) {
console.log(response);

try{
    
 // tabstrip to kendo page.
$("#products").kendoGrid({

//toolbar:["excel","save","cancel","search" ],

dataSource: {
   data: response.d.results,
  
   pageSize: 20,
   

schema:{
   


   model: {
      id:"Title",
       fields:{
          
          Title: {type:"string"},
          MatterDescription: {type:"string"}
          
       }
   }
},
},

filterable:true,
sortable: true,
groupable: true,
pageable: true,
batch:true,
navigatable:true,
selectable: true,
toolbar:["excel","search" ],
columns : [
    {
     field: "ID",
     title: "SharePoint ID",
    // template: '<a href="\\#">#= ID#</a>'
    template: '<a target="_blank" href="http://labsp16app:2101/beazley/Lists/BBList/EditForm.aspx?ID=#= ID#">Click here to Complete</a>'
},
    
    
    {
    field: "Title",
    title:"Matter",
    
    },

{
field:"MatterDevelopments",
title:"Matter Descriptions",
},
],
});


}
catch(e){
alert(e.message);
}

}
function myErrHandler(data, errMessage) {    
alert("Error: " + errMessage);    
}
tabstrip.one("activate", function() {
 products.resize();
  });
}
getOrders(); //next grid

function getOrders() { 
    $.ajax({ 
       method: 'GET', 
       url: "http://labsp16app:2101/Beazley/_api/web/lists/Getbytitle('BBList')/items?&$select=ID,Title,MatterDevelopments&$filter=AssignmentType%20eq%20%27Complex%27&$top=1000", 
       headers: { 
           "accept": "application/json;odata=verbose",
           "content-type": "application/json;odata=verbose",
       },
        success: mySuccHandler,
       error: myErrHandler
    });
    
    function mySuccHandler(response) {
    console.log(response);
    
    try{
        
     // tabstrip to kendo page.
    $("#orders").kendoGrid({
    
    //toolbar:["excel","save","cancel","search" ],
    
    dataSource: {
       data: response.d.results,
      
       pageSize: 20,
       
    
    schema:{
       
    
    
       model: {
          id:"Title",
           fields:{
              
              Title: {type:"string"},
              MatterDescription: {type:"string"}
              
           }
       }
    },
    },
    
    filterable:true,
    sortable: true,
    groupable: true,
    pageable: true,
    batch:true,
    navigatable:true,
    selectable: true,
    toolbar:["excel","search" ],
    columns : [
        
        
        
        {
        field: "Title",
        title:"Matter",
        
        },
    
    {
    field:"MatterDevelopments",
    title:"Matter Descriptions",
    },
    ],
    });
    
    }
    catch(e){
    alert(e.message);
    }
    getContoso(); //next grid
    
    }
    function myErrHandler(data, errMessage) {    
    alert("Error: " + errMessage);    
    }
    tabstrip.one("activate", function() {
        orders.resize();
      });
     
    }
 //next grid
function getContoso() { 
        $.ajax({ 
           method: 'GET', 
           url: "http://labsp16app:2101/Beazley/_api/web/lists/Getbytitle('BBList')/items?&$select=ID,Title,MatterDevelopments&$filter=AssignmentType%20eq%20%27Portfolio%27&$top=1000", 
           headers: { 
               "accept": "application/json;odata=verbose",
               "content-type": "application/json;odata=verbose",
           },
            success: mySuccHandler,
           error: myErrHandler
        });
        
        function mySuccHandler(response) {
        console.log(response);
        
        try{
            
         // tabstrip to kendo page.
        $("#contoso").kendoGrid({
        
        //toolbar:["excel","save","cancel","search" ],
        
        dataSource: {
           data: response.d.results,
          
           pageSize: 20,
           
        
        schema:{
           
        
        
           model: {
              id:"Title",
               fields:{
                  
                  Title: {type:"string"},
                  MatterDescription: {type:"string"}
                  
               }
           }
        },
        },
        
        filterable:true,
        sortable: true,
        groupable: true,
        pageable: true,
        batch:true,
        navigatable:true,
        selectable: true,
        toolbar:["excel","search" ],
        columns : [
            
            
            
            {
            field: "Title",
            title:"Matter",
            
            },
        
        {
        field:"MatterDevelopments",
        title:"Matter Descriptions",
        },
        ],
        });
        
        }
        catch(e){
        alert(e.message);
        }
       getNorthWind();
        }
        function myErrHandler(data, errMessage) {    
        alert("Error: " + errMessage);    
        }
        tabstrip.one("activate", function() {
            contoso.resize();
          });
        }
      
        //next grid NorthWind();
        
        function getNorthWind() { 
            $.ajax({ 
               method: 'GET', 
               url: "http://labsp16app:2101/Beazley/_api/web/lists/Getbytitle('BBList')/items?&$select=ID,Title,MatterDevelopments&$filter=AssignmentType%20eq%20%27Crime%27&$top=1000", 
               headers: { 
                   "accept": "application/json;odata=verbose",
                   "content-type": "application/json;odata=verbose",
               },
                success: mySuccHandler,
               error: myErrHandler
            });
            
            function mySuccHandler(response) {
            console.log(response);
            
            try{
                
             // tabstrip to kendo page.
            $("#northwind").kendoGrid({
            
            //toolbar:["excel","save","cancel","search" ],
            
            dataSource: {
               data: response.d.results,
              
               pageSize: 20,
               
            
            schema:{
               
            
            
               model: {
                  id:"Title",
                   fields:{
                      
                      Title: {type:"string"},
                      MatterDescription: {type:"string"}
                      
                   }
               }
            },
            },
            
            filterable:true,
            sortable: true,
            groupable: true,
            pageable: true,
            batch:true,
            navigatable:true,
            selectable: true,
            toolbar:["excel","search" ],
            columns : [
                
                
                
                {
                field: "Title",
                title:"Matter",
                
                },
            
            {
            field:"MatterDevelopments",
            title:"Matter Descriptions",
            },
            ],
            });
            
            }
            catch(e){
            alert(e.message);
            }
           
            }
            function myErrHandler(data, errMessage) {    
            alert("Error: " + errMessage);    
            }
            tabstrip.one("activate", function() {
                northwind.resize();
              });
            }
          
    