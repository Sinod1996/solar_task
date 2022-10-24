import React from 'react';
import '../../../assets/styles/Section2.css'
import {ReactComponent as Icon1} from "../../../assets/svg/icon1.svg";
import {ReactComponent as Icon2} from "../../../assets/svg/icon2.svg";
import {ReactComponent as Icon3} from "../../../assets/svg/icon3.svg";
import {ReactComponent as Icon4} from "../../../assets/svg/icon4.svg";
import {ReactComponent as Icon5} from "../../../assets/svg/icon5.svg";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Section2(props) {


    return (
        <div className={'section2'}>
            <div>
                <h3>Our Services</h3>
                <p>In the budding solar energy sector, we provide solar system design geared towards efficiency. With a <br/>team of seasoned professionals and designs realized all across the US, we aim at delivering a new <br/> standard in detail-oriented planning.</p>
            </div>
           

<Carousel 
responsive={responsive}
autoPlay={true}
autoPlaySpeed={3000}
customLeftArrow={false}
customRightArrow={false}
 className='carousel'
 >
        <div>
               <Icon2/>
                <p>Solar Drawings</p>
            </div>
            <div>
               <Icon3/>
               <p>Solar Heating System <br/> Drawings</p>
             </div>
            <div>
             <Icon1/>
             <p> EV Charging Drawings</p>
             </div>
            <div>
               <Icon4/>
              <p>Battery System Drawing</p>
            </div>
            <div>
                <Icon5/>
                <p> Load Calculation</p>
            </div>
</Carousel>
    
        </div>
    );
}

export default Section2;