import Description from "./Description";

const carImageURL =
  "https://images.turo.com/media/vehicle/images/Tlhf9YyOT2OVd3k6QrKayQ.480x270.jpg";

const carImageURL1 ="https://images.turo.com/media/vehicle/images/n1CoFyN7SBipATkgsqqu2Q.768x432.jpg"; 

const carImageURL2 ="https://images.turo.com/media/vehicle/images/K-j3mlSkRIGNgcwncTmeGQ.768x432.jpg";

export default function CarDetails() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <div className="sm:px-16 px-6 mx-auto flex flex-col gap-4">
        <div className="flex gap-2 justify-center">
          <div className="w-[75%]">
            <img
              className="h-[427px] w-full rounded-xl"
              alt=""
              src={carImageURL}
            />
          </div>
          <div className="gap-3 flex flex-col w-1/4 justify-center">
            <div>
              <img
                className="h-[215px] object-cover rounded-xl"
                alt=""
                src={carImageURL1}
              />
            </div>
            <div>
              <img
                className="h-[200px] object-cover rounded-xl"
                alt=""
                src={carImageURL2}
              />
            </div>
          </div>
        </div>
        <div className="">
          <Description />
        </div>
      </div>
    </main>
  );
}

// import Description from "./Description";

// const carImageURL = "https://images.turo.com/media/vehicle/images/Tlhf9YyOT2OVd3k6QrKayQ.480x270.jpg";

// export default function CarDetails() {
//   return (
//     <main className="max-w-[1440px] mx-auto">
//       <div className="sm:px-16 px-6 flex flex-col gap-4 ">
//         <div className="flex gap-2 bg-slate-500">
//           <div className="w-[65%] ">
//             <img
//               className="h-[410px] w-full rounded-s-xl"
//               alt=""
//               src={carImageURL}
//             />
//           </div>
//           <div className="flex-1 flex flex-col justify-evenly gap-2">
//             <div>
//               <img
//                 className="h-[200px] object-cover rounded-e-xl"
//                 alt=""
//                 src={carImageURL}
//               />
//             </div>
//             <div>
//               <img
//                 className="h-[200px] object-cover rounded-e-xl"
//                 alt=""
//                 src={carImageURL}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="relative">
//           <Description />
//         </div>
//       </div>
//     </main>
//   );
// }
