import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education-modal',
  templateUrl: './education-modal.component.html',
  styleUrls: ['./education-modal.component.css']
})
export class EducationModalComponent implements OnInit, OnDestroy, OnChanges {
  @Input() modals: any;

  selectedEducation: any = null;
  selectedEducationIndex: number | null = null;
  educations: any[] = [];
  private languageSubscription: Subscription | undefined;

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.setEducationsText();

    this.languageSubscription = this.languageService.language$.subscribe(() => {
      this.setEducationsText();
      this.restoreSelectedEducation();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['modals']) {
    }
  }

  ngOnDestroy() {
    this.languageSubscription?.unsubscribe();
  }

  setEducationsText() {
    const isEnglish = this.languageService.getCurrentLanguage();
    this.educations = [
      { 
        title: isEnglish 
          ? 'Civil engineering in computing and information technology'
          : 'Ingeniería Civil en Computación e Informática', 
        description: isEnglish 
          ? 'The basic sciences of engineering combined with computer science, to have a great base of critical thinking, the university specializes a lot in different areas, I have focused more on software, both backend and frontend.'
          : 'Las ciencias básicas de la ingeniería combinadas con ciencias de la computación, para tener una gran base de pensamiento crítico, la universidad se especializa mucho en diferentes áreas, me he enfocado más en software, tanto backend como frontend.', 
        image: 'assets/education/ucn.png',
        date: isEnglish ? '2019 - at the moment' : '2019 - hasta el momento'
      },
      { 
        title: isEnglish 
          ? 'Machine learning, Data science and NLP' 
          : 'Aprendizaje automático, Ciencia de datos y PLN', 
        description: isEnglish 
          ? 'Specialized in various areas of machine learning, time series, data visualization, data collection, feature engineering and using NLP models how to train them for specific use.'
          : 'Especializado en varias áreas de aprendizaje automático, series de tiempo, visualización de datos, recolección de datos, ingeniería de características y uso de modelos de PLN y cómo entrenarlos para usos específicos.', 
        image: 'assets/education/kaggle.png',
        date: isEnglish ? '2024 - at the moment' : '2024 - hasta el momento'
      },
    ];
  }

  selectEducation(education: any) {
    this.selectedEducation = education;
    this.selectedEducationIndex = this.educations.indexOf(education);
  }

  restoreSelectedEducation() {
    if (this.selectedEducationIndex !== null) {
      this.selectedEducation = this.educations[this.selectedEducationIndex];
    }
  }

  closeModal(modal: keyof typeof this.modals) {
    this.modals[modal] = false;
  }
}
