import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date());
console.log('Volume igual a: ', negociacao.volume);
negociacao.quantidade = 10;
