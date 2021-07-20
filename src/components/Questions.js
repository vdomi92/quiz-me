const questions = [
  {
    questionText:
      'Which of the following is the correct syntax for a button click event handler?',
    answerOptions: [
      { answerText: '<button onclick={()=>foo}>', isCorrect: false },
      { answerText: '<button onclick={this.foo}>', isCorrect: false },
      { answerText: '<button onclick={this.foo}>', isCorrect: false },
      { answerText: '<button onClick={()=>foo}>', isCorrect: true },
    ],
  },
  {
    questionText:
      'How do you write an inline style which specifies the margin-left:12px and color:blue; in JSX?',
    answerOptions: [
      {
        answerText: "style={{margin-left:12px,color:'blue'}}",
        isCorrect: false,
      },
      {
        answerText: "style={{margin-left:'12px',color:'blue'}}",
        isCorrect: true,
      },
      {
        answerText: "style={margin-left:'12px',color:'blue'}",
        isCorrect: false,
      },
      { answerText: "style={{margin-left:12,color:'blue'}}", isCorrect: false },
    ],
  },
  {
    questionText: 'Everything in React is a _________',
    answerOptions: [
      { answerText: 'Component', isCorrect: true },
      { answerText: 'Module', isCorrect: false },
      { answerText: 'Package', isCorrect: false },
      { answerText: 'Class', isCorrect: false },
    ],
  },
  {
    questionText: 'How many elements does a React component return?',
    answerOptions: [
      { answerText: 'Multiple elements', isCorrect: true },
      { answerText: '1 element', isCorrect: false },
      { answerText: '2 elements', isCorrect: false },
      { answerText: 'None', isCorrect: false },
    ],
  },
  {
    questionText: 'What is ReactJS?',
    answerOptions: [
      { answerText: 'Server side framework', isCorrect: false },
      {
        answerText: 'Library for building interaction interfaces',
        isCorrect: true,
      },
      { answerText: 'User-interface framework', isCorrect: false },
      { answerText: 'None of these', isCorrect: false },
    ],
  },
  {
    questionText: 'How can you pass data to a component from outside in React?',
    answerOptions: [
      { answerText: 'setState', isCorrect: false },
      { answerText: 'render with arguments', isCorrect: false },
      { answerText: 'PropTypes', isCorrect: false },
      { answerText: 'props', isCorrect: true },
    ],
  },
  {
    questionText: 'ReactJS uses ____ to increase performance',
    answerOptions: [
      { answerText: 'Virtual DOM', isCorrect: true },
      { answerText: 'Original DOM', isCorrect: false },
      { answerText: 'Both', isCorrect: false },
      { answerText: 'None of these', isCorrect: false },
    ],
  },
  {
    questionText: 'Who develops ReactJS?',
    answerOptions: [
      { answerText: 'Facebook', isCorrect: true },
      { answerText: 'Apple', isCorrect: false },
      { answerText: 'Twitter', isCorrect: false },
      { answerText: 'Google', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the name of ReactJS developer?',
    answerOptions: [
      { answerText: 'Jordan Mike', isCorrect: false },
      { answerText: 'Tim Lee', isCorrect: false },
      { answerText: 'Jordan Walke', isCorrect: true },
      { answerText: 'Johnny Walker', isCorrect: false },
    ],
  },
  {
    questionText: 'Question ten',
    answerOptions: [
      { answerText: 'a', isCorrect: true },
      { answerText: 'b', isCorrect: false },
      { answerText: 'c', isCorrect: false },
      { answerText: 'd', isCorrect: false },
    ],
  },
]

export default questions
