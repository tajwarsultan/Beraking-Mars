import React from 'react'
import Builder from '../../static/Builder.svg'
import Media from '../../static/media.svg'
import Graph from '../../static/graph.svg'
import Linked from '../../static/linkedin.svg'
import Comp from '../../static/prospect.svg'
import Astro from '../../static/astro.svg'
import './styles.css'

function Breaking() {
  return (
    <>
      <div className="breaking-container">
        <div className="heading-break">
          <p>Start by</p>
          <h3>Breaking your time barrier</h3>
        </div>
        <div className="box-container">
          <div className="boxes-one">
            <div className="box-one">
              <div className="img-break">   
                <img src={Linked} alt="" />
              </div>
              <div className="text-area">
                <span>Step- 1</span>    
                <h4>Automate Everyhing <br /> on Linkedin</h4>
                <p>
                  Send connection request to grow <br /> network, view profile
                  to build rappot, <br /> endoese prospect to get noticed- all{' '}
                  <br />
                  automatically.    
                </p>
              </div>    
            </div>
            <div className="box-one">   
              <div className="img-break">   
                <img src={Comp} alt="" />
              </div>
              <div className="text-area">   
                <span>Step- 3</span>
                <h4>Get your <br /> prospect analized</h4>
                <p>
                  Our A.I model will determine who is <br /> your ideal client
                  by viewing 2500 <br /> profile and sending only to the best{' '}
                  <br /> prospect.
                </p>
              </div>
            </div>
          </div>
          <div className="boxes-one">
            <div className="box-one">
              <div className="text-area">
                <span>Step- 2</span>
                <h4>Look alike <br /> audience builder</h4>
                <p>
                  Input the profiles of your best clients,
                  <br /> get a suggestion of lookalike clients. <br /> Like
                  magic.
                </p>
              </div>
              <div className="img-break">
                <img src={Builder} alt="" />
              </div>
            </div>
            <div className="box-one">
              <div className="text-area">
                <span>Step- 4</span>
                <h4>Let our A.I manage your <br />                                                                                                                                                   entire social media</h4>
                <p>
                  Get your social media content written, <br /> post designed
                  and posted in 4 different <br /> platform automatically
                </p>
              </div>
              <div className="img-break">
                <img src={Media} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="saving-container">
          <div className="heading-break">
            <p>Start by</p>
            <h3>Breaking your time barrier</h3>
          </div>
          <div className="img-container">
            <img src={Graph} alt="" />
            <div className="astro-img">
              <img src={Astro} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Breaking
