
import { useEffect, useState } from "react"
import data from "../data"
import "./home.css"

const Home = () => {

    const [city, setcity] = useState();
    const [propertytype, setpropertytype] = useState();
    const [price, setprice] = useState();
    const [listproperty, setlistproperty] = useState([])

    useEffect(() => {
        if (data) {
            setlistproperty(data)
        }
    }, [])

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = data.filter((res) => {
            return res.location.search(value) !== -1;
        });
        setlistproperty(result);
    }


    const handleSelect = (evt) => {
        setcity(evt.target.value);
        let value = evt.target.value.toLowerCase();
        let result = [];
        result = data.filter((res) => {
            return res.location.search(value) !== -1;
        });
        setlistproperty(result);


    };

    const handleSelecttype = (evt) => {
        setcity(evt.target.value);
        let value = evt.target.value.toLowerCase();
        let result = [];
        result = data.filter((res) => {
            return res.property_type.search(value) !== -1;
        });
        setlistproperty(result);


    };

    const handleSelectprice = (evt) => {

        let x = evt.target.value;
        if (x === "low") {
            const parsePrice = x => parseFloat(x) || 0
            const sortedStudios = data
                .slice()
                .sort((a, b) => parsePrice(a.price) - parsePrice(b.price))

            setlistproperty(sortedStudios)
        }
        if (x === "high") {
            const parsePrice = x => parseFloat(x) || 0
            const sortedStudios = data
                .slice()
                .sort((a, b) => parsePrice(b.price) - parsePrice(a.price))

            setlistproperty(sortedStudios)
        }


    };


    return (
        < div className="container">

            <div className="propertysearch">
                Search property for rents:
            </div>
            <div className="listingof property">
                <div className="filters">
                    <div className="selectlocation filteris">
                        <div className="selectorboxtitle">
                            Select location:
                        </div>
                        <select id="lang" onChange={handleSelect} value={city}>
                            <option value="">select</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Haryana">Haryana</option>
                        </select>
                    </div>
                    <div className="selectcity filteris">
                        <div className="selectorboxtitle">
                            Property type:
                        </div>
                        <select id="lang" onChange={handleSelecttype} value={propertytype}>
                            <option value="">select</option>
                            <option value="House">House</option>
                            <option value="PG">PG</option>
                            <option value="Villa">Villa</option>

                        </select>
                    </div>
                    <div className="selectprice filteris">
                        <div className="selectorboxtitle">
                            Price range:
                        </div>
                        <select id="lang" onChange={handleSelectprice} value={price} >
                            <option value="">select</option>
                            <option value="high">High to Low</option>
                            <option value="low">Low to High </option>
                        </select>
                    </div>

                    <div className="searchbar filteris" >
                        <div className="selectorboxtitle">
                            Search:
                        </div>
                        <input type="text" onChange={(event) => handleSearch(event)} />
                    </div>
                </div>
                <div className="listingofproperty">
                    {listproperty && listproperty.map((res) => (
                        <>
                            <div className="listcard">
                                <div className="propertyimg">
                                    <img src={res.image} alt="img" />
                                </div>
                                <div className="bottom">
                                    <p className="location"><b>Location are </b>{res.location}</p>
                                    <p className="price"><b>Price are</b> ${res.price}</p>
                                    <p className="typt"><b>Property type is</b> {res.property_type}</p>
                                </div>
                            </div> <br />
                        </>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default Home;