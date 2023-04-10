import React from "react";
import { Button } from "./Button";
import './SectionPage.css';
import '../App.css';

function SectionPage () {
    return(
        <div className='hero-container'>
            <h1>FEEL GOOD</h1>
            <p>Give priority to your mental health</p>
            <div className="hero-btns">
                <Button className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        >
                  Our Classes
                </Button>
                <Button className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        >
                  Our Classes
                </Button>
            </div>
            <div
          className="flex flex-row-reverse -rotate-90 text-white
          absolute top-2/4 right-0 items-center min800:hidden"
        >
          <p className="uppercase  text-3xl font-bold tracking-widest">share</p>
          <span className="w-[35px] bg-[#FF0336] h-[2.5px] mr-6"></span>
          <div className="text-white gap-7 flex mr-7 ">
          <i className='fa fa-facebook-square' aria-hidden='true'/>
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-twitter text-3xl cursor-pointer ease-in duration-200"/>
            <i className="fa-brands rotate-90 hover:text-[#FF0336]  fa-linkedin-in text-3xl cursor-pointer ease-in duration-200 "></i>
          </div>
        </div>

        </div>
    )
}

export default SectionPage;


