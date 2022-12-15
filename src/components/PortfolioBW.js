// made by Igor

// fetching the data for black and white images

import { useEffect, useState } from "react";
import PortfolioImg from "../components/PortfolioImg";
import * as React from 'react';

export default function PortfolioBW({loading}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://react-api.igorlech.dk/wp-json/wp/v2/blacks?_embed");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);

    return (
        <div className="portfolio-img-container">
            {posts.slice(0).reverse().map(post => (
                <PortfolioImg key={post.id} post={post} />
            ))}
        </div>
    )
}