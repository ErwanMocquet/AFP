export default function PortfolioImg({ post }) {

    let image = "https://react-api.igorlech.dk/wp-content/uploads/2022/09/igor.png";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <img src={post.acf.image ? post.acf.image.url : image} alt={post.acf.image ? post.acf.image.alt : "Default Image"} className="portfolio-img" />
    )
}