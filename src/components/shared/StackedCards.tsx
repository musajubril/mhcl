export default function StackedCards() {
    return (
        <div className="relative flex items-center justify-center">
        <div className="relative w-[355px] h-[507px]">

          <div className="absolute  w-[355px] h-[507px] inset-0 transform translate-y-[23.05px] -translate-x-[25.93px] bg-primary/20 rounded-2xl shadow-lg z-0">
            <div className="w-full h-full flex items-center justify-center">
              <h3 className="text-lg font-semibold">Third Card</h3>
            </div>
          </div>
          
          <div className="absolute  w-[355px] h-[507px] inset-0 transform -translate-y-[27.86px] translate-x-[41.3px] bg-primary/10 rounded-2xl shadow-lg z-0">
            <div className="w-full h-full flex items-center justify-center">
              <h3 className="text-lg font-semibold">Second Card</h3>
            </div>
          </div>
          
          {/* Top Image Card */}
          <div className="relative w-[355px] h-[507px] rounded-2xl overflow-hidden shadow-lg z-10">
            <img
              src="/img/hero.jpg"
              alt="Top Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* <div className="absolute top-10 max-mobile: right-0 w-60 z-20 p-4 bg-white rounded-2xl shadow-lg">
           <h3 className="text-lg font-semibold">Second Card</h3>
           <p className="text-sm text-gray-600">This card pops at the top right.</p>
         </div>
  
         <div className="absolute bottom-10 left-0 w-60 z-20 p-4 bg-white rounded-2xl shadow-lg">
           <h3 className="text-lg font-semibold">Third Card</h3>
           <p className="text-sm text-gray-600">This card pops at the bottom left.</p>
         </div> */}
      </div>
    //   <div className="relative flex items-center justify-center h-screen bg-gray-100">
    //     {/* Top Image Card */}
    //     <div className="relative w-80 h-52 rounded-2xl overflow-hidden shadow-lg">
    //       <img
    //         src="https://via.placeholder.com/300"
    //         alt="Top Image"
    //         className="w-full h-full object-cover"
    //       />
    //     </div>
  
    //     {/* Second Card (Top Right) */}
    //     <div className="absolute top-10 right-0 w-60 p-4 bg-white rounded-2xl shadow-lg">
    //       <h3 className="text-lg font-semibold">Second Card</h3>
    //       <p className="text-sm text-gray-600">This card pops at the top right.</p>
    //     </div>
  
    //     {/* Third Card (Bottom Left) */}
    //     <div className="absolute bottom-10 left-0 w-60 p-4 bg-white rounded-2xl shadow-lg">
    //       <h3 className="text-lg font-semibold">Third Card</h3>
    //       <p className="text-sm text-gray-600">This card pops at the bottom left.</p>
    //     </div>
    //   </div>
    );
  }