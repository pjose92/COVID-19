import React from 'react';

function Countries(props) {
    return(
        <div className = 'box'>
        <div style={{ width: '20rem',border: 'none'}}>
          <img variant="top" src={props.src} />
          <div>
            <h1 style = {{fontWeight: 'bold', fontSize: '28px'}}>{props.country}</h1>
            <p style = {{borderBottom: '0.02px solid grey'}}><span style ={{fontWeight: 'bold'}}>Recovered: </span>{props.recovered}</p>
            <p style = {{borderBottom: '0.02px solid grey'}}><span style ={{fontWeight: 'bold'}}>Cases: </span>{props.cases}</p>
            <p style = {{borderBottom: '0.02px solid grey'}}><span style ={{fontWeight: 'bold'}}>Deaths: </span>{props.deaths}</p>
            <p style = {{borderBottom: '0.02px solid grey'}}><span style ={{fontWeight: 'bold'}}>Active: </span>{props.active}</p>
            <p style = {{borderBottom: '0 solid grey'}}><span style ={{fontWeight: 'bold'}}>Critical: </span>{props.critical}</p>
          </div>
        </div>
      </div>
    )
}

export default Countries
