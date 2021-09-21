$(function(){
    $('#lookup-btn').click((e)=>{
        e.preventDefault();
        $.get("/search",{query:$("#query-text").val()},function(data, status){
            console.log(data);

            data = JSON.parse(data);
            if(!data.length){
                $("#display-area").append("<p>Word Not Found!</p>");
            }
            else{
                let elements = $("<ol>");
                data.forEach(element => {
                    elements.append($("<li>",{text:`(${element.wordtype}) ${element.definition}`}))
                });
                $("#display-area").empty().append(elements);
            }
        })

    })
});