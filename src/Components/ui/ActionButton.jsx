import React, { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { getData } from '../Redux/Courses/action';

const ActionButton = ({ ob }) => {
  const [isopen, setisopen] = useState(false);
//   const dispatch = useDispatch();

  const handleclose = () => {
    axios
      .patch(`https://ill-rose-cormorant-boot.cyclic.app/courses/${ob.id}`, {
        ...ob,
        isactive: false,
      })
      .then((r) => {
        alert('Course Closed ....');
        dispatch(getData());
        setisopen(!isopen);
      })
      .catch((e) => {
        console.log(e);
        alert('Error ....');
        setisopen(!isopen);
      });
  };

  const handlearchive = () => {
    axios
      .patch(`https://ill-rose-cormorant-boot.cyclic.app/courses/${ob.id}`, {
        ...ob,
        isarchive: !ob.isarchive,
      })
      .then((r) => {
        alert('Course Archived ....');
        dispatch(getData());
        setisopen(!isopen);
      })
      .catch((e) => {
        console.log(e);
        alert('Error ....');
        setisopen(!isopen);
      });
  };

  const handleTogle = () => {
    console.log("Toggled popup");
    setisopen(!isopen);
  };

  return (
    <>
      <div onClick={handleTogle}>
        <BiDotsVerticalRounded />
        {isopen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-300">
            {!ob.isarchive && (
              <h3 className="px-4 py-2 hover:bg-blue-200 cursor-pointer">Edit Course</h3>
            )}
            {!ob.isarchive && (
              <h3
                className="px-4 py-2 hover:bg-red-200 cursor-pointer"
                onClick={handleclose}
              >
                Close Course
              </h3>
            )}
            <h3
              className={`px-4 py-2 hover:bg-${
                ob.isarchive ? 'green' : 'blue'
              }-200 cursor-pointer`}
              onClick={handlearchive}
            >
              {ob.isarchive ? 'Unarchive' : 'Archive'} Course
            </h3>
          </div>
        )}
      </div>
      {/* {isopen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50" />
      )} */}
    </>
  );
};

export default ActionButton;