import React, { useState } from 'react';
import { 
    Route,
    Switch
} from 'react-router-dom';

import Home from './screens/Home';
import Game from './screens/Game';

import history from './config/history';

function App() {
    /*  
        Here, we'll set up our router and will show page based on the url
        I was getting 'type-xxx-is-missing-the-following-properties-from-type-elementclass-context error' 
        and I resolved it by upgrading @types/react to latest.
    */
    const [size, setBoardSize] = useState<number>(3)
    const onEnter = (size: number) => {
        // now we can redirect to /game 
        setBoardSize(size);
        console.log(size)
        history.push(`/game`);
    }

    return (
        <>
            <Switch>
                <Route path='/' exact component={() => <Home onEnter={onEnter}/>}/>
                <Route path='/game' component={() => <Game size={size}/>}/> 
            </Switch>
        </>
    )
}

export default App;