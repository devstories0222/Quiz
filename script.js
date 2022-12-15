const totalQuestions = [
  {
    name: "init-question",
    text: "Avez-vous porté ce vêtement dans les 12 derniers mois (Tri saisonnier) ?",
    previousState: null,
    isResult: false,
  },
  {
    name: "first-question",
    text: "Est-il en bon état ?",
    previousState: [
      {
        question: "init-question",
        answer: "yes",
      },
      {
        question: "second-question",
        answer: "yes",
      },
    ],
    isResult: false,
  },
  {
    name: "second-question",
    text: "Est-il toujours à la mode ?",
    previousState: [
      {
        question: "init-question",
        answer: "no",
      },
    ],
    isResult: false,
  },
  {
    name: "third-question",
    text: "Est-ce-qe je le rachèterais si je le revoyais en magasin ?",
    previousState: [
      {
        question: "first-question",
        answer: "yes",
      },
      {
        question: "fourth-question",
        answer: "yes",
      },
    ],
    isResult: false,
  },
  {
    name: "fourth-question",
    text: "Peut-il être réparé ?",
    previousState: [
      {
        question: "first-question",
        answer: "no",
      },
    ],
    isResult: false,
  },
  {
    name: "fifth-question",
    text: "Est-il en bon état ?",
    previousState: [
      {
        question: "second-question",
        answer: "no",
      },
    ],
    isResult: false,
  },
  {
    name: "sixth-question",
    text: "A-t-il une valeur sentimentale ?",
    previousState: [
      {
        question: "fifth-question",
        answer: "yes",
      },
    ],
    isResult: false,
  },
  {
    name: "first-result",
    text: `Gardez-le ! \nVêtement est régulièrement porté & Vêtement a une valeur sentimentale.`,
    previousState: [
      {
        question: "third-question",
        answer: "yes",
      },
      {
        question: "sixth-question",
        answer: "yes",
      },
    ],
    isResult: true,
  },
  {
    name: "second-result",
    text: `Vendez/donnez-le ! \nVêtement est encore en bon état et a de la valeur & Vêtement n’est jamais porté.`,
    previousState: [
      {
        question: "third-question",
        answer: "no",
      },
      {
        question: "sixth-question",
        answer: "no",
      },
    ],
    isResult: true,
  },
  {
    name: "third-question",
    text: `Jetez-le/donnez-lui une seconde vie ! \nVêtement qui ne peut être porté & Vêtement peut-être transformé ou recyclé.`,
    previousState: [
      {
        question: "fourth-question",
        answer: "no",
      },
      {
        question: "fifth-question",
        answer: "no",
      },
    ],
    isResult: true,
  },
];

let currentQuestion = totalQuestions[0];

const displayQuestion = (state) => {
    document.getElementsByClassName("item")[0].style.animation ="";

    setTimeout(() => {
        document.getElementById("question").innerHTML = state.text;
        document.getElementsByClassName("item")[0].style.animation ="fadeQuestion 1.5s";
    }, 0);  
};

const handleAnswer = (answer) => {
  const targetQuestion = totalQuestions.find((item) => {
    return item?.previousState?.some(
      (questionItem) =>
        questionItem.answer === answer &&
        questionItem.question === currentQuestion.name
    );
  });
  currentQuestion = targetQuestion;

  if (currentQuestion.isResult) {
    document.getElementsByClassName("choices")[0].style.display = "none";
    document.getElementsByClassName("restart")[0].style.display = "flex";
  }
  displayQuestion(currentQuestion);
};

const restart = () => {
  currentQuestion = totalQuestions[0];
  document.getElementsByClassName("choices")[0].style.display = "flex";
  document.getElementsByClassName("restart")[0].style.display = "none";
  displayQuestion(currentQuestion);
};
