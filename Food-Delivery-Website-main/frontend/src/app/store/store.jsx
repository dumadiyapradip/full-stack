import { configureStore } from '@reduxjs/toolkit'
import ServiceCardSlice from '../feature/CardData/serviceCardFeature.jsx'
import UserData from '../feature/UserData/UserPorsonData.jsx'
import AddToCard from '../feature/addToCardStore/AddToCard.jsx'
import HomeFatchdataProvider from '../feature/HomeData/HomeDataFatch.jsx'
import PricingProductMaxPass from '../feature/PricingData/PricingData.jsx'
import UserDataAddSlide from '../feature/UserData/UserPorsonData.jsx'
import NavDataSlide from '../feature/navdataSlide/NavDataSlide.jsx'
import ProductaddToCardSlice from '../feature/productCard/AddToproduct.jsx'
import ProductCardSlice from '../feature/productCard/ProductFetchData.jsx'

export const store = configureStore({
  reducer: {
    NavProvider: NavDataSlide,
    userData: UserData,
    HomeFatchdataProvider: HomeFatchdataProvider,
    ServiceCardSlice: ServiceCardSlice,
    ProductCardSlice: ProductCardSlice,
    AddToProdcut: ProductaddToCardSlice,
    AddToCard: AddToCard,
    // AddToProdcut: AddToProdcut,
    PricingDatastoreProvider: PricingProductMaxPass,
    UserPorsonData: UserDataAddSlide,
  },
})

