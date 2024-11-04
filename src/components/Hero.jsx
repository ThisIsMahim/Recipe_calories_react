

const Hero = ({scrollIntoMain}) => {

  return (
    <div className='mt-11 w-full rounded-lg bg-[url(./assets/cover.png)] py-28 bg-center bg-cover flex flex-col justify-center items-center gap-6 font-lexend text-center'>
        <h1 className="max-w-[80%]  font-bold text-white text-6xl">Discover an exceptional cooking class tailored for you!</h1>
        <p className="max-w-[80%] text-white">Explore delicious recipes crafted for every taste and skill level. Discover ingredients, cooking times, and nutrition—all in one place. Start cooking something new today!</p>
        <div className="flex gap-6">
            <button className="btn text-[#150B2B] bg-[#0BE58A] border-none rounded-full" onClick={scrollIntoMain} >Explore Now</button>
            <button className="btn bg-transparent text-white rounded-full">Our feedback</button>
        </div>

    </div>
  )
}

export default Hero