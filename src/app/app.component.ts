import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  len = 0;
  checkLetters = false;
  checkNumbers = false;
  checkSymbols = false;

  onChangeInputValue(value: string) {
    const val = parseInt(value);
    if (!isNaN(val)) {
      this.len = val;
    }
  }

  onButtonClick() {
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const numbers = '1234567890';
    const symbols = '[],.//-+!@#$%^&()';
    let validChar = '';
    if (this.checkLetters) {
      validChar += letters;
    }
    if (this.checkNumbers) {
      validChar += numbers;
    }
    if (this.checkSymbols) {
      validChar += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.len; i++) {
      const index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
    }
    this.password = generatedPassword;
  }

  onChangeLetter() {
    this.checkLetters = !this.checkLetters;
  }
  onChangeNumbers() {
    this.checkNumbers = !this.checkNumbers;
  }
  onChangeSymbols() {
    this.checkSymbols = !this.checkSymbols;
  }
}
