import research from '../../assets/research-cards.json'
function ResearchCard() {
 return (
    <>
    {research.map(pub =>(
        <div className='card' key={pub.id}>
            <h4>{pub.title}</h4>
            <p><em>{pub.publication},</em> {pub.date}</p>
            <button><a href={pub.link} target='_blank'>Read Now</a></button>
        </div>
    ))}
    </>
 );
}
export default ResearchCard;