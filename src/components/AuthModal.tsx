// import React, { useState } from "react";
// import { X } from "lucide-react";

// interface AuthModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     otp: "",
//   });

//   if (!isOpen) return null;
//   ////                               //////////////////////////

//   //          API

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

//   /////                               /////////////

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md relative">
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-gray-400 hover:text-white"
//         >
//           <X size={24} />
//         </button>

//         <div className="flex mb-8 border-b border-gray-800">
//           <button
//             className={`pb-4 px-4 ${
//               isLogin
//                 ? "text-white border-b-2 border-orange-500"
//                 : "text-gray-400"
//             }`}
//             onClick={() => setIsLogin(true)}
//           >
//             Login
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {!isLogin && (
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
//                 placeholder="Enter your full name"
//                 value={formData.fullName}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fullName: e.target.value })
//                 }
//               />
//             </div>
//           )}

//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
//               placeholder="+251900000000"
//               value={formData.phoneNumber}
//               onChange={(e) =>
//                 setFormData({ ...formData, phoneNumber: e.target.value })
//               }
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//             />
//           </div>

//           {!isLogin && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
//                   placeholder="Confirm your password"
//                   value={formData.confirmPassword}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       confirmPassword: e.target.value,
//                     })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">
//                   OTP Code
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
//                   placeholder="Enter OTP code"
//                   value={formData.otp}
//                   onChange={(e) =>
//                     setFormData({ ...formData, otp: e.target.value })
//                   }
//                 />
//               </div>
//             </>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
//           >
//             {isLogin ? "Login" : "Signup"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AuthModal;
