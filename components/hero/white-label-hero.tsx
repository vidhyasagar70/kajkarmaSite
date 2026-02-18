// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// const features = [
//   "Easy Scaling",
//   "Brand Ready",
//   "Smart Automation",
//   "Fully Managed",
// ];

// export function WhiteLabelHero() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <section 
//       className="relative w-full overflow-hidden bg-white" 
//       style={{ 
//         aspectRatio: '1400 / 583',
//       }}
//     >
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 z-0 flex items-center justify-center" 
//         style={{ 
//           padding: '0 2%',
//         }}
//       >
//         <img
//           src="/heero.svg"
//           alt="Background"
//           className="w-full h-full object-contain"
//           style={{ objectFit: 'contain' }}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full" style={{ padding: '1.67vw 4vw', marginTop: '4.6vw', marginLeft: '1vw' }}>
//         <div style={{ maxWidth: '65vw' }}>
//           {/* Heading */}
//           <h1
//             className="font-clash font-medium text-[ #FFFFFF] transition-all duration-700 ease-out"
//             style={{
//               fontSize: '5.6vw',
//               lineHeight: '1.05',
//               marginBottom: '1vw',
//               opacity: isLoaded ? 1 : 0,
//               transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
//             }}
//           >
//             Searching For Reliable<br />
//             White Label Partner?
//           </h1>

//           {/* Description */}
//           <p
//             className="transition-all duration-700 ease-out"
//             style={{
//               fontFamily: "Geist, sans-serif",
//               fontWeight: 400,
//               fontSize: '1.4vw',
//               lineHeight: "1.3",
//               color: "#FFFFFFCC",
//               marginBottom: '1vw',
//               maxWidth: '50vw',
//               opacity: isLoaded ? 1 : 0,
//               transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
//               transitionDelay: '150ms',
//             }}
//           >
//             Deliver high-quality digital solutions under your own brand<br />
//             while we handle everything behind the scenes.
//           </p>

//           {/* Why Us + Contact Container */}
//           <div className="flex flex-col items-start" style={{ gap: '1vw' }}>
//             {/* Why Us Section with dotted border - sleeker design */}
//             <div 
//               className="inline-flex flex-wrap items-center rounded-full transition-all duration-700 ease-out"
//               style={{
//                 border: "0.1vw dashed rgba(255, 255, 255, 0.6)",
//                 gap: '6.8vw',
//                 padding: '0.6vw 1.2vw',
//                 opacity: isLoaded ? 1 : 0,
//                 transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
//                 transitionDelay: '300ms',
//               }}
//             >
//               {/* Why Us Button */}
//               <div className="flex items-center" style={{ gap: '0.4vw' }}>
//                 <span className="text-[#FFFFFFCC] font-medium" style={{ fontSize: '1.2vw' }}>Why Us?</span>
//                 <svg 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="white" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round"
//                   style={{ width: '1.1vw', height: '1.1vw' }}
//                 >
//                   <line x1="5" y1="12" x2="19" y2="12"/>
//                   <polyline points="12 5 19 12 12 19"/>
//                 </svg>
//               </div>

//               {/* Features with checkmarks - 2x2 grid */}
//               <div className="grid grid-cols-2" style={{ gap: '0.3vw 2.5vw' }}>
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-center" style={{ gap: '0.35vw' }}>
//                     <Image
//                       src="/check_circle_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 1 (1).svg"
//                       alt="Check"
//                       width={18}
//                       height={18}
//                       style={{ width: '1vw', height: '1vw' }}
//                     />
//                     <span className="text-[#FFFFFF] font-normal" style={{ fontSize: '0.9vw' }}>
//                       {feature}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Contact Buttons - Below Why Us */}
//             <div 
//               className="inline-flex items-center transition-all duration-700 ease-out"
//               style={{ 
//                 background: "#411270",
//                 padding: '0.8vw 4.5vw',
//                 borderRadius: '1.5vw',
//                 border: "0.06vw solid rgba(85, 25, 144, 0.2)",
//                 opacity: isLoaded ? 1 : 0,
//                 transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
//                 transitionDelay: '450ms',
//               }}
//             >
//             <a
//               href="https://www.linkedin.com/company/kajkarma"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-white font-medium hover:opacity-80 transition-opacity border-r border-white/30"
//               style={{ gap: '0.4vw', fontSize: '1vw', paddingRight: '1.2vw' }}
//             >
//               <Image src="/linkedin 1.svg" alt="LinkedIn" width={25} height={18} style={{ width: '1.4vw', height: '1vw' }} />
//               Kajkarma
//             </a>

//             <a
//               href="https://wa.me/918461452466"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-white font-medium hover:opacity-80 transition-opacity border-r border-white/30"
//               style={{ gap: '0.4vw', fontSize: '1vw', padding: '0 1.2vw' }}
//             >
//               <Image src="/Whatsapp.svg" alt="WhatsApp" width={25} height={18} style={{ width: '1.4vw', height: '1vw' }} />
//               8461452466
//             </a>

//             <a
//               href="tel:+918461452466"
//               className="flex items-center text-white font-medium hover:opacity-80 transition-opacity"
//               style={{ gap: '0.4vw', fontSize: '1vw', paddingLeft: '1.2vw' }}
//             >
//               <Image src="/phone.svg" alt="Phone" width={25} height={18} style={{ width: '1.4vw', height: '1vw' }} />
//               8461452466
//             </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
