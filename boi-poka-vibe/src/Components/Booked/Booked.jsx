import React from 'react';

const Booked = ({booked}) => {
  const {image,bookName, author}= booked;
  return (
   <div className="card bg-base-300 w-96 p-10 shadow-bg ">
  <figure className='bg-gray-300 py-8'>
    <img
      src={image}
       className='h-[166px]'
      alt={bookName} />
  </figure>
  <div className="card-actions justify-center gap-7 mt-3">
      <div className="badge text-green-500 font-bold badge-outline">Young Adult</div>
      <div className="badge text-green-500  font-bold badge-outline">Identity</div>
    </div>
  <div className=" mt-2">
    <h2 className="card-title">
      {bookName }
     
    </h2>
    <p>By : {author}</p>
  </div>
  <div className="flex w-full flex-col">
  <div className="divider"></div>
  </div>
</div>
  );
};

export default Booked;