import React, { createElement } from 'react';


const SearchBox = ({searchfield, searchChange})=>{
    return(
        <div className='pa2'>
         <input 
            className='pa3 ba b--white bg-yellow'
            type='search' 
            placeholder='search robots'
            onChange={searchChange}
            />
         </div>
    );
}

export default SearchBox;