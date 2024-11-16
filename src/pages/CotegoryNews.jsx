import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../componenets/NewsCard';

const CotegoryNews = () => {

    const {data: news} = useLoaderData();
    console.log(news);

    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News Home</h2>
            <p className='text-gray-400 text-sm'>{news.length} News Found On This Category.</p>
            <div>
               {news.map((singLeNews) => 
               <NewsCard key={singLeNews._id} news={singLeNews}></NewsCard>
            )}
            </div>
        </div>
    );
};

export default CotegoryNews;