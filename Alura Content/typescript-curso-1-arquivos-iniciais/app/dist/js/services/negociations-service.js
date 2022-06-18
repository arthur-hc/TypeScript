var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Negociation } from '../models/negociation.js';
export class NegociationsService {
    getNegociationsDay() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://localhost:8080/dados');
            const jsonNegociations = yield response.json();
            const arrayNegociations = jsonNegociations.map((negociation) => {
                return new Negociation(new Date(), negociation.montante, negociation.vezes);
            });
            return arrayNegociations;
        });
    }
}
//# sourceMappingURL=negociations-service.js.map