export class Word {

  private length: number;
  private word: string;

  constructor(
    word: string
  ) {
    this.word = word;
    this.length = word.length;
  }

  getWord() {
    return this.word;
  }

  getLength() {
    return this.length;
  }
}
