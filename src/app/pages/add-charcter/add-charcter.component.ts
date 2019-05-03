import { Component, OnInit } from '@angular/core';
import { DataModel } from '../../models/data-model';
import { ApiService } from 'src/app/api.service';
import { TypesEnum } from 'src/app/models/types-enum';
import { FieldModel } from 'src/app/models/field-model';

@Component({
  selector: 'sl-add-charcter',
  templateUrl: './add-charcter.component.html',
  styleUrls: ['./add-charcter.component.scss']
})
export class AddCharcterComponent implements OnInit {
  redirectLink = '';
  fields: FieldModel[] = [];
  slug = '/characters';
  
  constructor(private api: ApiService) {}

  listToOptions(obj) {
    this.api.getSpecies().subscribe((res: string[]) => {
      obj.options = res;
    });
  }

  ngOnInit() {
    const fieldModel = new DataModel();

    for (let field in fieldModel) {
      
      const obj:FieldModel = { fieldName: field, value: '', required: true, type: TypesEnum.Types.INPUT };

      if (field !== 'id') {
        this.fields.push(obj);
      }

      if (field === 'homeworld') obj.required = false;

      if (field === 'species') {
        obj.type = TypesEnum.Types.SELECT;
        this.listToOptions(obj);
      };

      if (field === 'gender') {
        obj.type = TypesEnum.Types.RADIO;
        obj.options = ['Male', 'Female', 'n/a'];
      };
    }
  }
}
