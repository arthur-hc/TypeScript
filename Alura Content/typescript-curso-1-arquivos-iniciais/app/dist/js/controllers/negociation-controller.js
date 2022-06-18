var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { domInjector } from '../decorators/dom-injector.js';
import { inspect } from '../decorators/inspect.js';
import { logExecutionTime } from '../decorators/log-execution-time.js';
import { daysOfWeek } from '../enums/daysOfWeek.js';
import { Negociation } from '../models/negociation.js';
import { Negociations } from '../models/negociations.js';
import { NegociationsService } from '../services/negociations-service.js';
import { print } from '../utils/print.js';
import { MessageView } from '../views/message-view.js';
import { NegociationsView } from '../views/negociations-view.js';
export class NegociationController {
    constructor() {
        this.negociationsView = new NegociationsView('#negociationsView');
        this.messageView = new MessageView('#mensagemView');
        this.service = new NegociationsService();
        this.forms = document.querySelector('.form');
        this.negociations = new Negociations();
        this.negociationsView.update(this.negociations);
    }
    importData() {
        return __awaiter(this, void 0, void 0, function* () {
            const negociationsDay = yield this.service.getNegociationsDay();
            negociationsDay
                .filter((negociation) => {
                return !this.negociations
                    .allNegociations()
                    .some((negociationSaved) => negociation.isEqual(negociationSaved));
            })
                .forEach((negociation) => {
                this.negociations.save(negociation);
            });
            this.refreshView();
        });
    }
    add() {
        const negociation = Negociation.create(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isUtilDay(negociation.date.getDay())) {
            this.messageView.update('Não é possível cadastrar negociações fora do dia útil.');
            return;
        }
        this.negociations.save(negociation);
        print(negociation, this.negociations);
        this.cleanForms();
        this.refreshView();
    }
    cleanForms() {
        this.forms.reset();
        this.inputDate.focus();
    }
    refreshView() {
        this.negociationsView.update(this.negociations);
        this.messageView.update('View atualizada com sucesso!');
    }
    isUtilDay(day) {
        return day > daysOfWeek.SUNDAY && day < daysOfWeek.SATURDAY;
    }
}
__decorate([
    domInjector('#data')
], NegociationController.prototype, "inputDate", void 0);
__decorate([
    domInjector('#quantidade')
], NegociationController.prototype, "inputQuantity", void 0);
__decorate([
    domInjector('#valor')
], NegociationController.prototype, "inputValue", void 0);
__decorate([
    inspect,
    logExecutionTime(true)
], NegociationController.prototype, "add", null);
//# sourceMappingURL=negociation-controller.js.map