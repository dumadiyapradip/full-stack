//import the componet
import Product from '../Product'
import ProductInHome from '../ProductInHome'
import SlideProductInHome from '../SlideProductInHome'
import Loader from '../../../../../Asside/Loader'
import { HomeFatchdata } from '../../../../../app/feature/HomeData/HomeDataFatch'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Errows from '../../../../../Asside/Errows'
import CarouselA from './Carousel'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  const dispatch = useDispatch()
  useEffect(() => { dispatch(HomeFatchdata()) }, [dispatch])
  const isLoader = useSelector((state) => state.HomeFatchdataProvider.isLoader)
  const data = useSelector((state) => state.HomeFatchdataProvider.HomeData)
  const isErrow = useSelector((state) => state.HomeFatchdataProvider.isErrow)

  return (
    <>
      {
        (isLoader) && (!isErrow) && <Loader />
      }
      {/* <Product /> */}

      {(data !== null) &&
        <>

          <CarouselA />
          <Product />
          <ProductInHome />
          {/* <SlideProductInHome /> */}
        </>
      }

      {
        (!isLoader) && (isErrow) && <div className="mt-40"> <Errows /></div>
      }

    </>

  )
}

export default Home

