import { NegociacaoController } from './controllers/negociacao-controller.js';
import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date(), 10, 100);

const novaNegociacao = new NegociacaoController();

console.log(novaNegociacao.adiciona())