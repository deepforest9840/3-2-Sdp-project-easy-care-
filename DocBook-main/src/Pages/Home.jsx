
import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import featureImg from '../assets/images/feature-img.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from './About'
import ServicesList from './ServicesList'
import Doctors from './Doctors'

const Home = () => {
  return (

    <>
      {/* // Hero section */}
      <section className="hero__section pt-16 pb-20 2xl:h-[800px] bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between">

            {/* Hero Content */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="lg:w-[570px] mx-auto lg:mx-0">
                <h1 className="text-[28px] leading-[38px] font-semibold text-blue-900 md:text-[40px] md:leading-[50px]">
                  We help patients live a healthy, longer life.
                </h1>
                <Link to="/doctors">
                  <button className="bg-blue-500 text-white py-3 px-8 mt-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                    Request an Appointment
                  </button>
                </Link>
              </div>

              {/* Hero Counter */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-12 mt-8">
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-blue-800">10+</h2>
                  <span className="block w-16 h-1 bg-yellow-400 rounded-full mx-auto mt-2"></span>
                  <p className="text-gray-700 mt-2">Years of Experience</p>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-blue-800">15+</h2>
                  <span className="block w-16 h-1 bg-purple-400 rounded-full mx-auto mt-2"></span>
                  <p className="text-gray-700 mt-2">Clinic Locations</p>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-blue-800">100%</h2>
                  <span className="block w-16 h-1 bg-teal-400 rounded-full mx-auto mt-2"></span>
                  <p className="text-gray-700 mt-2">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Hero Images */}
            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-end">
              <div className="w-[80%] md:w-[50%] lg:w-[30%] lg:mt-0">
                <img src={heroImg01} alt="" className="rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out" />
              </div>
              <div className="w-[80%] md:w-[50%] lg:w-[30%] space-y-4 mt-4 md:mt-0">
                <img src={heroImg02} alt="" className="rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out" />
                <img src={heroImg03} alt="" className="rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* // Hero section Ends */}
      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Providing the best medical services
            </h2>
            <p className='text__para text-center'>
              World-Class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className='py-[30px] px-5'>
              <div className="flex items-center justify-center">
                <img
                  src={icon01}
                  alt=""
                />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor
                  font-[700] text-center'>
                  Find a Doctor
                </h2>
                <p className='text-[16px] leading-7 text-textColor
                  font-[400] mt-4 text-center'>
                  World-Class care for everyone. Our health system offers unmatched,
                  expert health care. From the lab to clinic.
                </p>

                {/* <Link
                  to='/doctors'
                  className='w-[44px] h-[44px] rounded-full border
                    border-solid border-[#181A1E] mt-[30px] mx-auto
                    flex items-center justify-center group hover:bg-primaryColor
                    hover:border-none'
                >
                  <BsArrowRight
                    className='group-hover:text-white
                      w-6 h-5'
                  />
                </Link> */}
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className="flex items-center justify-center">
                <img
                  src={icon02}
                  alt=""
                />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor
                  font-[700] text-center'>
                  Find a Location
                </h2>
                <p className='text-[16px] leading-7 text-textColor
                  font-[400] mt-4 text-center'>
                  World-Class care for everyone. Our health system offers unmatched,
                  expert health care. From the lab to clinic.
                </p>

                {/* <Link
                  to='/doctors'
                  className='w-[44px] h-[44px] rounded-full border
                    border-solid border-[#181A1E] mt-[30px] mx-auto
                    flex items-center justify-center group hover:bg-primaryColor
                    hover:border-none'
                >
                  <BsArrowRight
                    className='group-hover:text-white
                      w-6 h-5'
                  />
                </Link> */}
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className="flex items-center justify-center">
                <img
                  src={icon03}
                  alt=""
                />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor
                  font-[700] text-center'>
                  Book Appointment
                </h2>
                <p className='text-[16px] leading-7 text-textColor
                  font-[400] mt-4 text-center'>
                  World-Class care for everyone. Our health system offers unmatched,
                  expert health care. From the lab to clinic.
                </p>
{/* 
                <Link
                  to='/doctors'
                  className='w-[44px] h-[44px] rounded-full border
                    border-solid border-[#181A1E] mt-[30px] mx-auto
                    flex items-center justify-center group hover:bg-primaryColor
                    hover:border-none'
                >
                  <BsArrowRight
                    className='group-hover:text-white
                      w-6 h-5'
                  />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* service section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center'>
              Our Medical Services
            </h2>
            <p className="text__para text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Beatae aliquid quibusdam perferendis <br></br>
              quam ullam optio impedit fuga, vitae enim reiciendis!
              Soluta quae rem natus perspiciatis
            </p>
          </div>
          <ServicesList />
        </div>
      </section>

      {/* feature sectoin */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col
            lg:flex-row">
            {/* feature content */}
            <div className='xl:w-[670]'>
              <h2 className="heading">
                Get virtual treatement <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1.Schedule the appoinemnt directly
                </li>
                <li className="text__para">
                  2.Know your healty standarts
                </li>
                <li className="text__para">
                  3.Be ready to live like a healthy life
                </li>
              </ul>
              <Link to='/'>
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/* feature img */}
            <div className="relative z-10 xl:w-[770px] flex justify-end
              mt-[50px] lg:mt-0">
              <img
                src={featureImg}
                alt=''
                className='w-3/4'
              />
              <div className='w-[150px] lg:w-[248px] bg-white absolute
                bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20
                p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px]
                    lg:gap-3">
                    <p className='text-[10px] leading-[10px] lg:text-[14px]
                      lg:leading-5 text-headingColor font-[600]'>
                      Tue, 24
                    </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px]
                      lg:leading-5 text-textColor font-[600]'>
                      10:00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px]
                    flex items-center justify-center bg-yellowColor py-1
                    px-[6px] lg:py-3 lg:px-[9px]">
                    <img
                      src={videoIcon}
                      alt=''
                    />
                  </span>
                </div>

                <div className='w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1
                  px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px]
                  lg:leading-4 text-irisBlueColor font-[500]
                  mt-2 lg:mt-4 rounded-full'>
                  Consultation
                </div>
                <div className="flex items-center gap-[6px]
                  lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt='' />
                  <h4 className='text-[10px] leading-3 lg:text-[16px]
                    lg:leading-[22px] font-[700] text-headingColor'>
                    Aldo Lata SOba
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our great doctors */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center'>
              Our Great Doctors
            </h2>
            <p className="text__para text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Beatae aliquid quibusdam perferendis <br></br>
              quam ullam optio impedit fuga, vitae enim reiciendis!
              Soluta quae rem natus perspiciatis
            </p>
          </div>
          <Doctors />
        </div>
      </section>

    </>
  )
}

export default Home