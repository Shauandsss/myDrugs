import './homePage.css'

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

        </div>
    )

}