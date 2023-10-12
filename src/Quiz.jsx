import React, { useState } from 'react';
import useFetch from './hook/useFetch';
import Summary from './Summary';

const Quiz = () => {

    const {loader,quiz} = useFetch();
    const [activeQuiz,setActiveQuiz] = useState(0);
    const [activeAnswer,setActiveAnswer] =useState(false);
    const [summary,setSummary] = useState({correct : 0 , wrong : 0});

    const renderActiveAnswer = (ans) => {
        setActiveAnswer(ans);
    }

    const renderNext = () => {
        setActiveQuiz(activeQuiz + 1);
        setActiveAnswer(false);
        if(activeAnswer.isCorrect) {
            setSummary({correct : summary.correct + 1 , wrong : summary.wrong});
        }else {
            setSummary({correct : summary.correct , wrong : summary.wrong + 1 });
        }
    }

    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 offset-md-3">
                    <div className="card bg-dark">
                        <div className="card-body">

                        {loader &&    (
                        <div className='d-flex justify-content-center align-items-center'>
                                <span className='text-white'>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                </span>
                            </div>
                       )}
                            {!loader && quiz.length < activeQuiz + 1 &&   <Summary quizCount={quiz.length} summary={summary} />}
                     

                         {!loader &&  quiz.length >= activeQuiz + 1  &&  (
                         <>
                         <span className='float-right badge badge-success'>{activeQuiz + 1}/{quiz.length}</span>
                            <h4 className='text-success'>{quiz[activeQuiz].questions}</h4>
                            <ul className="list-group mt-3">

                                {quiz[activeQuiz].answers.map((ans,index)=> (
                                    <li key={index} onClick={()=>renderActiveAnswer(ans)} className={`list-group-item p-2 mt-1 ${activeAnswer !== false && 'disabled'}
                                    ${activeAnswer !== false && 
                                        activeAnswer._id === ans._id &&
                                        activeAnswer.isCorrect === false && "bg-danger text-white"}
                                        ${activeAnswer !== false && 
                                            activeAnswer._id === ans._id &&
                                            activeAnswer.isCorrect === true && "bg-success text-white"}`
                                    }>
                                        <span className='btn btn-sm btn-dark'>{index + 1}</span>
                                        <span>{ans.answer}</span>
                                    </li>
                                ))}

                            </ul>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center">
                                    <button onClick={renderNext} className={`btn btn-success ${activeAnswer ===false && "disabled"}`}>Next</button>
                                    {activeAnswer  !== false && activeAnswer.isCorrect === true && (
                                        <span className='text-success'>Correct Answer</span>
                                    )}
                                       {activeAnswer  !== false && activeAnswer.isCorrect === false && (
                                        <span className='text-danger'>Wrong Answer</span>
                                    )}
                            </div>
                        </>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Quiz;