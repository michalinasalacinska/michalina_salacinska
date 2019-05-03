import { TypesEnum } from './types-enum';

export class FieldModel {
  fieldName: string;
  value: string;
  options?: string[];
  required: boolean;
  type: TypesEnum.Types;
  labelToLowerCase?: boolean;
}
