import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder,FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
// import { UsernameValidator } from '../../validator/username';
// import { PasswordValidator } from '../../validator/password.validator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

         public credentialsFG:FormGroup;

  constructor(public navCtrl: NavController,private formBuilder:FormBuilder) {
   

    

  this.credentialsFG=this.formBuilder.group({
     
    Name:['',Validators.compose([Validators.minLength(2),Validators.pattern('[a-zA-Z]*'),
      Validators.required ])],

    username:['',Validators.compose([Validators.minLength(8),Validators.pattern('[a-zA-Z]*'),
      Validators.required ])],

    password:['',Validators.compose([Validators.minLength(6),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), Validators.required ])],
    
     
    AddSkills : this.formBuilder.array([
      this.AddSkillsFields()
   ])


  })

  }

  
   
  AddSkillsFields() : FormGroup
{
   return this.formBuilder.group({
      SkillsName : ['', Validators.required,Validators.pattern('[a-zA-Z]*')],
      SkillsLevel : ['', Validators.required,Validators.pattern('[0-9]*')],
      
   });
}

addNewInputField() : void
{
 
   const control = <FormArray>this.credentialsFG.controls.AddSkills;
   control.push(this.AddSkillsFields());
}

removeInputField(i : number) : void
{
   const control = <FormArray>this.credentialsFG.controls.AddSkills;
   control.removeAt(i);
}
manage(val : any) : void
{
   console.dir(val);
}


}


