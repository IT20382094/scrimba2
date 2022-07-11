import React from "react"

export default function Card(props) {
    return (
        // <div className="card">
        //     <img src={`../images/${props.img}`} className="card--image" />
        //     <div className="card--stats">
        //         <span className="gray">{props.location}</span>
        //         <img src="../images/star.png" className="card--star" />
        //         <span>{props.rating}</span>
        //         <span className="gray">({props.reviewCount}) • </span>
                
        //     </div>
        //     <p>{props.title}</p>
        //     <p><span className="bold">From ${props.price}</span> / person</p>
        // </div>

        <table>
            <tr>
            <td><img src={`../images/${props.img}`}/></td>
        <td><div><p>{props.Location}
            <a href={props.LocationUrl}> View on Google Maps</a></p>
            <h1>{props.Name}</h1>
            <h3>{props.Date}</h3>
            <p>{props.Description}</p>
            </div>
            </td>
            </tr>
        </table>
        // <div>
        //     <img src={aaaa}/>
        //     <p>Location
        //     <a href="https://maps.google.com"> View on Google Maps</a></p>
        //     <h1>Mount Fuji</h1>
        //     <h3>20203043o0ew</h3>
        //     <p>It is the second-highest volcano located on an island in Asia 
        //         (after Mount Kerinci on the island of Sumatra), and seventh-highest peak of an island on Earth.</p>
        // </div>
    )
}