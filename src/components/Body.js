import { useEffect, useState } from "react";
import RestaurantCard,{withOpenLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    const RestaurantCardOpen = withOpenLabel(RestaurantCard);

    console.log(listOfRestaurants);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8649473&lng=77.538296&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json);
            setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
        return(<h1>Looks like you are offline, please check your internet connection</h1>)

    if(listOfRestaurants === 0 ){
        return <Shimmer></Shimmer>
    }
    return(
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4">
                    <input type="text" className="search-box
                    border-solod border-black" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
                    <button className="px-4 py-2 bg-green-200 m-4 rounded-lg" onClick={()=>{
                        
                        const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText));

                        setFilteredRestaurants(filteredRestaurant);

                    }}>Search</button>
                </div>
                <div>
                <button className="px-4 py-2 bg-slate-300 rounded-lg" onClick = {()=>{
                    const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating>4);
                    setListOfRestaurants(filteredList);
                }}
                
                >
                    Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    listOfRestaurants.map(restaurant => 
                    <Link 
                        key={restaurant.info.id}
                        to= {"/restaurants/"+ restaurant.info.id}>
                            {restaurant.info.isOpen? (<RestaurantCardOpen resData={restaurant}/>):(<RestaurantCard resData = {restaurant}/>)}
                       
                    </Link>)
                }
            </div>
        </div>
    )
};
export default Body;