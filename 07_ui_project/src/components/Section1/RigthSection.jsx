import React from "react";
import RightCard from "./RightCard";
import 'remixicon/fonts/remixicon.css'


const RigthSection = (props) => {
  console.log(props.users.color)
  return (
    <div  id= "right"className="h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6  w-2/3 ">
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} img={elem.img} id={idx} tag={elem.tag} color={elem.color}/>
      })}
    </div>
  );
};

export default RigthSection;
