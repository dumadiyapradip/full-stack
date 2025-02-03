// import { useEffect } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { PracingDataFatch } from "../../../../app/feature/PricingData/PricingData"
import Loader from "../../../../Asside/Loader"
import Errows from "../../../../Asside/Errows"

const Pricing = () => {

const pass=0;

  useEffect(() => {
    dispatch(PracingDataFatch())
  }, [pass])

  const dispatch = useDispatch()
  const isLoader = useSelector((state) => state.PricingDatastoreProvider.isLoader)
  const pricing = useSelector((state) => state.PricingDatastoreProvider.PricingDataFatchValue)
  const isErrow = useSelector((state) => state.PricingDatastoreProvider.isErrow)
 
  return (
    <>
      {
        (isLoader) && (!isErrow) && <Loader />
      }
      {
        (pricing !== null) &&
        <>
          <div className="sm:flex sm:flex-col sm:align-center  mt-16 ">
            <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 md:grid md:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">

              <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                <div className="p-6">
                  <h2 className="text-xl leading-6 font-bold text-slate-900">Day Of Coordination – 200000
                    (Perfect for couples who have booked, planned, and organized it all)</h2>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <ul role="list" className="mt-4 space-y-3">
                    {pricing[0].map((data) => (
                      <li className="flex space-x-3" key={data._id}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                          height="24" viewBox="0 0 24 24"><path d="m21.707 11.293-7-7A1 1 0 0 0 13 5v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10v3a1 1 0 0 0 1.707.707l7-7a1 1 0 0 0 0-1.414zM15 16.586V15a1 1 0 0 0-1-1H4v-4h10a1 1 0 0 0 1-1V7.414L19.586 12z" style={{ fill: "#1c1b1e" }} data-name="Right" /></svg>
                        <span className="text-slate-700  text-sm	">{data.key}
                          <ol className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                              height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M5 12l5 5l10 -10"></path>
                            </svg>
                            <li className="text-base">{data.data}</li>
                          </ol>
                        </span>
                      </li>
                    ))}
                    <Link
                      className="mb-3 inline-block lg:ml-20 mt-5 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      type="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                      to={'/about'}>
                      Lets Talk
                    </Link>
                  </ul>
                  <h2 className="text-xl leading-6 pt-3 text-slate-900">With these comprehensive services, couples can relax and enjoy their special day while the wedding planner takes care of every detail.</h2>
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                <div className="p-6">
                  <h2 className="text-xl leading-6 font-bold text-slate-900">Partial Planning + Coordination  – 300000
                    (Perfect when you have vendors booked and need help with putting them together)</h2>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <ul role="list" className="mt-4 space-y-3">
                    {pricing[1].map((data) => (
                      <li className="flex space-x-3" key={data._id}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                          height="24" viewBox="0 0 24 24"><path d="m21.707 11.293-7-7A1 1 0 0 0 13 5v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10v3a1 1 0 0 0 1.707.707l7-7a1 1 0 0 0 0-1.414zM15 16.586V15a1 1 0 0 0-1-1H4v-4h10a1 1 0 0 0 1-1V7.414L19.586 12z" style={{ fill: "#1c1b1e" }} data-name="Right" /></svg>
                        <span className="text-slate-700  text-sm	">{data.key}
                          <ol className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                              height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M5 12l5 5l10 -10"></path>
                            </svg>
                            <li className="text-base">{data.data}</li>
                          </ol>
                        </span>
                      </li>
                    ))}
                    <Link
                      className="mb-3 inline-block lg:ml-20 mt-5 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      type="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                      to={'/about'}>
                      Lets Talk
                    </Link>
                  </ul>
                  <h2 className="text-xl leading-6 pt-3 text-slate-900">This partial planning package aims to provide comprehensive support, from the initial stages of planning to the execution of the event and post-event responsibilities.</h2>
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                <div className="p-6">
                  <h2 className="text-xl leading-6 font-bold text-slate-900">Full planning & coordination – $3650
                    (From start to end we are in this together)</h2>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <ul role="list" className="mt-4 space-y-3">
                    {pricing[2].map((data) => (
                      <li className="flex space-x-3" key={data._id}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                          height="24" viewBox="0 0 24 24"><path d="m21.707 11.293-7-7A1 1 0 0 0 13 5v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10v3a1 1 0 0 0 1.707.707l7-7a1 1 0 0 0 0-1.414zM15 16.586V15a1 1 0 0 0-1-1H4v-4h10a1 1 0 0 0 1-1V7.414L19.586 12z" style={{ fill: "#1c1b1e" }} data-name="Right" /></svg>
                        <span className="text-slate-700  text-sm	">{data.key}
                          <ol className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                              height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M5 12l5 5l10 -10"></path>
                            </svg>
                            <li className="text-base">{data.data}</li>
                          </ol>
                        </span>
                      </li>
                    ))}
                    <Link
                      className="mb-3 inline-block lg:ml-20 mt-5 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      type="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                      to={'/about'}>
                      Lets Talk
                    </Link>
                  </ul>
                  <h2 className="text-xl leading-6 pt-3 text-slate-900">Our goal is to make your wedding day seamless, beautiful, and memorable, handling every detail from start to finish.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="container mx-auto px-4 py-8" >
              {pricing[3].map((data) => (
                <div className="flex flex-wrap -mx-4" key={data._id}>
                  <div className="w-full md:w-1/2 px-4 mb-8">
                    <img src={data.SubImg} alt="Product"
                      className="w-full h-auto  shadow-md mb-4" />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-8">
                    <img src={data.SubImg} alt="Product"
                      className="w-full h-auto  shadow-md mb-4" />
                  </div>
                </div>
              ))}
            </div>
            <div className="container mx-auto  " >
              <div className="text-center p-10">
                <h1 className="bg-gradient-to-r f-w font-black  from-orange-700 to-pink-600 bg-clip-text text-transparent text-4xl">Rehearsal Dinner Decor Setup + Take Down 500000  </h1>
              </div>
              <div className=" flex flex-wrap -mx-4">

                <div className="w-full md:w-1/2 px-4 mb-8">
                  <ol>
                    {pricing[0].map((data) => (

                      <li className="flex mt-3" key={data._id}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                          height="24" viewBox="0 0 24 24"><path d="m21.707 11.293-7-7A1 1 0 0 0 13 5v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10v3a1 1 0 0 0 1.707.707l7-7a1 1 0 0 0 0-1.414zM15 16.586V15a1 1 0 0 0-1-1H4v-4h10a1 1 0 0 0 1-1V7.414L19.586 12z" style={{ fill: "#1c1b1e" }} data-name="Right" /></svg>
                        <li className="text-base ms-3">{data.datas}</li>

                      </li>
                    ))}
                  </ol>
                </div>
                <ul className="w-full md:w-1/2 px-4 mb-8">
                  {pricing[4].map((data) => (
                    <li className="box ms-20" key={data._id}>
                      <img src={data.SubImg} alt="Product" className=" w-full h-auto  shadow-md mb-4" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full flex h-auto justify-center" style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
              <Link
                className="mb-3  lg:ml-20  rounded px-6 pb-2 pt-2.5 text-4xl font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                to={'/about'}>
                HAVE OTHER REQUIREMENTS? Lets’s talk
              </Link>
            </div>
          </div >
        </>
      }
      {
        (!isLoader) && (isErrow) && <div className="mt-40"> <Errows /></div>
      }



    </>
  )
}

export default Pricing
