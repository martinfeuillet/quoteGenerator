import React, {createContext, useState} from 'react';
import axios from "axios";


export const DataContext = createContext()

const DataProvider = (props) => {
    const[data, setData] = useState([]);

    axios.get('')
        .then(response => {
            const data = response.data
            setData(data)
        }).catch(err => console.error(err))


    return (
        <div>
            <DataContext.Provider value={[data, setData]}>
                {props.children}
            </DataContext.Provider>
        </div>
    );
};

export default DataProvider;