import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

const NewsCards = ({ articles, head }) => {
    return (
        <div>
            {articles.map((article, i) => (
                <NewsCard/>
            ))}
        </div>
    );
}

export default NewsCards;