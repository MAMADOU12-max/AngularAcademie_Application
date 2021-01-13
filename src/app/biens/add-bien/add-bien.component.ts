import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.css']
})
export class AddBienComponent implements OnInit {

  bienForm: FormGroup | any;
  options: string[] = ['Location','Vente']
  //the forbidden titles
  forbiddenTitle:string[] = ['Hamo','Village','Ville']
  constructor() {

  }

  ngOnInit(): void {
      //  creating form
      this.bienForm = new FormGroup({
           title: new FormControl(null, [
                 Validators.required,
                 Validators.minLength(5),
                 Validators.maxLength(50),
                this.forbiddenValidator.bind(this)
           ]),
           'price': new FormControl(null,[
                Validators.required,
                Validators.min(100),
                this.lastPriceValidator
           ]),
           'description': new FormControl(null),
           category: new FormControl(null), //select
           'image': new FormControl(null),
           'sale': new FormControl('vente'), //radio
            'imageSec': new FormArray([])
      });

      this.bienForm.patchValue({
        'title': ''
      }) ;
  }

  //Async validation funcion
  lastPriceValidator(control: FormControl): Promise<any> | Observable<any> {
     const promise = new Promise<any>((resolve, reject) => {
          setTimeout(()=> {
            if (control.value >10000000) {
              resolve( {'lastPrice': true}) ;
            }
            resolve( null) ;
          }, 2000)
     }) ;
     return promise ;
  }

  //Validator function
  forbiddenValidator(ctrl: FormControl): { [p: string]: boolean } | null {
       if (this.forbiddenTitle.indexOf(ctrl.value) !==  -1) {
            return {'titleForbibben':true}
       }
       return null;
  }

  getImageSecControls() {
    // @ts-ignore
    return (<FormArray>this.bienForm.get('imageSec')) .controls;
  }

  onAddSecImage(){
      const control = new FormControl(null, Validators.required) ;
      // @ts-ignore
    (<FormArray>this.bienForm.get('imageSec')).push(control) ;
  }

  onSubmit() {
    console.log(this.bienForm);
  }

}
