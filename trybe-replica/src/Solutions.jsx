import React from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

function Solutions(props) {
  const solutionId = props.match.params.solutionId;

  if (solutionId) return <h2>{solutionId}</h2>

  return (
    <div>
      <h1>Gabaritos</h1>
      {props.avaiableSolutions.map((solution) => (
        <div key={solution}>
          <span>
            <Link className="solution-link" to={`/solutions/${solution}`}>
              {solution}
            </Link>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Solutions;