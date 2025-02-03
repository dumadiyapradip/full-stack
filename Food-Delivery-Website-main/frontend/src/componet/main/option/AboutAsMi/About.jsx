// import { useSelector, useDispatch } from 'react-redux'
import Contect from './Contect'
import MapShareLink from './C'

function About() {

  return (
    <>

      <div className="flex justify-center sm:flex flex-row items-center  max-w-screen-2xl  mt-28 w-full">

        <div className="sm:w-2/3 p-5  text-center ">
          <div className="text-center p-2">
            <h1 className="bg-gradient-to-r f-w font-black  from-orange-400 to-pink-800 bg-clip-text text-transparent mb-4 text-4xl">“It’s All In The Details!” –  </h1>
            <h1 className=" bg-gradient-to-r f-w font-black  from-orange-400 to-pink-800 bg-clip-text text-transparent mb-4 text-3xl">My Motto</h1>
          </div>
          <div className=" p-10">
            <div className=" flex justify-center image object-center text-center w-full">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" />
            </div>
          </div>
          <div>

            <p className="text-gray-700">
              Hi, I am dumadiya pradip g a passionate web developer with a keen interest in exploring the latest technologies and innovations in the industry. With a strong foundation in REACT.js, tailwind , node.js and usefull languge  I am always looking for ways to improve my skills and stay up-to-date with the latest trends.
            </p>
            <p className="text-gray-700">
              Welcome to Eventcracker, where we’re all about taking your events from ordinary to extraordinary! I’m Sweety Karwa, the founder and owner of this amazing wedding and event planning company, and I specialize in creating personalized and unforgettable experiences for Traditional, Ethnic, Indian and Multi-Cultural weddings. Based out of Oregon, I also operate in the USA and Thailand, so you can count on me to handle your event regardless of location.            </p>
            <p className="text-gray-700">
              With over a decade of experience under my belt, I’ve built strong relationships with suppliers all over the world, allowing me to negotiate the best deals in every aspect of your event. I pride myself on keeping you organized and ensuring that every detail is covered, so you can relax and enjoy your special day without worry.
            </p>
            <p className="text-gray-700">
              My journey as an event planner started as an Audio-Visual coordinator for a Singaporean company in Thailand when I was 18. Soon afterwards, I joined the team at “I DO ETC”, where I was quickly promoted to lead wedding planner. Together with my team, I was able to plan and execute successful events all over the world, from Bali to Turkey and everywhere in between. It was an incredible experience, and I wouldn’t trade it for the world.
            </p>
            <p className="text-gray-700">
              In 2018, after getting married and moving to the Pacific Northwest, I decided to share my wealth of knowledge and experience with others by starting Eventcracker. I strive to provide high-quality service to each and every client, getting to know them personally and working with them to create a vision that represents their unique style and taste. After all, it’s all in the details!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex h-auto justify-center" style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
        <div
          className="mb-3  lg:ml-20  rounded px-6 pb-2 pt-2.5 text-4xl font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          type="button"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          HAVE OTHER REQUIREMENTS? Lets’s talk
        </div>
      </div>
      {/* <Contect /> */}
      <MapShareLink />

    </>
  )
}

export default About
