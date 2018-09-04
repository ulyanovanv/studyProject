import React from "react";
import PropTypes from 'prop-types';
import shortid from 'shortid';

export default function History(props) {
  let {history, travelInHistory} = props;
  let Nhistory = history.slice(1,history.length);
  console.log(Nhistory.length);

  if (!Nhistory.length > 0){
    return null;
  }

  let steps = Nhistory.map((step, index) =>
    <button className="tic-tac-toe_history_step"
            key={shortid.generate()} onClick={() => {travelInHistory(index + 1)}}>
      #{index+1}: {step.label}
    </button>
  );
  let content = (<div className="tic-tac-toe_history">
                  <h4>History</h4>
                  {steps}
                </div>);
  if (Nhistory.length > 0) return content;
}

History.propTypes = {
  history: PropTypes.array.isRequired,
  travelInHistory: PropTypes.func.isRequired,
};