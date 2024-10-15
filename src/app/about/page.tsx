import { loadedData } from '@/services/posts';
import React from 'react';



const aboutPage = async() => {
 const posts= await loadedData();
 console.log(posts)
    return (
        <div className="min-h-[calc(100vh-224px)] dark:bg-background">
            about
        </div>
    );
};

export default aboutPage;