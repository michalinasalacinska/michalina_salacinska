import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { FieldModel } from 'src/app/models/field-model';

@Component({
  selector: 'sl-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.scss']
})
export class AddElementComponent implements OnInit {
  @Input() formFields:FieldModel[] = [];
  @Input() slug: string; //for json-server route
  @Input() redirectTo: string; //where to redirect after successfully sending data

  dataStructure = {};
  sendingAttempt = false;
  sending = false;
  error = '';

  constructor(private api: ApiService, private router: Router) {}

  addElement(e) {
    e.preventDefault();

    this.sendingAttempt = true;
    let noData: any = false; //workaround

    let len = this.formFields.length;

    //little bit faster than forEach method and way easier to break, but unfortunately more messy
    for (let i = 0; i < len; i++) {
      let tempEl = this.formFields[i];
      if (tempEl.value.length < 1 && tempEl.required === true) {

        //I think that there is no point in adding focus on radio buttons, so i only add focus method on inputs and selects
        let name = 'field' + i;
        if (document.getElementById(name)) {
          document.getElementById(name).focus();
        }

        noData = true;
        break;
      }

      if (tempEl.labelToLowerCase) {
        this.formFields[i].value = tempEl.value.toLowerCase();
      }
      this.dataStructure[this.formFields[i].fieldName] = tempEl.value;
    }

    if (noData !== true) {
      this.sending = true;

      this.api.addElement(this.dataStructure, this.slug).subscribe(res => {
        this.sending = false;
        if (res[0]) {
          if (res[0] === 500) {
            this.error = 'Error occured. Try sending again.';
          }
        } else {
          this.error = '';
          this.router.navigate([this.redirectTo]);
        }
      });
    }
  }

  ngOnInit() {}
}
