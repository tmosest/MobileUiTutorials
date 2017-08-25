import { Component, OnInit } from '@angular/core';
import { Word } from '../dictionary/word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private _localStorageKey = 'Dictionary';
  public Dictionary: Array<Word> = [];

  private __addWordToDictionary(input: string) {
    const word = new Word(input);
    this.Dictionary.push(word);
  }

  private _loadDictionary() {
    const dictionaryJSON  = JSON.parse(localStorage.getItem(this._localStorageKey)) || [];
    if(dictionaryJSON.length !== 0) {
      this.Dictionary = [];
      for (let i = 0; i < dictionaryJSON.length; i++) {
        this.Dictionary.push(new Word(dictionaryJSON[i].word));
      }
    }
  }

  private _saveDictionary() {
    const jsonDictionary = JSON.stringify(this.Dictionary);
    localStorage.setItem(this._localStorageKey, jsonDictionary);
  }

  constructor(
  ) { }

  ngOnInit() {
    this._loadDictionary();
  }

  addWord(word: string) {
    this.__addWordToDictionary(word);
    this._saveDictionary();
  }

}
