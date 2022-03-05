import './homePage.css'
import imageCem from '../../images/100.png'
import ThreeMDMA from '../../images/3MDMA.png'

export default function HomePage() {
    
    return (
        <div className='Homepage-main'>
            <div className='Homepage-top'>
                <div className='Homepage-topSub'>
                    <div className='Homepage-TitleTop'>
                        The New MyDrugs
                    </div>
                    <div className='Homepage-listTop'>
                        <div className='Bored'>
                            Welcome Back
                        </div>
                        <div>
                            New Products
                        </div>
                        <div>
                            Special Offers
                        </div>
                        <div className='Homepage-listTop-Button'>
                            Shop
                        </div>
                    </div>
                </div>
                <div className='Homepage-WhiteLine'/>
            </div>

            <div className='HomePage-Mid'>
                <div className='HomePage-Mid-Main'>
                    <div className='HomePage-Mid-Title Bored'>
                        The new myDrugs
                    </div>
                    <div className='HomePage-Mid-Itens'>
                        <div>
                            Best quality.
                        </div>
                        <div>
                            Best delivery.
                        </div>
                        <div>
                            Best security.        
                        </div>
                    </div>
                    <div className='HomePage-Mid-SubTitle Bored'>
                        Prices as low as 0.0013 BTC.
                    </div>
                </div>
            </div>

            <div>
                <img src={imageCem} className='imgCem'/>
            </div>

            <div className='HomePage-Mid-Titles'>
                <div className='HomePage-Mid-Titles-1'>
                    <div>
                        Fresh from our factory.
                    </div>
                    <div>
                        Constatly quality-checked by our experts.
                    </div>
                </div>
                <div className='HomePage-Mid-Titles-2'>
                    <div>
                        MDMA in its purest form. 
                    </div>
                    <div>
                        Delivery guaranted within 5 days.
                    </div>                  
                </div>
            </div>

            <div className='HomePage-Mid-White'>
                <div>
                    <div className='HomePage-Mid-White-Title'>
                        An explosive new lineup.
                    </div>
                    <div className='HomePage-Mid-White-Subtitle' >
                        For the best MDMA experience.<br/>
                        Ever.
                    </div>
                    <div>
                        Save 20% off your first order.
                    </div>
                    <div className='HomePage-Mid-White-ShopNow'>
                        Shop Now &gt;
                    </div>
                </div>
                <div>
                    <img src={ThreeMDMA} />
                </div>

            </div>

        </div>
    )

}