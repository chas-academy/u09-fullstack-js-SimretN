// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import SwiperCore from 'swiper';
// import 'swiper/css/bundle';
// import ListingItem from '../components/ListingItem';

// export default function Home() {
//   const [offerListings, setOfferListings] = useState([]);
//   const [saleListings, setSaleListings] = useState([]);
//   const [rentListings, setRentListings] = useState([]);
//   SwiperCore.use([Navigation]);
//   console.log(offerListings);
//   useEffect(() => {
//     const fetchOfferListings = async () => {
//       try {
//         const res = await fetch('https://u09-fullstack-js-simretn.onrender.com/api/listing/get?offer=true&limit=4');
//         const data = await res.json();
//         setOfferListings(data);
//         fetchRentListings();
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     const fetchRentListings = async () => {
//       try {
//         const res = await fetch('https://u09-fullstack-js-simretn.onrender.com/api/listing/get?type=rent&limit=4');
//         const data = await res.json();
//         setRentListings(data);
//         fetchSaleListings();
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const fetchSaleListings = async () => {
//       try {
//         const res = await fetch('https://u09-fullstack-js-simretn.onrender.com/api/listing/get?type=sale&limit=4');
//         const data = await res.json();
//         setSaleListings(data);
//       } catch (error) {
//         log(error);
//       }
//     };
//     fetchOfferListings();
//   }, []);
//    return (
//      <div>
//        {/* top */}
//       <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
//         <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
//           Find your next <span className='text-slate-500'>perfect</span>
//           <br />
//           place with ease
//         </h1>
//         <div className='text-gray-400 text-xs sm:text-sm'>
//           Fabi Estate is the best place to find your next perfect place to
//           live.
//           <br />
//           We have a wide range of properties for you to choose from.
//         </div>
//         <Link
//           to={'/search'}
//           className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
//         >
//           Let's get started...
//         </Link>
//       </div>

//       {/* swiper */}
//       <Swiper navigation>
//         {offerListings &&
//           offerListings.length > 0 &&
//           offerListings.map((listing) => (
//             <SwiperSlide>
//               <div
//                 style={{
//                   background: `url(${listing.imageUrls[0]}) center no-repeat`,
//                   backgroundSize: 'cover',
//                 }}
//                 className='h-[500px]'
//                 key={listing._id}
//               ></div>
//             </SwiperSlide>
//           ))}
//       </Swiper>

//       {/* listing results for offer, sale and rent */}

//       <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
//         {offerListings && offerListings.length > 0 && (
//           <div className=''>
//             <div className='my-3'>
//               <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
//               <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
//             </div>
//             <div className='flex flex-wrap gap-4'>
//               {offerListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}
//         {rentListings && rentListings.length > 0 && (
//           <div className=''>
//             <div className='my-3'>
//               <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
//               <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
//             </div>
//             <div className='flex flex-wrap gap-4'>
//               {rentListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}
//         {saleListings && saleListings.length > 0 && (
//           <div className=''>
//             <div className='my-3'>
//               <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
//               <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
//             </div>
//             <div className='flex flex-wrap gap-4'>
//               {saleListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('https://u09-fullstack-js-simretn.onrender.com/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('https://u09-fullstack-js-simretn.onrender.com/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('https://u09-fullstack-js-simretn.onrender.com/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-6 py-20 px-4 max-w-7xl mx-auto text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg shadow-lg">
        <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
          Find Your Perfect <span className="text-yellow-300">Home</span> Today
        </h1>
        <p className="text-gray-200 text-sm sm:text-lg max-w-xl">
          Discover a wide selection of properties to suit all your needs. Explore listings for rent, sale, and exclusive offers.
        </p>
        <Link
          to={'/search'}
          className="mt-4 bg-yellow-300 text-blue-900 font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 transition-all"
        >
          Start Searching
        </Link>
      </div>

      {/* Swiper Section */}
      <div className="my-10 max-w-7xl mx-auto px-4">
        <Swiper navigation loop={true} className="rounded-lg shadow-lg">
          {offerListings &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    backgroundImage: `url(${listing.imageUrls[0]})`,
                  }}
                  className="h-[400px] bg-center bg-cover relative flex items-center justify-center rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  <h2 className="text-white text-3xl font-semibold z-10">Exclusive Offers</h2>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Listings Sections */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
        {[{ title: 'Exclusive Offers', listings: offerListings, type: 'offer' },
          { title: 'Homes for Rent', listings: rentListings, type: 'rent' },
          { title: 'Homes for Sale', listings: saleListings, type: 'sale' }]
          .map((section) => (
            <div key={section.type} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-1">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-700">{section.title}</h2>
                <Link to={`/search?type=${section.type}`} className="text-blue-600 hover:underline text-sm">
                  View More {section.title}
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {section.listings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
