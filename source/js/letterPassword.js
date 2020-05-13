// require ('bootstrap');

class Password {
  constructor(password, submit) {
    this.password = password;
    this.submit = submit;
    this.modalFormImg = document.querySelector('#modalFormImg');
  }

  // Properties
  validatePassword() {
   const rightPassword = 'raprapiscool';
   const passwordValue = this.password.value;
   const errorClass = 'modal-form__error--show';
   const successClass = 'modal-form__success--show';
   const messageSpan = document.querySelector('#formMessage');
   /* Span Messages */
   const messageSuccess = 'Galing mo Besh! <br> Redirecting ...';
   const messageError = 'Mali password mo besh!';
   



   /* if Password is not equal to the right password */
   if(passwordValue != rightPassword) {
     this.setMessage(messageSpan, messageError, errorClass);

    /* Changes Hello Kitty's mood */
    this.modalFormImg.src = './images/angry-kitty.png';

     setTimeout(() => {
      messageSpan.classList.remove(errorClass);
       this.modalFormImg.src = './images/hello-kitty.png';
     }, 3000);
   }else{
     
    this.setMessage(messageSpan, messageSuccess, successClass);

    setTimeout(() => {
      messageSpan.classList.remove(successClass);

      /* removes the blur effect of container */
      const letterContainer = document.querySelector('#letterContainer');
      letterContainer.classList.remove('letter--blur');

      /* removes the modal */
      const modal = document.querySelector('#modalFormOverlay');
      modal.classList.add('modal--hide');
    }, 2000);
    
    

   }
   /* End of Statement */

   
   
   
  }

  submitPassword(){
    const form = document.querySelector('#form');
    form.addEventListener('submit', ()=> {   

     this.validatePassword();
          
    });

    this.password.addEventListener('keydown', () => {
      this.validatePassword();
    });

  }
  
  setMessage(target, message, classname){
      console.log(target);
      
      target.classList.add(classname);
      target.innerHTML = message;


  }

}



