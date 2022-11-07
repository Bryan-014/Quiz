class Game {
  constructor() {
    this.options;
    this.telaAtual;
    this.quesOk;
  }

  loadPrimaryInform() {
    let first = Math.floor(Math.random() * this.options.length);
    this.telaAtual = new Tela(this.options[first], first, 1);
    this.telaAtual.draw();
    this.quesOk = [];
    this.quesOk.push(first);
  }

  loadOptions() {
    $.ajax({
      url: URL_QUESTIONS,
      data: 'json',
      success: data => {
        this.options = typeof data === 'string' ? JSON.parse(data) : data;
        this.loadPrimaryInform();
      }
    });
  }

  loadPrimaryOptions() {
    this.options == undefined ? this.loadOptions() : this.loadPrimaryInform();
  }

  validResp(optIndex, quesIndex) {
    let parsNum;

    if (this.options[quesIndex].opcs[optIndex].is) {
      if (this.quesOk.length != NUMBER_QUESTIONS) {
        do {
          parsNum = Math.floor(Math.random() * this.options.length);
        } while (this.quesOk.includes(parsNum));
        this.quesOk.push(parsNum);
        this.telaAtual = new Tela(
          this.options[parsNum],
          parsNum,
          this.quesOk.length
        );
        this.telaAtual.draw();
      } else {
        this.telaAtual.drawRecm(TEXTS.WINNER);
      }
    } else {
      this.telaAtual.drawRecm(TEXTS.LOSER);
    }
  }

  drawInit() {
    document.querySelector('#game_content').innerHTML = `
      <div class="ques">
        <h1>${TEXTS.GAME_TITLE}</h1>
      </div>
      <div id="opts">
        <input type="button" value="Começar" onClick="game.loadPrimaryOptions()" />
      </div>
      <div class="copy">${TEXTS.COPY}</div>
    `;
  }
}
