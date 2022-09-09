import { useState } from "react";
import favorite from "./favorite.css"

const Favorite = () => {
    const [locationname, setlocationname] = useState("");
    const [properttype, setproperttype] = useState("");
    const [price, setprice] = useState("");
    const [beds, setbeds] = useState("");
    const [propertyposted, setpropertyposted] = useState([
        {

            image: "https://i.postimg.cc/BP6sKs7r/istockphoto-1272163106-612x612.jpg",
            price: "1000",
            location: "Delhi",
            property_type: "PG",
            bedroom: "2"

        },
        {

            image: "https://i.postimg.cc/BP6sKs7r/istockphoto-1272163106-612x612.jpg",
            price: "2000",
            location: "Haryana",
            property_type: "House",
            bedroom: "1"

        }
    ])
    const Postproperty = (event) => {
        event.preventDefault()
        console.log(locationname, properttype, price, beds)
        setpropertyposted([...propertyposted, {
            image: "https://i.postimg.cc/BP6sKs7r/istockphoto-1272163106-612x612.jpg",
            price: price,
            location: locationname,
            property_type: properttype,
            bedroom: beds
        }])
        setlocationname("")
        setproperttype("")
        setprice("")
        setbeds("")

    }
    return (
        < div className="container">

            <div className="propertypostcard">
                <div className="propertyposttitle">
                    <h1>Enter Property Details:</h1>
                </div>

                <div className="propertypostform">
                    <form onSubmit={Postproperty} >
                        <div className="postformtable">
                            <div>
                                <label for="location">Location:</label>
                                <input required type="text" id="location" name="location" value={locationname} onChange={(e) => { setlocationname(e.target.value) }} />
                            </div>
                            <div>
                                <label for="type">Propert type:</label>
                                <input required type="text" id="type" name="type" value={properttype} onChange={(e) => { setproperttype(e.target.value) }} />
                            </div>
                            <div>
                                <label for="price">Price:</label>
                                <input required type="number" id="price" name="price" value={price} onChange={(e) => { setprice(e.target.value) }} />
                            </div>
                            <div>
                                <label for="bedroom"> Bedroom:</label>
                                <input required type="number" id="bedroom" name="bedroom" value={beds} onChange={(e) => { setbeds(e.target.value) }} />
                            </div>
                            <div>
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="listingofproperty">
                {propertyposted && propertyposted.map((res) => (
                    <>
                        <div className="slistcard">
                            <div className="spropertyimg">
                                <img src={res.image} />
                            </div>
                            <div className="sbottom">
                                <p className="location"><b>Location are </b>{res.location} </p>
                                <p className="price"><b>Price are</b> ${res.price}</p>
                                <p className="typt"><b>Property type is</b> {res.property_type}</p>
                                <p className="bedroom"><b>bedroom</b> {res.bedroom}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>

    )
}
export default Favorite;