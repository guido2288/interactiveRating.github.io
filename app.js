const cardSubmit = document.querySelector('.card');
const submitBtn = document.querySelector('.btn-subm');
const tksCard = document.querySelector('.cardTksNodisplay');
const stars = document.querySelectorAll('.stars');
const result = document.getElementById('result');

let selected; 



const deleteSelected = () => {
   for (let i = 0; i < stars.length; i++) {
      stars[i].classList.remove('star-selected')
   }
}


for (let i = 0; i < stars.length; i++) {
   
   stars[i].addEventListener('click', (e) => {

      if(stars[i] !== selected && selected != null) {
         deleteSelected();     
      }

      stars[i].classList.add('star-selected');
      selected = stars[i].value;
      console.log(selected)
   })
   
}; 



const submit = ( e ) => {

   if(selected != null) {
      result.innerHTML = selected;
      cardSubmit.className = 'noDisplay';
      tksCard.className = 'cardTks';

   }

}

submitBtn.addEventListener('click' , submit);



