import research from '../../assets/research-cards.json'
import { useState } from 'react';

const categories = [...new Set(research.flatMap((project) => project.category))];

const ResearchCard = () => {

    const [filteredPubs, setFilteredPubs] = useState(research);
    const [activeFilter, setActiveFilter] = useState(null);

    function Filter() {
        const handleFilter = (cat) => {
            setActiveFilter(cat);
            if (cat === "All") {
                setFilteredPubs(research); //display all projects!
            } else {
                const filtered = research.filter(project => project.category.includes(cat));
                setFilteredPubs(filtered);
            }
        }

        return (
            <div id="filterButtonContainer">
                <button className={`filterButton ${activeFilter === "All" ? "active" : ""}`} onClick={() => handleFilter("All")}>All</button>
                {categories.map((category, id) => (
                    <button key={id} className={`filterButton ${activeFilter === category ? "active" : ""}`}onClick={() => handleFilter(category)}>{category}</button>
                ))}
            </div>
        );
    }

    return (
        <>
        <Filter />
        <div className="cardsContainer" id="research-cards">
            {filteredPubs.map(pub =>(
                <div className='card' key={pub.id}>
                    <h4>{pub.title}</h4>
                    <p><em>{pub.publication},</em> {pub.date}</p>
                    <button><a href={pub.link} target='_blank'>Read Now</a></button>
                </div>
            ))}
        </div>
        </>
    );
}
export default ResearchCard;