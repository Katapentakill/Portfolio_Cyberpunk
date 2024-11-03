import { Component } from '@angular/core';
import { LanguageService } from '../app/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Object to manage the visibility of modals
  modals = {
    home: false,
    about: false,
    education: false,
    work: false,
    skills: false,
  };

  // Boolean to track whether the music is playing (start as true)
  isMusicOn = true; 

  // HTMLAudioElement to control the audio playback
  audio: HTMLAudioElement;

  // Boolean to track the current language (true for English, false for Spanish)
  isEnglish: boolean;

  // Inject the LanguageService to access language state and changes
  constructor(private languageService: LanguageService) {
    // Initialize the audio element with the specified file and settings
    this.audio = new Audio('../assets/music/slowed.mp3');
    this.audio.volume = 0.15;  // Set the volume level
    this.audio.loop = true;    // Enable looping

    // Start the music playback
    this.audio.play();

    // Initialize the language state based on the current value from LanguageService
    this.isEnglish = this.languageService.getCurrentLanguage();

    // Subscribe to language changes from LanguageService to update `isEnglish`
    this.languageService.language$.subscribe((language) => {
      this.isEnglish = language;
    });
  }

  // Method to toggle the language by calling LanguageService
  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  // Method to open a specific modal by name and close any others
  openModal(modal: keyof typeof this.modals) {
    this.closeAllModals();
    this.modals[modal] = true;
  }

  // Method to close a specific modal
  closeModal(modal: keyof typeof this.modals) {
    this.modals[modal] = false;
  }

  // Method to close all modals by setting their values to `false`
  closeAllModals() {
    Object.keys(this.modals).forEach(key => this.modals[key as keyof typeof this.modals] = false);
  }

  // Method to toggle the audio playback
  toggleSound() {
    if (this.isMusicOn) {
      // Pause the audio if it’s currently playing
      this.audio.pause();
    } else {
      // Play the audio if it’s currently paused
      this.audio.play();
    }
    // Update the music state
    this.isMusicOn = !this.isMusicOn;
  }
}
