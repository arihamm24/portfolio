import research from '../../assets/research-cards.json'
function ResearchCard() {
 return (
    <>
    {research.map(pub =>(
        <div className='card'>
            <h4>{pub.title}</h4>
            <p>{pub.publication}</p>
            <p>{pub.date}</p>
            <button><a href={pub.link} target='_blank'>Read Now</a></button>
        </div>
    ))}
    </>
 );
}
export default ResearchCard;