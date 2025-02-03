
const Button = ({children}) => {
  return (
    <button   style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }} className=' text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>
      {children}
    </button>
  )
}

export default Button
