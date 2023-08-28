 let tmp =[]
const loadcard= async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools') 
    const data = await res.json() 
    tmp = data
    console.log(data) 
    cardShow(data, true) 
    

}  

const cardShow = (data, slice)=>{
   const cardContainer = document.getElementById('card-container')  
 cardContainer.innerHTML =''
   
 if(slice == false){
  document.getElementById('show-all-container').classList.add('hidden')
 } 
 else{
  document.getElementById('show-all-container').classList.remove('hidden')
 }


      data.data.tools.slice(0,slice ?6 :data.data.tools.length ).forEach(d => {
        console.log(d)  
       const modalContainer =document.getElementById('modal-container') 
       
      const div = document.createElement('div') 
      div.setAttribute('onclick', 'my_modal_3.showModal()'); 
       div.classList='card bg-base-100 shadow-xl p-4' 
        div.innerHTML=` 
             <figure><img src="${d.image}" alt="Shoes" /></figure>
                     <div class="card-body">
                       <h2 class="card-title">
                         Feature 
                         <div class="badge badge-secondary">NEW</div>
                       </h2>
                       <p> ${d.id}. ${d.name}</p>
                       <p>${d.description ? d.description :'Not available'}</p>
                       <div class="card-actions justify-end">
                         <div class="badge badge-outline"></div> 
                         <div class="badge badge-outline"></div>
                       </div>
                     </div>
                   </div>

        ` 

   cardContainer.appendChild(div) 

  

   });
    
   
}
 
const showMore =()=>{
  cardShow(tmp, false)
} 


loadcard()