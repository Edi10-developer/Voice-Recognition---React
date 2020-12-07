import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';

const alanKey = 'a7f403e32f77d45d387112dd427f10cc2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArtcles, setNewsArticles] =useState([]);
    const classes = useState();

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
           <div className={classes.logoContainer}>
               <img src='https://alan.app/voice/images/previews/preview.jpg' className={classes.alanLogo} alt="logo" />
           </div>
            <NewsCards articles={newsArtcles} />
        </div>
    )
}

export default App;