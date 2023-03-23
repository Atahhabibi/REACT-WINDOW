import SingleQuestion from "./SingleQuestion"


const Questions = ({questions,toggleQuestion,activeID}) => {
    return<section className="container">
        <h1>Questions</h1>
        {
            questions.map((question)=>{
               return <SingleQuestion key={question.id} {...question} toggleQuestion={toggleQuestion} activeID={activeID}/>
            })
        }


    </section>

}

export default Questions
