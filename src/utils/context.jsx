import { createContext , useState , useEffect } from "react";

export const Context = createContext()

const AppContext = ({children}) => {
    
    const [albums, setAlbums] = useState('');
    const [selectedPlaylist,setSelectedPlaylist] = useState('')
    const [albumInfo,setAlbumInfo] = useState('')
    


    return(
        <Context.Provider value={{albums,setAlbums,selectedPlaylist,setSelectedPlaylist,albumInfo,setAlbumInfo}}>
            {children}
        </Context.Provider>
    )
}

export default AppContext