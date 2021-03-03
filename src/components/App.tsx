import React from 'react';
import { Example } from './Example';

const App: React.FC = () => {

    /* Add all components in this container */
    return(
        <div className = 'app_container'>
            
            <Example/>

        </div>
    )
}

export default App;