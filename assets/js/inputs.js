class Input {
  constructor(prop, indexQues, indexOpt) {
    this.resposta = prop.resp;
    this.indexQues = indexQues;
    this.indexOpt = indexOpt;
  }

  mountInput() {
    return `<input type="button" value="${this.resposta}" onClick="game.validResp(${this.indexOpt}, ${this.indexQues})" class="option">`;
  }
}
