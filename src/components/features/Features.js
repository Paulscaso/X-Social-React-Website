import React from 'react';
import './Features.css';
import {BsFillBookmarkStarFill} from 'react-icons/bs';
import phoneFeatures from '../../assets/phone-features.png';
import Feature from './Feature';
import { featureList } from './data';

function Features() {
  return (
    <section id="features">
      <div className="container features">
        <div className="u-title">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>Core Features</h2>
          <p className="u-text-small u-text-dark">
            socialX is Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
          </p>
        </div>
        <div className="features-content">
          <div className="features-left">
              <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="features-right">
            {
              featureList.map((feature)=>(
                <Feature key={feature.id} heading={feature.heading} icon={feature.icon} text={feature.text} />
              ))
            }
              
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features