// made by Igor

// fetching the data for covers images

import { useEffect, useState } from "react";
import PortfolioImg from "../components/PortfolioImg";

export default function PortfolioCovers() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://react-api.igorlech.dk/wp-json/wp/v2/coverups?_embed");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);

    return (
        <div className="portfolio-img-container">
            {posts.map(post => (
                <PortfolioImg key={post.id} post={post} />
            ))}
        </div>
    )
}