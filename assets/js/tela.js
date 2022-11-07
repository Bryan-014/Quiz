class Tela {
  constructor(props, index, disNum) {
    this.questionNumber = index;
    this.displayNum = disNum;
    this.question = props.ques;
    this.options = props.opcs;
  }

  draw() {
    document.querySelector('#game_content').innerHTML = `
      <div class="numberQues">
        ${this.displayNum}.
      </div>
      <div class="ques">
        ${this.question}
      </div>
      <div id="opts">
      </div>
      <div class="copy">${TEXTS.COPY}</div>
    `;
    this.drawInputs();
  }

  drawInputs() {
    let optionsConst = [];
    let parsNum;

    for (let index = 0; index < this.options.length; index++) {
      do {
        parsNum = Math.floor(Math.random() * this.options.length);
      } while (optionsConst.includes(parsNum));
      document.querySelector('#opts').innerHTML += new Input(
        this.options[parsNum],
        this.questionNumber,
        parsNum
      ).mountInput();
      optionsConst.push(parsNum);
    }
  }

  drawRecm(text) {
    document.querySelector('#game_content').innerHTML = `
      <div class="ques">
        <h1>${text}</h1>
      </div>
      <div id="opts">
        <input type="button" value="Recomeçar" onClick="game.drawInit()">
      </div>
      <div class="copy">${TEXTS.COPY}</div>
    `;
  }
}
