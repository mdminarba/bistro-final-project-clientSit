import { Link } from "react-router-dom";

const DataCard = ({ card }) => {
    const {link, picture, description, title } = card;
    console.log(picture)
    return (

        <div className="card lg-w-72  bg-base-100 shadow-xl">
            <a href={link}>
            <figure><img className="mt-5 w-full  rounded-md" src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>

            </a>
          <div className="flex justify-center">
          <Link to="/application"><button className="btn mb-5  btn-secondary">apply for visa</button></Link>
          </div>
                
        </div>
    )
}



export default DataCard












