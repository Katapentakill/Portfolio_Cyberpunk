import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-modal',
  templateUrl: './work-modal.component.html',
  styleUrls: ['./work-modal.component.css']
})
export class WorkModalComponent implements OnInit, OnDestroy {
  @Input() modals: any;

  selectedProject: any = null;
  selectedProjectIndex: number | null = null;
  projects: any[] = [];
  private languageSubscription: Subscription | undefined;

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.setProjectsText();

    this.languageSubscription = this.languageService.language$.subscribe(() => {
      this.setProjectsText();
      this.restoreSelectedProject();
    });
  }

  ngOnDestroy() {
    this.languageSubscription?.unsubscribe();
  }

  setProjectsText() {
    const isEnglish = this.languageService.getCurrentLanguage();
    this.projects = [
        {
          title: isEnglish 
            ? "BrisT1D Blood Glucose Prediction Competition" 
            : "Competencia de Predicción de Glucosa en Sangre BrisT1D",
          description: isEnglish 
            ? "Type 1 Diabetes is a chronic condition where the body does not produce insulin, leading to difficulties in regulating blood glucose levels. Management requires careful calculation of insulin dosages influenced by various factors such as diet, activity, and stress. This competition focuses on predicting future blood glucose levels using algorithms on a newly collected dataset, addressing the complexities and limitations of existing predictive models." 
            : "La Diabetes Tipo 1 es una condición crónica donde el cuerpo no produce insulina, lo que dificulta la regulación de los niveles de glucosa en sangre. La gestión requiere un cálculo cuidadoso de las dosis de insulina influenciado por varios factores como la dieta, la actividad y el estrés. Esta competencia se centra en predecir los futuros niveles de glucosa en sangre utilizando algoritmos en un conjunto de datos recién recopilado, abordando las complejidades y limitaciones de los modelos predictivos existentes.",
          technologies: [
            "Python", 
            "Pandas", 
            "NumPy", 
            "Matplotlib", 
            "Scikit-Learn", 
            "XGBoost"
          ],
          image: "assets/work/Blood_Glucose.png",
          githubLink: "https://www.kaggle.com/code/reciclador/blood-port",
          position: isEnglish ? "[20/321]" : "[20/321]"
        },
        {
          title: isEnglish 
            ? "Natural Language Processing with Disaster Tweets" 
            : "Procesamiento de Lenguaje Natural con Tweets de Desastre",
          description: isEnglish 
            ? "This beginner-friendly competition challenges participants to build an NLP model that predicts if a tweet is about a real disaster. Using a dataset of 10,000 hand-labeled tweets, participants can learn how to distinguish between literal and metaphorical language in tweets. Kaggle’s free Notebooks environment is available for all computational needs." 
            : "Esta competencia amigable para principiantes desafía a los participantes a construir un modelo de PLN que prediga si un tweet se refiere a un desastre real. Utilizando un conjunto de datos de 10,000 tweets etiquetados a mano, los participantes pueden aprender a distinguir entre el lenguaje literal y el metafórico en los tweets. El entorno gratuito de Notebooks de Kaggle está disponible para todas las necesidades computacionales.",
          image: "assets/work/Disaster_Tweets.png",
          technologies: ["Python", "Pandas", "Scikit-learn", "Transformers", "Torch"],
          githubLink: "https://www.kaggle.com/code/reciclador/natural-disaster-tweeter?scriptVersionId=204556725",
          position: isEnglish ? "[133/1014]" : "[133/1014]"
        },
        {
          title: isEnglish 
            ? "Google - Gemini Long Context" 
            : "Google - Contexto Largo de Gemini",
          description: isEnglish 
            ? "Showcase the potential of Google’s Gemini 1.5 model, featuring an exceptionally large context window that can handle up to 2 million tokens. Participants are encouraged to create public Kaggle Notebooks and YouTube Videos demonstrating innovative use cases that stress test this capability, such as long-document QA, long-video QA, or in-context retrieval techniques." 
            : "Demuestra el potencial del modelo Gemini 1.5 de Google, que presenta una ventana de contexto excepcionalmente grande que puede manejar hasta 2 millones de tokens. Se anima a los participantes a crear Notebooks públicos de Kaggle y Videos en YouTube que demuestren casos de uso innovadores que pongan a prueba esta capacidad, como QA de documentos largos, QA de videos largos o técnicas de recuperación en contexto.",
          image: "assets/work/Gemini_LongContext.png",
          position: isEnglish ? "[In coming]" : "[Próximamente]"
        },
        {
            title: isEnglish 
              ? "House Prices - Advanced Regression Techniques" 
              : "Precios de Casas - Técnicas Avanzadas de Regresión",
            description: isEnglish 
              ? "Predict house prices using 79 variables that capture nearly every aspect of homes in Ames, Iowa. This challenge is ideal for those with experience in R or Python looking to practice creative feature engineering and advanced regression techniques, like random forest and gradient boosting." 
              : "Predice los precios de las casas utilizando 79 variables que capturan casi todos los aspectos de las casas en Ames, Iowa. Este desafío es ideal para aquellos con experiencia en R o Python que buscan practicar la ingeniería de características creativas y técnicas avanzadas de regresión, como el bosque aleatorio y el aumento de gradiente.",
            technologies: [
              "Python", 
              "Pandas", 
              "NumPy", 
              "Scikit-Learn", 
              "XGBoost", 
              "LightGBM", 
              "CatBoost", 
              "Matplotlib", 
              "Seaborn", 
              "SHAP"
            ],
            image: "assets/work/House_Prices.png",
            githubLink: "https://www.kaggle.com/code/reciclador/house-prices",
            position: isEnglish ? "[736/5118]" : "[736/5118]"
          },
          {
            title: isEnglish 
              ? "Jane Street Real-Time Market Data Forecasting" 
              : "Pronóstico de Datos de Mercado en Tiempo Real de Jane Street",
            description: isEnglish 
              ? "This challenge focuses on improving inventory forecasting for grocery stores. Accurate predictions help avoid overstock or stockouts, ensuring better customer satisfaction. Using machine learning for real-time forecasting could refine inventory management by adapting to changes in product demand, seasonality, and new store locations." 
              : "Este desafío se centra en mejorar la previsión de inventario para supermercados. Predicciones precisas ayudan a evitar sobreabastecimientos o faltantes, asegurando una mejor satisfacción del cliente. Utilizar aprendizaje automático para pronósticos en tiempo real podría perfeccionar la gestión del inventario al adaptarse a cambios en la demanda de productos, la estacionalidad y nuevas ubicaciones de tiendas.",
            technologies: [
              "Python",
              "Pandas",
              "NumPy",
              "XGBoost",
              "Machine Learning"
            ],
            image: "assets/work/Jane_Street_Time.png",
            githubLink: "https://github.com/Katapentakill/Solo-links/blob/main/Jane%20street%20forecasting",
            position: isEnglish ? "[99/876]" : "[99/876]"
          },
          {
            title: isEnglish 
              ? "Eedi - Mining Misconceptions in Mathematics" 
              : "Eedi - Minando Conceptos Erróneos en Matemáticas",
            description: isEnglish 
              ? "This challenge aims to develop an NLP model that predicts connections between math misconceptions and common incorrect answer choices. The goal is to assist educators in identifying misconceptions more effectively, improving learning experiences for students by streamlining the labeling process and helping to uncover new misconceptions." 
              : "Este desafío tiene como objetivo desarrollar un modelo de procesamiento de lenguaje natural que prediga las conexiones entre conceptos erróneos en matemáticas y las opciones de respuesta incorrectas más comunes. La meta es ayudar a los educadores a identificar conceptos erróneos de manera más efectiva, mejorando las experiencias de aprendizaje para los estudiantes al agilizar el proceso de etiquetado y ayudar a descubrir nuevos conceptos erróneos.",
            technologies: [
              "Python",
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "Sentence Transformers",
              "PyTorch",
              "Polars"
            ],
            image: "assets/work/Mining_Misconceptions.png",
            githubLink: "https://www.kaggle.com/code/reciclador/misconception1-flan",
            position: isEnglish ? "[135/956]" : "[135/956]"
          },  
          {
            title: isEnglish 
              ? "Spaceship Titanic" 
              : "Titanic Espacial",
            description: isEnglish 
              ? "In this futuristic challenge, you must use machine learning to predict which passengers aboard the Spaceship Titanic were transported to an alternate dimension after it collided with a spacetime anomaly. The mission is based on records from the damaged ship’s computer, and your data science skills could help save the missing passengers." 
              : "En este desafío futurista, debes utilizar aprendizaje automático para predecir qué pasajeros a bordo del Titanic Espacial fueron transportados a una dimensión alterna después de colisionar con una anomalía espacio-temporal. La misión se basa en registros de la computadora dañada del barco, y tus habilidades en ciencia de datos podrían ayudar a salvar a los pasajeros desaparecidos.",
            technologies: [
              "Python", 
              "Pandas", 
              "Scikit-learn", 
              "Matplotlib", 
              "Seaborn", 
              "RandomForest", 
              "CatBoost", 
              "LightGBM", 
              "XGBoost", 
              "RidgeClassifier"
            ],
            image: "assets/work/Spaceship_Titanic.png",
            githubLink: "https://github.com/Katapentakill/Space-Titanic/blob/master/Notebook/ordenado.ipynb",
            position: isEnglish ? "[470/1578]" : "[470/1578]"
          },
          {
            title: isEnglish 
              ? "Store Sales - Time Series Forecasting" 
              : "Ventas de Tienda - Pronóstico de Series Temporales",
            description: isEnglish 
              ? "This competition is ideal for data science students with basic experience in Python or R who want to enhance their skills. Using 79 variables detailing nearly every aspect of residential homes in Ames, Iowa, the challenge is to predict each home's final price, showing how numerous factors influence price negotiations beyond typical features like bedroom count." 
              : "Esta competencia es ideal para estudiantes de ciencia de datos con experiencia básica en Python o R que desean mejorar sus habilidades. Utilizando 79 variables que detallan casi todos los aspectos de las viviendas residenciales en Ames, Iowa, el desafío es predecir el precio final de cada hogar, mostrando cómo numerosos factores influyen en las negociaciones de precios más allá de características típicas como el número de dormitorios.",
            technologies: [
              "Python",
              "Pandas",
              "NumPy",
              "Scikit-Learn",
              "CatBoost",
              "XGBoost",
              "Stacking Regressor",
              "Matplotlib",
              "Seaborn"
            ],
            image: "assets/work/Time_Forecasting_Store.png",
            githubLink: "https://www.kaggle.com/code/reciclador/sales-time-forecasting",
            position: isEnglish ? "[186/711]" : "[186/711]"
          },  
          {
            title: isEnglish 
              ? "Titanic - Machine Learning from Disaster" 
              : "Titanic - Aprendizaje Automático del Desastre",
            description: isEnglish 
              ? "The Titanic, once deemed 'unsinkable,' sank on April 15, 1912, during its maiden voyage after hitting an iceberg. The disaster claimed the lives of 1,502 out of 2,224 passengers and crew due to a lack of lifeboats. While survival was partly due to luck, certain groups had a higher likelihood of surviving. This challenge invites you to create a predictive model that identifies which types of people were more likely to survive based on passenger data such as name, age, gender, and socio-economic class." 
              : "El Titanic, alguna vez considerado 'insumergible', se hundió el 15 de abril de 1912 durante su viaje inaugural tras chocar contra un iceberg. El desastre cobró la vida de 1,502 de los 2,224 pasajeros y miembros de la tripulación debido a la falta de botes salvavidas. Aunque la supervivencia se debió en parte a la suerte, ciertos grupos tenían una mayor probabilidad de sobrevivir. Este desafío te invita a crear un modelo predictivo que identifique qué tipos de personas tenían más probabilidades de sobrevivir basándose en datos de pasajeros como nombre, edad, género y clase socioeconómica.",
            technologies: [
              "Python", 
              "Pandas", 
              "Scikit-learn", 
              "Matplotlib", 
              "Seaborn", 
              "RandomForest", 
              "CatBoost", 
              "LightGBM", 
              "XGBoost"
            ],
            image: "assets/work/Titanic_Real.png",
            githubLink: "https://github.com/Katapentakill/Titanic/blob/master/Notebook/ordenador.ipynb",
            position: isEnglish ? "[381/5118]" : "[381/5118]"
          },
          {
            title: isEnglish 
              ? "Employee Manager" 
              : "Gestor de Empleados",
            description: isEnglish 
              ? "Employee management platform similar to Trello, here the idea was made of having an employee manager in which different tasks would be created and employees would also be saved, then with a script using cosine similarity, the best candidates for the tasks are obtained." 
              : "Plataforma de gestión de empleados similar a Trello, aquí la idea fue crear un gestor de empleados en el que se crearían diferentes tareas y también se guardarían empleados, luego con un script que utiliza similitud coseno, se obtienen los mejores candidatos para las tareas.",
            technologies: [
              "NestJS",
              "SQLite",
              "Python",
              "TypeScript",
              "Tailwind",
              "HTML",
              "Angular",
              "Ionic",
              "SQL",
              "BERT",
              "TypeORM",
              "Visual Studio",
              "Cloudinary",
              "JWT"
            ],
            image: "assets/work/GestionTareas.png",
            githubLink: "https://github.com/Katapentakill/Solo-links/tree/main",
            position: isEnglish ? "[N/A]" : "[N/A]"
          },
          {
            title: isEnglish 
              ? "E-commerce Shopping Bazaar" 
              : "Bazaar de Compras en Línea",
            description: isEnglish 
              ? "Simple e-commerce platform, where there are products that can be purchased, in addition one can register on the platform to buy, security management of the platform is done through various features, it has a mobile version through Ionic where the client can see their tickets." 
              : "Plataforma de comercio electrónico simple, donde hay productos que se pueden comprar, además se puede registrar en la plataforma para comprar, la gestión de seguridad de la plataforma se realiza a través de varias funciones, tiene una versión móvil a través de Ionic donde el cliente puede ver sus tickets.",
            technologies: [
              "ASP.NET",
              "TypeScript",
              "C#",
              "Tailwind",
              "HTML",
              "Angular",
              "Ionic",
              "SQL",
              "Entity Framework",
              "Visual Studio",
              "Cloudinary",
              "JWT"
            ],
            image: "assets/work/Virtu.png",
            githubLink: "https://github.com/Katapentakill/Solo-links/blob/main/E-commerce",
            position: isEnglish ? "[N/A]" : "[N/A]"
          },
          {
            title: isEnglish 
              ? "Portfolio Website" 
              : "Sitio Web de Portafolio",
            description: isEnglish 
              ? "A personal portfolio to showcase my work and skills, made with Angular." 
              : "Un portafolio personal para mostrar mi trabajo y habilidades, hecho con Angular.",
            technologies: [
              "Angular",
              "HTML",
              "CSS",
              "TypeScript",
              "Tailwind"
            ],
            image: "assets/gif/descarga.gif",
            githubLink: "https://github.com/Katapentakill/Solo-links/tree/main",
            position: isEnglish ? "[N/A]" : "[N/A]"
          },
      ];      
  }

  selectProject(project: any) {
    this.selectedProject = project;
    this.selectedProjectIndex = this.projects.indexOf(project);
  }

  restoreSelectedProject() {
    if (this.selectedProjectIndex !== null) {
      this.selectedProject = this.projects[this.selectedProjectIndex];
    }
  }

  closeModal(modal: keyof typeof this.modals) {
    this.modals[modal] = false;
  }
}
