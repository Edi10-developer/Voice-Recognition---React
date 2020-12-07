import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';


const alanKey = 'a7f403e32f77d45d387112dd427f10cc2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArtcles, setNewsArticles] =useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, []);

    return(
        <div>
            <h1>Alan AI News Application</h1>
            <NewsCards articles={newsArtcles} />
        </div>
    )
}

export default App;