   import React, { useEffect, useState } from "react"
   import { useUser } from "@clerk/clerk-react";
   import client from "../lib/graphqlClinet";
   import toast from "react-hot-toast";
   import { GET_CARS } from "../queries/getCars";
  import CarCard from "../layouts/CarCard";
import Modal from "./Modal";

   
   const CarList = () => {
    
    const [cars, setCars] =useState([]);
    const [filter,setFilter]=useState("All");
    const [selectedCar, setSelectedCar]=useState(null);
    const {isSignedIn , user}= useUser();
    

    useEffect(()=>{
      client.request(GET_CARS)
      .then((res)=>setCars(res.carLists))
      .catch(()=>toast.error("Failed to fetch cars"));
    },[]);

    const filteredCars = filter === "All" ? cars : cars.filter((car) => car.carBrand === filter);

    const uniqueBrands = ["All", ...new Set(cars.map((car) => car.carBrand))];

     return (
       <section className="py-10 px-4 bg-red-50"> 
        <h2 className="text-center text-3xl font-bold mb-6" 
        data-aos="fade-up"
        data-aos-delay="100"
        >Explore Our Top Deal</h2>

        {/* filters */}
        <div className=" flex gap-3 justify-center md-8 flex-wrap pb-10"
        data-aos="fade-up"
        data-aos-delay="100">
          {uniqueBrands.map((brand)=>(
            <button key={brand} className={`px-4 py-2 rounded-full border text-sm 
            ${filter === brand ? "bg-red-100 text-red-500 border-red-300" 
            : "bg-white border-gray-300"}`} onClick={() => setFilter(brand)}>

              {brand}
            </button>
            ))}
        </div>

        {/* cards */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto place-items-center"
        data-aos="fade-up"
        data-aos-delay="100">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} onRentClick={setSelectedCar}/>

          ))}
        </div>

        {/* Modal */}
         {selectedCar && (
          <Modal 
           car={selectedCar}
           onClose={() => setSelectedCar(null)} 
           isLoggedIn={isSignedIn} 
           user={user}/>
         )}
       </section>
     )
   }
   
   export default CarList