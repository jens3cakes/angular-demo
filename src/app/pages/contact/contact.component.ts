import { Component } from '@angular/core';

@Component({
  //selector will be determined by the router
  templateUrl: `./contact.component.html`,
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {

  formData: { name: string, email: string } = {
    name: '',
    email: '',
    
  }

  validName: boolean = false;
  validEmail: boolean = false;

  submitForm() {
    console.log('form data: ', this.formData)
  }

  validateName() {
    const { name } = this.formData;
    if (name) { this.validName = true; }
    else { this.validName = false; }
  }

  validateEmail() {
    const { email } = this.formData;
    if (email) { this.validEmail = true }
    else { this.validEmail = false }
  }
}







    // formData: {
    //   name:string,
    //   email:string
    // }={
    //   name:'',
    //   email:''
    // }