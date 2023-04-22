import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* over lay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Northern Indian Food </p>
          <p className="px-2">Thaali</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://qph.cf2.quoracdn.net/main-qimg-1c5ee1cbf90825a8aa2e52e4aebbf4c1-lq"
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        {/* over lay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Southern Indian food</p>
          <p className="px-2">Set Dosa</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://sukhis.com/app/uploads/2020/01/Dosa.jpg"
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        {/* over lay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Bihari Dish</p>
          <p className="px-2">Litti Chokha</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://static.toiimg.com/thumb/53188495.cms?width=1200&height=900"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
