import React from 'react'


function Search(props) {
    return (
            <div>
                <input className = 'search' onChange = {props.onChange} value = {props.value}
                    placeholder="Search country..."
                />
                    <button className = 'searchButton' onClick = {props.onClick}>Search</button>
                    <button className = 'clearButton' style = {{marginLeft: '10px'}} onClick = {props.onDoubleClick} variant="secondary">Clear</button>

            </div>
    )
}

export default Search