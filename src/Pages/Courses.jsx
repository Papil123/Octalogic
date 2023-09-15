// import React from 'react'
// import Table from "../Components/Table"

// const Courses = () => {
//   return (
//     <div className='w-full' >
//       <h1 className='text-3xl bold m-6' >Courses</h1>
//       <div className='m-6 ' >
//           <h1>COURSE LIST</h1>
//           <Table  className='w-full' />
//         </div>
//     </div>
//   )
// }

// export default Courses



import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
// import { getData } from "../Redux/Courses/action";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import Row from "../Components/Row";
import Add from "../Components/Add";

const Courses = () => {
  // const dispatch = useDispatch();
  // const course = useSelector((store) => store.getCourses.course);

  // useEffect(() => {
  //   if (course.length === 0) {
  //     dispatch(getData());
  //   }
  // }, []);

  const Courses = [
    {
      id: 1,
      coursename: "Guitar Basics",
      courseDescription: "Learn the fundamentals of playing the guitar.",
      instrument: "Guitar",
      instructor: "John Smith",
      dayofweek: "Monday",
      numberOfStudents: 15,
      price: 150,
      isArchive: false,
      isActive: true,
    },
    {
      id: 2,
      coursename: "Piano for Beginners",
      courseDescription: "Start your journey into the world of piano playing.",
      instrument: "Piano",
      instructor: "Emily Davis",
      dayofweek: "Tuesday",
      numberOfStudents: 12,
      price: 180,
      isArchive: true,
      isActive: false,
    },
    {
      id: 3,
      coursename: "Violin Mastery",
      courseDescription: "Advanced violin techniques for experienced players.",
      instrument: "Violin",
      instructor: "Sarah Johnson",
      dayofweek: "Wednesday",
      numberOfStudents: 10,
      price: 200,
      isArchive: false,
      isActive: true,
    },
    {
      id: 4,
      coursename: "Drumming Essentials",
      courseDescription: "Learn the basics of drumming and rhythm.",
      instrument: "Drums",
      instructor: "Michael Lee",
      dayofweek: "Thursday",
      numberOfStudents: 18,
      price: 140,
      isArchive: true,
      isActive: false,
    },
    {
      id: 5,
      coursename: "Singing for All Ages",
      courseDescription: "Explore the joy of singing with various vocal exercises.",
      instrument: "Voice",
      instructor: "Rachel White",
      dayofweek: "Friday",
      numberOfStudents: 20,
      price: 120,
      isArchive: false,
      isActive: false,
    },
    {
      id: 6,
      coursename: "Flute for Intermediates",
      courseDescription: "Intermediate-level flute lessons for aspiring flutists.",
      instrument: "Flute",
      instructor: "David Brown",
      dayofweek: "Monday",
      numberOfStudents: 10,
      price: 160,
      isArchive: true,
      isActive: false,
    },
    {
      id: 7,
      coursename: "Bass Guitar Mastery",
      courseDescription: "Advanced techniques for playing the bass guitar.",
      instrument: "Bass Guitar",
      instructor: "Chris Anderson",
      dayofweek: "Tuesday",
      numberOfStudents: 8,
      price: 220,
      isArchive: false,
      isActive: true,
    },
    {
      id: 8,
      coursename: "Songwriting Workshop",
      courseDescription: "Learn to compose and arrange your own songs.",
      instrument: "Various",
      instructor: "Alicia Clark",
      dayofweek: "Wednesday",
      numberOfStudents: 15,
      price: 190,
      isArchive: true,
      isActive: false,
    },
    {
      id: 9,
      coursename: "Trumpet for Beginners",
      courseDescription: "Beginner trumpet lessons for aspiring brass players.",
      instrument: "Trumpet",
      instructor: "Robert Wilson",
      dayofweek: "Thursday",
      numberOfStudents: 14,
      price: 170,
      isArchive: false,
      isActive: true,
    },
    {
      id: 10,
      coursename: "Electronic Music Production",
      courseDescription: "Create electronic music using digital tools and software.",
      instrument: "Computer",
      instructor: "Mark Smith",
      dayofweek: "Friday",
      numberOfStudents: 12,
      price: 210,
      isArchive: true,
      isActive: false,
    },
  ];
  
  
  
  

  
  


  return (
    <>
      <div className="p-6 justify-center w-full">
    <h1 className="text-left text-4xl font-bold text-gray-500">Course</h1>
        <div className=" mt-8 ml-4 flex justify-between items-center">
          <div className="text-gray-400 text-2xl  font-semibold">COURSE LIST</div>
          <div className="flex text-center items-center space-x-2 bg-white">
            <BsSearch />
            <input
              type="text"
              placeholder="Search"
              className="bg-white border border-gray-200 rounded-md py-1 px-2"
            />
          </div>
        </div>
        <div className=" bg-white mt-8 ml-4 p-4 rounded-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Instrument</TableHead>
                <TableHead>Day of Week</TableHead>
                <TableHead># of Students</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Courses.map((el) => {
                return <Row key={el.id} obj={el} />;
              })}
            </TableBody>
          </Table>
        </div>
      </div>
      <Add/>
    </>
  );
};

export default Courses;