import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(Date(), 1000, 50);
console.log(negociacao);
negociacao.quantidade = 1000;
console.log(negociacao);
