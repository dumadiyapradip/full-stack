import './App.css';

// this componet are use the futer use animation .

function ProductHome() {
    // eslint-disable-next-line no-unused-vars
    let timeRunning = 3000
    let timeAutoNext = 7000

    function nextBtn() {
        showSlider('next')
    }

    function prevBtn() {
        showSlider('prev')
    }

    // eslint-disable-next-line no-unused-vars
    let runTimeOut

    let runNextAuto = setTimeout(() => {
        nextBtn()
    }, timeAutoNext)


    function resetTimeAnimation() {
        // runningTime.style.animation = 'none'
        // runningTime.offsetHeight /* trigger reflow */
        // runningTime.style.animation = null
        // runningTime.style.animation = 'runningTime 7s linear 1 forwards'
    }

    const showSlider = () => {
        // let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
        // if (type === 'next') {
        //     list.appendChild(sliderItemsDom[0])
        //     carousel.classList.add('next')
        // } else {
        //     list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        //     carousel.classList.add('prev')
        // }

        // clearTimeout(runTimeOut)

        // runTimeOut = setTimeout(() => {
        //     carousel.classList.remove('next')
        //     carousel.classList.remove('prev')
        // }, timeRunning)



        clearTimeout(runNextAuto)
        runNextAuto = setTimeout(() => {
            nextBtn()
        }, timeAutoNext)
    

        resetTimeAnimation() // Reset the running time animation
    }

    // Start the initial animation 
    // resetTimeAnimation()
    return (
        <>
            {/* <div classNameName="sm:flex items-center max-w-screen-xl md:flex">
                <div classNameName="sm:w-2/4 p-10 ">
                    <div classNameName=" flex justify-center image object-center text-center w-full">
                        <img src="https://eventcracker.com/wp-content/uploads/2023/01/andiejustin-751-441x300.jpg" />
                    </div>
                    <div classNameName=" flex justify-center image object-center text-center w-fulls mt-10 h-56 ">
                        <img src="https://eventcracker.com/wp-content/uploads/2024/02/CCA24-Hi-Res-Suite-300x300.jpg" />
                    </div>
                </div>
                <div classNameName="sm:w-2/4  w-full flex justify-center">
                    <div classNameName="text">
                        <span classNameName="text-gray-500 border-b-2 border-indigo-600 uppercase"></span>
                        <h2 classNameName="my-4 font-bold text-3xl  sm:text-4xl "> <span style={{ color: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>“It’s All In The Details!” – My Motto</span>
                        </h2>
                        <p classNameName="text-gray-700">
                            Eventcracker is a full-service event and wedding planning company located in Oregon, Operating PNW & Thailand.
                            We offer professional event planning and co-ordination service for intimate weddings, corporate events, gala dinner & more.
                            Enhanced with more than a decade of local and international experience, our network of supplier contacts, built over a lifetime, allows us to negotiate the best possible deal for every aspect of your wedding. We will assist in keeping you organized, and ensure that not even the smallest details get overlooked, offering a truly tailored approach to planning your wedding & events.
                            Schedule a Complimentary Consultation now & let me get to know you a little more.
                            Eventcracker is a full-service event and wedding planning company located in Oregon, Operating PNW & Thailand.
                            We offer professional event planning and co-ordination service for intimate weddings, corporate events, gala dinner & more.
                            Enhanced with more than a decade of local and international experience, our network of supplier contacts, built over a lifetime, allows us to negotiate the best possible deal for every aspect of your wedding. We will assist in keeping you organized, and ensure that not even the smallest details get overlooked, offering a truly tailored approach to planning your wedding & events.
                            Schedule a Complimentary Consultation now & let me get to know you a little more.
                        </p>
                    </div>
                </div>
            </div> */}



            <header>

                <nav>
                    <a href="" className="active">Home</a>
                    <a href="">About</a>
                    <a href="">Portfolio</a>
                    <a href="">Services</a>
                    <a href="">Contact</a>
                </nav>

            </header>


            <div className="carousel">

                <div className="list">

                    <div className="item" style={{ backgroundImage: " url(image/heron.jpeg)" }}>
                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">EAGLE</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>



                    <div className="item" style={{ backgroundImage: " url(image/heron.jpeg)" }} >

                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">HERON</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>

                    </div>

                    <div className="item" style={{ backgroundImage: "url(image/butterfly2.jpg)" }} >

                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">BUTTERFLY</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>

                    </div>

                    <div className="item" style={{ backgroundImage: "url(image/parrot2.jpg)" }} >

                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">PARROT</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="arrows">
                    <button className="prev" onClick={prevBtn()}> A</button>
                    <button className="next" onClick={nextBtn()}> B </button>
                </div>



                <div className="timeRunning"></div>

            </div>



        </>
    )
}

export default ProductHome
