import { AllowsPrint } from '../utils/allowsPrint.js';
import { Comparative } from './comparative.js';

export interface Model<T> extends AllowsPrint, Comparative<T> {}
