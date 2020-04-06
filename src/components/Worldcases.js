import React from 'react';

function Worldcases(props) {
    return (
    <div className = 'worldstats'>
        <div bg={"dark"} text ={'white'} style={{ width: '20rem' }}>
        <div>
         <h1>Cases</h1>
            {props.cases}
        </div>
        <div>Last Updated: {props.updated}</div>
      </div>

      <div bg={"danger"} text ={'white'} style={{ width: '20rem' }}>
        <div>
         <h1 style= {{color: 'red'}}>Deaths</h1>
            {props.deaths}
        </div>
        <div>Last Updated: {props.updated}</div>
      </div>

      <div bg={"success"} text ={'white'} style={{ width: '20rem' }}>
        <div>
         <h1 style= {{color: 'green'}}>Recoveries</h1>
            {props.recoveries}
        </div>
        <div>Last Updated: {props.updated}</div>
      </div>
    </div>
    )
}

export default Worldcases