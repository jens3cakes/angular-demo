import { Component} from '@angular/core';

@Component({
  //selector will be determined by the router
templateUrl:`./contact.component.html`,
styleUrls: ['./contact.component.scss']
})

export class ContactComponent{
  
  formData: { name:string, email:string} = {
    name:'initial name',
    email:'initial email'
  }

  submitForm(){
    console.log('form data: ', this.formData)
  }
}