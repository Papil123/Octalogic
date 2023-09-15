import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
// import { getData,addData } from "../Redux/Courses/action";

// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";

const Add = () => {
 const [course, setcourse] = useState({
    coursename: "",
    courseDescription: "",
    instrument: "",
    instructor: "",
    dayofweak: "",
    nuofStudent: 0,
    price: "",
    isactive: true,
    isarchive: false,
  });
  const [popup, setpopup] = useState(false);
//   const dispatch = useDispatch();
//   const { loading, msg, error } = useSelector((store) => store.getCourses);

  const handleTogle = () => {
    console.log("Toggled popup");
    setpopup(!popup);
  };

  const handleadd = () => {
    let payload = { ...course, id: course.coursename + new Date() };
    // dispatch(addData(payload));
  };


  return (
    <>
      <div className="fixed bottom-12 right-12 flex items-center gap-2 bg-red-300  rounded-xl p-4 cursor-pointer"   onClick={handleTogle}>
        <AiOutlinePlus /> Add Course
      </div>
      {popup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-96 space-y-4">
            <h1 className="text-xl font-semibold">Add Course</h1>
            <input
              type="text"
              placeholder="Course Name"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={course.coursename}
              onChange={(e) =>
                setcourse({ ...course, coursename: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={course.courseDescription}
              onChange={(e) =>
                setcourse({ ...course, courseDescription: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Instructor"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={course.instructor}
              onChange={(e) =>
                setcourse({ ...course, instructor: e.target.value })
              }
            />
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={course.instrument}
              onChange={(e) =>
                setcourse({ ...course, instrument: e.target.value })
              }
            >
              <option value="">Instrument</option>
              <option value="piano">Piano</option>
              <option value="guitar">Guitar</option>
              <option value="violin">Violin</option>
              {/* Add other options here */}
            </select>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={course.dayofweak}
              onChange={(e) =>
                setcourse({ ...course, dayofweak: e.target.value })
              }
            >
              <option value="">Day of the week</option>
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              {/* Add other options here */}
            </select>
            <input
              type="text"
              placeholder="Price"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={course.price}
              onChange={(e) => setcourse({ ...course, price: e.target.value })}
            />
            <div className="flex justify-end space-x-4">
              <button
                className="cursor-pointer text-gray-500 font-medium"
                onClick={handleTogle}
              >
                Cancel
              </button>
              <button
                className="cursor-pointer px-4 py-2 bg-pink-300 rounded-md font-semibold"
                onClick={handleadd}
              >
                Add Course
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Add;
