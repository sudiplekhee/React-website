import Navbar from "./Navbar"

function Create({text}){
    return(
        <>
        <Navbar/>
<div className="flex items-center justify-center h-screen">
  <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
    {/* Logo and Heading */}
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-blue-600 flex items-center justify-center">
        <span className="mr-1 text-3xl font-bold">ES</span>
        BAZAR
      </h1>
      <p className="text-gray-500 text-sm mt-1">
        Best online ecommerce website for you
      </p>
    </div>
    {/* Divider */}
    <div className="my-6 border-t border-gray-300 relative">
      <span className="absolute top-[-10px] bg-white left-1/2 transform -translate-x-1/2 px-3 text-gray-500">
        Sign up
      </span>
    </div>
    {/* Form */}
    <form className="space-y-4">
      {/* Full Name */}
      
      <div>
        {
          text=="login" && (
<input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
          )
        }
        
      </div>
      {/* Mobile Number */}
      <div>
        <input type="text" placeholder="Mobile Number" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
      </div>
      {/* Email */}
      <div>
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
      </div>
      {/* Password */}
      <div className="relative">
        <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
        <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
          👁️
        </span>
      </div>
      {/* Confirm Password */}
      <div className="relative">
        <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
        <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
          👁️
        </span>
      </div>
      {/* Submit Button */}
      <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition">
        {
          text=="login"? "Login" : "Sign up"
        }
      </button>
    </form>
    {/* Footer */}
    <div className="mt-4 text-center">
      <p className="text-gray-500 text-sm">
        Have your account? 
        <a href="#" className="text-blue-500 font-medium hover:underline">Login Now</a>
      </p>
    </div>
  </div>
</div>

        </>
    )
}
export default Create