
const title = document.getElementById('title');
const textContent = document.getElementById('textContent');
const pharmacy = document.getElementById('pharamcy');
const dentist = document.getElementById('dentist');
const pediatrics = document.getElementById('pediatrics');
const laboratory = document.getElementById('laboratory');
const orthopedic = document.getElementById('orthopedic');
const heamatology = document.getElementById('heamatology');
const radiology= document.getElementById('radiology');


pharmacy.addEventListener('click', ()=> {
      title.innerText = "About Pharmacy"
      textContent.innerText = "This Is The Pharmacy, How Can We Help?"
})
dentist.addEventListener('click', ()=> {
      title.innerText = "About dentist"
      textContent.innerText = " This Is The Dental Department, How Can We Help?"
})
pediatrics.addEventListener('click', ()=> {
      title.innerText = "About  pediatrics"
      textContent.innerText = " This Is The  Pediatric Department, How Can We Help?"
})
 
laboratory.addEventListener('click', ()=> {
      title.innerText = "About laboratory"
      textContent.innerText = " This Is The Laboratory , How Can We Help?"
})
orthopedic.addEventListener('click', ()=> {
      title.innerText = "About Orthopedic"
      textContent.innerText = " This Is The Orthopedic Department, How Can We Help?"
})
heamatology.addEventListener('click', ()=> {
      title.innerText = "About Heamatology"
      textContent.innerText = " This Is The Heamatology Department, How Can We Help?"
})
radiology.addEventListener('click', ()=> {
      title.innerText = "About Radiology"
      textContent.innerText = " This Is The Radiology Department, How Can We Help?"
})



// Javascript For Form

const appointmentForm = document.getElementById('appointmentForm');

const msg = document.getElementById('message');

appointmentForm.addEventListener('submit' , (e)=>{
            e.preventDefault();

            let form = new FormData(e.target)
            let userData = Object.fromEntries(form)

            const {name, phonenumber, email, doctor, dept } = userData
         
            

      //    validation  

      if(!name || !phonenumber || !email || !doctor || !dept){
               msg.innerText = `All Fields Are Required`
      }
      else{
             msg.innerText = ''
      }



  
})

