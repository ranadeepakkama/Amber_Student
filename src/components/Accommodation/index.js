import './index.css';

const Accommodation = () =>{

    const accDetailsList = [
        {img:'https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/fast-and-easy-bookings-insight.svg',head:'Quick & Easy Bookings',prg:'Time is money. Save both when you book with us..'},
        {img:'https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/expert-assistance-insight.svg',head:'Price-Match Guarantee',prg:"Find a lower price and we'll match it. No questions asked.."},
        {img:'https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/verified-listings-insight.svg',head:'24x7 Assistance',prg:"If you have a doubt or a query, we're always a call away.."},
        {img:'https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/price-match-guarantee-insight.svg',head:'100% Verified Listings',prg:'We promise to deliver what you see on the website..'}
    ];

    return(
        <div className='Accommodation-container'>
            <div>
                <h1 className='acc-main-heading'>Book your Perfect Accommodation</h1>
                <p>Take the hassle out of securing your student home for the best years of your life</p>
            </div>
            <div className='accommodation-details d-flex'>
                {accDetailsList.map(item => (
                    <div className='Acc-cart'>
                        <img src={item.img} alt={item.head}/>
                        <div className='acc-item-details'>
                            <h1 className='acc-head'>{item.head}</h1>
                            <p className='acc-prg' style={{lineHeight:'0px'}}>{item.prg}</p>
                        </div>
                    </div>
                ))}
            </div>  
            
    
        </div>
    )
} 

export default Accommodation