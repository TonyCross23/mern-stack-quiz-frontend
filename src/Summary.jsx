import React from "react";

const Summary = ({quizCount,summary}) => {

    const {correct,wrong} = summary;

    return (
        <div className="text-center">

            {quizCount === correct && (
                <>
                 <span className="text-success fs-2">မေးခွန်းအာလုံးမှန်တယ်မအေလိုးလေး</span>
                </>
            )}

           {wrong > 0 && (
            <>
              <span className="text-danger fs-2">{correct} ခုမှန်တယ်၊ {wrong} ခုမှားတယ်၊ မအေလိုးလေး</span>
            </>
           )}
        <br />
            <a href="http:://localhost:3000" className="btn btn-sm btn-success  my-3">try again</a>
        </div>

        
    );
}

export default Summary;