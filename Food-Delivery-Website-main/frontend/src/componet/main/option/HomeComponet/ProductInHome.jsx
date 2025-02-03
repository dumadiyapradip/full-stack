import { useSelector } from "react-redux"

//this componet use the small size product img and country name here

function ProductInHome() {
    const ProductInHome = useSelector((state) => state.HomeFatchdataProvider.HomeData)

    return (
        <>
            <div className="text-center p-10">
                <h1 className="bg-gradient-to-r f-w font-black  from-orange-700 to-pink-600 bg-clip-text text-transparent text-3xl">“different types of events” – </h1>
            </div>
            {(ProductInHome[2] !== null) &&
                <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5" data-aos="flip-up" >
                    {ProductInHome[2].map((item) => (
                        <div className="w-72 bg-white shadow-md rounded-xl duration-800  hover:shadow-2xl" key={item._id}  >
                            <img src={item.Img} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">IND</span>
                                <p className="text-lg font-bold text-black truncate block capitalize">{item.Contern}</p>
                            </div>
                        </div>
                    ))}

                </section>
            }
        </>
    )
}

export default ProductInHome
