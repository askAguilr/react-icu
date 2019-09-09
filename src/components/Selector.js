import React from 'react';

const Selector = ({children,condition})=>{
    return(
        <div style={{display:condition?'block':'none'}}>
            {children}
        </div>
    )
}

export default Selector;