import React from 'react'
import Card from "../Components/Card"
import Table from "../Components/Table"

let a = [
  {
    name : "guitar",
  },
  {
    name : "guitar",
  },
  {
    name : "guitar",
  },
  {
    name : "guitar",
  },
  // {
  //   name : "guitar",
  // },
  // {
  //   name : "guitar",
  // },
]

const Overview = () => {
  return (
    <div>
      <h1 className="text-left text-4xl font-bold text-gray-500" >Overview</h1>
        <div className='m-6 flex justify-around w-full gap-4 border-red-50' >
          {
            a.map((item,index)=><Card 
            className="m-4"
            name={item.name}
            title="Software Engineer"
            key={index}
            />)
          }
        </div>

        <div className='m-6' >
          <h1>LATEST ENROLMENTS</h1>
          <Table />
        </div>
        <div  className='m-6'  >
        <h1>BEST STUDENTS</h1>
          <Table />
        </div>
    </div>
  )
}

export default Overview
