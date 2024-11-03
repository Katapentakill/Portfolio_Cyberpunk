import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // BehaviorSubject to store the current language state:
  // `true` represents English, `false` represents Spanish
  private languageSubject = new BehaviorSubject<boolean>(true);

  // Observable for other components to subscribe to and get the current language
  language$ = this.languageSubject.asObservable();

  // Method to toggle the language between English and Spanish
  toggleLanguage() {
    const currentLanguage = this.languageSubject.value;
    // Update the language state with the opposite value
    this.languageSubject.next(!currentLanguage);
    console.log(`Language switched to ${!currentLanguage ? 'Spanish' : 'English'}`);
  }

  // Method to get the current language directly
  getCurrentLanguage(): boolean {
    return this.languageSubject.value;
  }
}
