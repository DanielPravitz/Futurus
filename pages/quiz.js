import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import AlternativesForm from '../src/components/AlternativesForm';
import Head from 'next/head';

function ResultWidget({ results }) {
    return (
        <Widget>
            <Widget.Header>
                <h1>Resultado</h1>
            </Widget.Header>
            <Widget.Content>
                <p>Voce acertou
                    {' '}
                    {results.filter((x) => x).length}
                perguntas!</p>

                <ul>
                    {results.map((result, index) => (
                        <li>
                            Pergunta {index + 1} : {result === true ? 'Acertou' : 'Errou'}
                        </li>
                    ))}

                </ul>
            </Widget.Content>
        </Widget>
    );
}

function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>
                Carregando...
        </Widget.Header>

            <Widget.Content style={{ display: 'flex', justifyContent: 'center' }}>
                <p>Carregando as perguntas!</p>
            </Widget.Content>
        </Widget>
    );
}

export function QuestionWidget({
    question,
    totalQuestions,
    questionIndex,
    onSubmit,
    addResults
}) {

    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
    const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
    const questionId = `question__${questionIndex}`;
    const isCorrect = selectedAlternative == question.answer;
    const hasAlternativeSelected = selectedAlternative !== undefined;

    return (
        <Widget>
            <Widget.Header>
                <h3>Pergunta {questionIndex + 1} de {`${totalQuestions}`}</h3>
            </Widget.Header>
            <img
                alt="Descrição"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover'
                }}
                src={question.image}
            />

            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>

                <AlternativesForm onSubmit={(infosDoEvento) => {
                    infosDoEvento.preventDefault();

                    setIsQuestionSubmited(true);

                    setTimeout(() => {
                        addResults(isCorrect);
                        onSubmit();
                        setIsQuestionSubmited(false);
                        setSelectedAlternative(undefined);
                    }, 2 * 1000);


                }}
                >
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`;
                        const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
                        const isSelected = selectedAlternative === alternativeIndex;

                        return (
                            <Widget.Topic
                                as="label"
                                key={alternative}
                                htmlFor={alternative}
                                data-selected={isSelected}
                                data-status={isQuestionSubmited && alternativeStatus}
                            >

                                <input
                                    id={alternativeId}
                                    name={questionId}
                                    onChange={() => setSelectedAlternative(alternativeIndex)}
                                    type="radio"
                                />
                                {alternative}
                            </Widget.Topic>
                        );
                    })}


                    <Button type="submit" disabled={!hasAlternativeSelected}>
                        Confirmar
                    </Button>

                    {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
                    {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}

                </AlternativesForm>


            </Widget.Content>
        </Widget>

    );

}


const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
};

export default function QuizPage() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [results, setResults] = React.useState([]);
    const questionIndex = currentQuestion;
    const totalQuestions = db.questions.length;
    const question = db.questions[questionIndex];

    React.useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ);

        }, 1 * 2000);
    }, []);


    function addResults(result) {
        setResults([...results, result]);
    }



    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;
        if (nextQuestion < totalQuestions) {
            setCurrentQuestion(nextQuestion);
        } else {
            setScreenState(screenStates.RESULT);
        }
    }

    return (
        <QuizBackground backgroundImage={db.bg}>

            <Head>
                <title>Futurus Quiz - Blade Runner</title>
                <link rel="shortcut icon" href="iconTitle.png" type="image/x-icon"></link>
            </Head>

            <QuizContainer>

                {screenState === screenStates.QUIZ && (
                    <QuestionWidget
                        question={question}
                        questionIndex={questionIndex}
                        totalQuestions={totalQuestions}
                        onSubmit={handleSubmitQuiz}
                        addResults={addResults}
                    />
                )}

                {screenState === screenStates.LOADING && <LoadingWidget />}

                {screenState === screenStates.RESULT && <ResultWidget results={results} />}

            </QuizContainer>
        </QuizBackground>
    );
}


