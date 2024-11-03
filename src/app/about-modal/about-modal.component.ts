import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.css']
})
export class AboutModalComponent implements OnInit, OnDestroy {
  @Input() modals: any;
  public displayedText: string = '';
  private fullTextEn: string = '';
  private fullTextEs: string = '';
  private currentIndex: number = 0;
  private timeoutId: any;
  private isTyping: boolean = false; 

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.fullTextEn = `I am a passionate data analyst, specializing in artificial intelligence (AI) and natural language processing (NLP). My career began in backend development, where I gained skills in database management, then ventured into frontend and mobile development. Along the way, I discovered that my true strength lies in data analysis, leading me to participate in Kaggle competitions where I honed my machine learning skills and pattern recognition in datasets.

    Recently, I have delved deeper into natural language processing, working on text cleaning and normalization. I’ve also had the opportunity to contribute to computer vision projects, such as X-ray analysis, where I applied my knowledge in practical and relevant contexts.
    
    I'm passionate about data analysis and the science driving AI. I am always on the lookout for new opportunities that allow me to grow professionally and tackle challenges that expand my horizons in this fascinating field. With a focus on continuous learning, I am ready to make a meaningful contribution to challenging and transformative projects.`;
        this.fullTextEs = `Soy un analista de datos apasionado, especializado en inteligencia artificial (IA) y procesamiento de lenguaje natural (PLN). Mi carrera comenzó en el desarrollo backend, donde adquirí habilidades en gestión de bases de datos, luego me aventuré en el desarrollo frontend y móvil. En el camino, descubrí que mi verdadera fortaleza reside en el análisis de datos, lo que me llevó a participar en competencias de Kaggle donde perfeccioné mis habilidades de aprendizaje automático y reconocimiento de patrones en conjuntos de datos.
    
    Recientemente, me he adentrado más en el procesamiento de lenguaje natural, trabajando en la limpieza y normalización de texto. También he tenido la oportunidad de contribuir en proyectos de visión por computadora, como el análisis de radiografías, donde apliqué mi conocimiento en contextos prácticos y relevantes.
    
    Me apasiona el análisis de datos y la ciencia que impulsa la IA. Siempre estoy en busca de nuevas oportunidades que me permitan crecer profesionalmente y enfrentar desafíos que amplíen mis horizontes en este fascinante campo. Con un enfoque en el aprendizaje continuo, estoy listo para hacer una contribución significativa en proyectos desafiantes y transformadores.`;

    this.languageService.language$.subscribe(isEnglish => {
      if (!this.isTyping) { 
        this.resetText();
        this.typeText(isEnglish);
      }
    });

    this.typeText(this.languageService.getCurrentLanguage());
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private resetText() {
    this.displayedText = '';
    this.currentIndex = 0;
    this.isTyping = false; 
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private typeText(isEnglish: boolean) {
    const fullText = isEnglish ? this.fullTextEn : this.fullTextEs;
    this.isTyping = true; 
    if (this.currentIndex < fullText.length) {
      this.displayedText += fullText.charAt(this.currentIndex);
      this.currentIndex++;
      this.timeoutId = setTimeout(() => this.typeText(isEnglish), 40);
    } else {
      this.isTyping = false; 
    }
  }

  closeModal(modal: keyof typeof this.modals) {
    this.modals[modal] = false;
  }
}
