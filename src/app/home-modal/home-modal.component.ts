import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.css']
})
export class HomeModalComponent implements OnInit {
  @Input() modals: any;
  isEnglish: boolean = true;

  text = {
    hello: { en: 'Hello', es: 'Hola' },
    intro: { en: "I'm Alexander", es: 'Soy Alexander' },
    roles: { en: 'Innovator. Developer. Creator.', es: 'Innovador. Desarrollador. Creador.' }
  };

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((isEnglish) => {
      this.isEnglish = isEnglish;
    });
  }

  closeModal(modal: keyof typeof this.modals) {
    this.modals[modal] = false; 
  }
}
