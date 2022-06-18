import { AllowsPrint } from './allowsPrint.js';

export function print(...objects: AllowsPrint[]): void {
  objects.forEach((object: AllowsPrint) => {
    console.log(object.toText());
  });
}
