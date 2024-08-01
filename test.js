

   fetch('https://apistudents-2.onrender.com/')
   .then(response => response.json())
   .then(json =>{ 
    console.log(json)
    let student=document.getElementById('students')
    json.forEach(std => {
        let li=document.createElement('li')
        li.innerHTML=std.name 
        li.addEventListener('click',()=>{
            let span=document.createElement('span') 
            span.innerHTML=`  age:${std.age},id:${std.id}`
            span.style.color="red"
            li.appendChild(span)
            } )
        student.appendChild(li)
        
    });

    

    
    
   });


 
