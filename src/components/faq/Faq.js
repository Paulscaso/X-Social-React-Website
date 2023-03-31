import React from 'react';
import {MdOutlineLibraryBooks} from 'react-icons/md'
import Question from './Question';
import {questions} from './data'

function Faq() {
  return (
    <section id="faq"> 
      <div className="container faq">
      <div className="u-title">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>FAQs</h2>
          <p className="u-text-small u-text-dark">
            socialX is Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
          </p>
        </div> 
      </div>
      <div className="questions">
        {questions.map((question)=>(
            <Question title={question.title} answer={question.answer} />
        ))}
        
      </div>
    </section>
  )
}

export default Faq