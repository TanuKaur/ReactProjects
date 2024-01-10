import React, { useState } from "react";
import Card from "./Card";
function Cards({courses,category}){
    let allCourses=[];
    const [likedCourses, setLikedCourses]= useState([]);
    const getCourses=()=>{
        if(category==="All")
        {
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                     allCourses.push(course);
                })
            });
            return allCourses;
        }
        else{
            return courses[category];
        }
       
    }
    return(
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          {
            getCourses().map((course)=>(
             <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
          ))
          }
        </div>
    )
}
export default Cards;