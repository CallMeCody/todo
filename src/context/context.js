  
import React, {useState} from 'react';

export const SiteContext = React.createContext();

function Context(props) {
  const [hideComplete, setHideComplete] = useState(false);
  const [display, setDisplay] = useState(3);
  const [sort, setSort] = useState('difficulty');

  const contextualState = {
    hideComplete,
    display, 
    sort,
    changeHideCompleteTo: setHideComplete,
    changeDisplayTo: setDisplay,
    changeSortTo: setSort
  }

  return (
    <SiteContext.Provider value={contextualState}>
      {props.children}
    </SiteContext.Provider>
  )
}

export default Context;