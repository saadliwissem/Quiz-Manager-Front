interface Question {
    id: string;
    content: string;
    options: Option[];
  }
  
  interface Option {
    id: string;
    content: string;
    // Add any other properties you need for an option
  }
  
  export interface QuizData {
    questions: Question[];
  }
  