import { Component, OnInit } from '@angular/core';
import { Ponto } from './ponto';
import { TabelaPontoService } from './tabela-ponto.service'

@Component({
  selector: 'app-tabela-ponto',
  templateUrl: './tabela-ponto.component.html',
  styleUrls: ['./tabela-ponto.component.css']
})
export class TabelaPontoComponent implements OnInit {

  teste: string;
  constructor(private _pontoService: TabelaPontoService) {
    this.teste = 'abc';

  }

  pontoTeste: Ponto = new Ponto();
  pontosDoMes: Ponto[];
  mesesDoAno: string[];
  anos: number[];
  mesCorrente: number;
  nomeDoMesCorrente: string;
  anoCorrente: number;
  nomeDoAnoCorrente: string;

  ngOnInit() {
    var date = new Date();
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.mesesDoAno = this.populaMesesDoAno();
    this.anos = this.populaArrayAno();
    this.carregarPontosDoMes(new Date);
    
    
    this._pontoService.getService();

  }

 

  carregarPontosDoMes(dataSelecionada) {
    var lastDay = new Date(dataSelecionada.getFullYear(), dataSelecionada.getMonth() + 1, 0);
    this.pontosDoMes = new Array();
    this.nomeDoMesCorrente = dataSelecionada.toLocaleString('pt-br', { month: 'long' });
    this.mesCorrente = this.mesesDoAno.indexOf(this.nomeDoMesCorrente);
    this.anoCorrente = dataSelecionada.getFullYear();
    for (var i = 1; i <= lastDay.getDate(); i++) {
      var ponto = this.criarPontoPadrao(dataSelecionada, i);
      this.pontosDoMes.push(ponto);
    }
  }

  criarPontoPadrao(dataSelecionada, diaDoMes){
      var ponto = new Ponto();
      ponto.data = new Date(dataSelecionada);
      ponto.data.setDate(diaDoMes);
      ponto.diaDaSemana = ponto.data.toLocaleString('pt-br', { weekday: 'long' });
      ponto.diaDaSemana = ponto.diaDaSemana.charAt(0).toUpperCase() + ponto.diaDaSemana.slice(1);
      ponto.entrada = "08:00";
      ponto.saida = "18:00";
      ponto.inicioDoAlmoco = "12:00";
      ponto.fimDoAlmoco = "13:00";
      ponto.total = "08:00";
      return ponto;
  }

  atualizarMes(mesSelecionado) {
    this.mesCorrente = this.mesesDoAno.indexOf(mesSelecionado);
    var data = new Date();
    data.setMonth(this.mesCorrente);
    data.setFullYear(this.anoCorrente);
    this.carregarPontosDoMes(data);
  }

  atualizarAno(anoSelecionado) {
    this.anoCorrente = this.anos.indexOf(anoSelecionado);
    var data = new Date();
    data.setFullYear(anoSelecionado);
    data.setMonth(this.mesCorrente);
    this.carregarPontosDoMes(data);
  }

  populaArrayAno() {
    var data = new Date();
    var anosPopulados = new Array();
    var limiteAno = 3;
    for(var i =0 ; i < limiteAno ; i++){
      anosPopulados.push(data.getFullYear() + i);
    }

    return anosPopulados;
  }

  populaMesesDoAno() {
    var mesesDoAno = new Array();
    var data = new Date();
    for (var i = 0; i < 12; i++) {
      data.setMonth(i);
      mesesDoAno.push(data.toLocaleString('pt-br', { month: 'long' }));
    }
    return mesesDoAno;
  }


  validaInput(event, hora, propriedade, index) {
    event.srcElement.focus = false;

    if (hora.length == 4) {
      hora = "00000".substring(0, "00000".length - hora.length) + hora;
    }
    if (/^([01]\d|2[0-3]):([0-5]\d)$/.test(hora)) {
      this.pontosDoMes[index][propriedade] = hora;
      console.log("Válido");
    }
    else {
      alert("Inválido");
    }
  }


  replaceBadInputs(val) {
    // Replace impossible inputs as they appear
    val = val.replace(/[^\dh:]/, "");
    val = val.replace(/^[^0-2]/, "");
    val = val.replace(/^([2-9])[4-9]/, "$1");
    val = val.replace(/^\d[:h]/, "");
    val = val.replace(/^([01][0-9])[^:h]/, "$1");
    val = val.replace(/^(2[0-3])[^:h]/, "$1");
    val = val.replace(/^(\d{2}[:h])[^0-5]/, "$1");
    val = val.replace(/^(\d{2}h)./, "$1");
    val = val.replace(/^(\d{2}:[0-5])[^0-9]/, "$1");
    val = val.replace(/^(\d{2}:\d[0-9])./, "$1");
    return val;
  }

  // Apply input rules as the user types or pastes input
  mascaraHora(event, hora, propriedade, index) {
    var val = hora;
    var lastLength;
    if (hora.length == 2 && event.keyCode != 8) {
      val = val + ":";
    }
    do {
      // Loop over the input to apply rules repeately to pasted inputs
      lastLength = val.length;
      val = this.replaceBadInputs(val);
    } while (val.length > 0 && lastLength !== val.length);
    this.pontosDoMes[index][propriedade] = val;
  };

  verificaFimDeSemana(diaDaSemanaNumero) {
    if (diaDaSemanaNumero == 0 || diaDaSemanaNumero == 6) {
      return true;
    } else {
      return false;
    }
  }

}
