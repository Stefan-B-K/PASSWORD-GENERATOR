import { Component } from '@angular/core';

@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
})
export class AppComponent {
     password = ''
     passLength = 0
     includeLetters = true
     includeNumbers = false
     includeSymbols = false

     get formIsValid (): boolean {
          return (this.includeLetters || this.includeNumbers || this.includeSymbols)
               && this.passLength > 5 && this.passLength < 31
     }

     setPassLength (input: EventTarget | null) {
          const length = parseInt((input as HTMLInputElement).value)
          if (!isNaN(length)) this.passLength = length
     }

     onButtonClick (): void {
          this.password = ''
          const numbers = '1234567890'
          const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
          const symbols = '!@#$%^&*()±§[]<>'
          const validChars = (this.includeLetters ? letters : '') +
               (this.includeNumbers ? numbers : '') + (this.includeSymbols ? symbols : '')
          for (let i = 0; i < this.passLength; i++) {
               this.password += validChars[Math.floor(Math.random() * validChars.length)]
          }
     }
}
