import { useState } from "react";
import ImageComponent from "./components/ImageComponent";
import SearchBar from "./components/SearchBar";
import CategoryButtons from "./components/CategoryButtons";
import "./index.css";

const images = [
    { title: "Cat", src: "https://i.pinimg.com/736x/99/6c/a6/996ca6d41ae979589d3f50e0967cdcb9.jpg", category: "Animal" },
    { title: "Monkey", src: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3", category: "Animal" },
    { title: "Dog 1", src: "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg", category: "Animal" },
    { title: "Dog 2", src: "https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg", category: "Animal" },
    { title: "Duck 1", src: "https://i.natgeofe.com/k/327b01e8-be2e-4694-9ae9-ae7837bd8aea/mallard-male-swimming.jpg", category: "Animal" },
    { title: "Modern Art", src: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/65/78ce0081ad11e681d7bb31b0a632ef/starry-night.jpg", category: "Art" },
    { title: "Mona Lisa", src: "https://cdn.britannica.com/87/2087-004-264616BB/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg", category: "Art" },
    { title: "Man", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", category: "Human" },
    { title: "Kid", src: "https://images.squarespace-cdn.com/content/v1/5dd409b4699a1b3c39b79e9d/1594587737493-O02S51PMMPJ092XGYYXK/Infants_3.jpg", category: "Human" },
];

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [categoryTitle, setCategoryTitle] = useState("All Pictures");

    const filteredImages = images.filter((image) => {
        return (
        (selectedCategory === "All" || image.category === selectedCategory) &&
        image.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCategoryTitle(category === "All" ? "All Pictures" : `${category} Pictures`);
    };

    return (
        <div className="container">
        <h1 className="galleryTitle">Gallery</h1>
        <div className="searchBar">
            <SearchBar onSearch={setSearchQuery} />
        </div>
        <CategoryButtons onSelectCategory={handleCategoryChange} />
        <h2>{categoryTitle}</h2>
        <div className="imageGrid">
            {filteredImages.map((image, index) => (
            <ImageComponent key={index} title={image.title} src={image.src} />
            ))}
        </div>
        </div>
    );
}

export default App;
