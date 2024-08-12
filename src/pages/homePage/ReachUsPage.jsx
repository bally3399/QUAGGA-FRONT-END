import {FaPhone} from "react-icons/fa";
import React from "react";
import {FaLocationDot, FaMessage} from "react-icons/fa6";

const ReachUsPage = () => {
    return(
        <div className="mt-4 p-4 bg-[#093c5e]-300 rounded ">
            <h2 className="text-gray-700 text-xl font-bold">Reach us</h2>
            <div className="text-gray-600 text-lg">

                <a href="#" className="text-gray-400 mt-3 p-4"><FaLocationDot size="1.5em" /></a> 326 Herbert Macaulay Way, Lagos, Nigeria, ZIP 101212.
               <br/> <a href="#" className="text-gray-400 mt-3 p-4"><FaPhone size="1.5em" /></a>+234 456 789 4572.
               <br/> <a href="#" className="text-gray-400 mt-3 p-4"><FaMessage size="1.5em" /></a> info@quaggaapp.com
            </div>
        </div>
    )
}
export default ReachUsPage;