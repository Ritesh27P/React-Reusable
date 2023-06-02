import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(()=> {
        const handle = ()=> {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', handle);
        
        return () => {
            window.removeEventListener('popstate', handle)
        }
    }, [])

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to)
    }

    return <NavigationContext.Provider value={{currentPath, navigate}}>
        <button onClick={() => {navigate('/accordion')}} >Accordion</button>
        <button onClick={() => {navigate('/dropdown')}} >Dropdown</button>
        {currentPath}
        {children}
    </NavigationContext.Provider>
}

export {NavigationProvider}

export default NavigationContext;