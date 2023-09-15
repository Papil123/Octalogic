import React from 'react';

const Status = ({ ob }) => {
  return (
    <div>
      {ob.isArchive && (
        <button className="bg-gray-200 px-4 py-1 w-24 rounded-xl">Archived</button>
      )}
      {!ob.isArchive && ob.isActive && (
        <button className="bg-green-200 px-4 py-1 w-24 rounded-xl">Active</button>
      )}
      {!ob.isArchive && !ob.isActive && (
        <button className="bg-red-200 px-4 py-1 w-24 rounded-xl">Close</button>
      )}
    </div>
  );
};

export default Status;