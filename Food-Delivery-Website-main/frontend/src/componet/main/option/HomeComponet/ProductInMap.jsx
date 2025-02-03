// Product.js
import { useState } from 'react';
//this componet use the big img  in side small image theis small imag componet
// eslint-disable-next-line react/prop-types
function ProductInMap({ product }) {
    // eslint-disable-next-line react/prop-types
    const [currentImage, setCurrentImage] = useState(product.MianImg); // initial main image

    const handleThumbnailClick = (image) => {
        const ImageUpdate = image.SubImg
        setCurrentImage(ImageUpdate);
    };

    return (
        <div>
            {/* // eslint-disable-next-line react/prop-types */}
            < img src={currentImage} alt={product}
                className="w-full max-h-[400px] sm:min-h-[400px] md:min-h-[100px] lg:min-h-[200px] rounded-lg shadow-md mb-4 " />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">

                {/* eslint-disable-next-line react/prop-types */}
                {product.OtherImg.map((image, index) => (
                    <div key={image._id}>
                        <img
                            src={image.SubImg}
                            alt={`Image ${index + 1}`}
                            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer  transition duration-300"
                            onClick={() => handleThumbnailClick(image)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default ProductInMap

