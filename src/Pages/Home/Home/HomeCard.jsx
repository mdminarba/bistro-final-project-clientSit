
const HomeCard = ({ card }) => {
    const { picture, description, title } = card;
    return (

        <div className="card lg:w-80 bg-base-100 shadow-xl">
            <figure><img className="mt-5 w-full rounded-md" src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}



export default HomeCard












