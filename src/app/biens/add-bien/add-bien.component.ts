import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.css']
})
export class AddBienComponent implements OnInit {

  bienForm: FormGroup ;
  options: string[] = ['Location','Vente']
  constructor() {

  }

  ngOnInit(): void {
      //  creating form
      this.bienForm = new FormGroup({
           title: new FormControl(null, [
                 Validators.required,
                 Validators.minLength(5),
                 Validators.maxLength(50)]),
           'price': new FormControl(null,[
                Validators.required,
                Validators.min(100)]),
           'description': new FormControl(null),
           category: new FormControl(null), //select
           'image': new FormControl(null),
           'sale': new FormControl('vente'), //radio
            'imageSec': new FormArray([])
      });

      this.bienForm.patchValue({
        'title': 'cudtomer'
      }) ;
  }



  getImageSecControls() {
    return (<FormArray>this.bienForm.get('imageSec')) .controls;
  }

  onAddSecImage(){
      const control = new FormControl(null, Validators.required) ;
      (<FormArray>this.bienForm.get('imageSec')).push(control) ;
  }

  onSubmit() {

  }

}
