import React, { createContext, useContext, useState } from 'react'
const InternContext = createContext();
export const InternProvider = ({children}) => {
  const [domain,SetDomain] = useState("");
  const [duration,setDuration] = useState(0);

  const value = {domain,SetDomain,duration,setDuration};

  return (
    <InternContext.Provider value={value}>
        {children}
    </InternContext.Provider>
  )

};
export const useIntern = ()=> useContext(InternContext);



