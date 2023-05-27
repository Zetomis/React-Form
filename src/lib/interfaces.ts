export interface QuestionInterface {
    questionTitle: string;
    questionCorrectAnswer: "A" | "B" | "C" | "D" | null;
    questionAnswers: [
        {
            answerTitle: string;
            answer: "A";
        },
        {
            answerTitle: string;
            answer: "B";
        },
        {
            answerTitle: string;
            answer: "C";
        },
        {
            answerTitle: string;
            answer: "D";
        }
    ];
}
