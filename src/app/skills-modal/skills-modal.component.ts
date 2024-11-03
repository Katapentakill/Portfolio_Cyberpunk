import { Component, Input } from '@angular/core';
import { LanguageService } from '../language.service'; 

@Component({
  selector: 'app-skills-modal',
  templateUrl: './skills-modal.component.html',
  styleUrls: ['./skills-modal.component.css']
})
export class SkillsModalComponent {
  @Input() modals: any; 

  constructor(public languageService: LanguageService) {} 

  closeModal(modal: keyof typeof this.modals) {
    this.modals[modal] = false; 
  }
}
