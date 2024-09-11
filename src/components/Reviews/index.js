import './index.css' 

const Reviews = () => {
    const reviewList = [{title: 'Ujash Sharma', university: 'Leeds Beckett University' ,mssg:'Great overall experience I was helped with every problem I faced along the way by the extremely commendable staff.'},
        {title: 'Tanisha Ghosh',university:'Trinity College Dublin',mssg:"Your insight was extremely valuable to me and I don't think I could have done this without you people."},
        {title: 'Manisha Barik',university:'Trinity College Dublin',mssg:'Amber offers Great service and quick response.'},
        {title: 'Aishwarya',university:'Cardiff University',mssg:'Very proactive. Gave me all the information I needed at the get go. Thank you so much!'},
        {title:'Yuti Khirade',university:'University Of Salford',mssg:'Very satisfied with the service. Thank you.'}

    ]


    return(
        <div className='reviews-container'>
            <div className='reviews-header'>
                <div>
                    <div className='d-flex'>
                        <h1 className='review-heading fw-bold' style={{fontSize:'30px'}}>What do students have to say about us?</h1>
                        <div className='trustpilot-container'><img src="https://prod-static-assets.amberstudent.com/images/star.svg" alt='star'/> <h1 className='trustpilot-header mt-2 fw-bold'>Trustpilot</h1> <p className='rating'>4.8/5</p></div>
                    </div>
                    
                    <h2>Over 1M students trust amber for their student housing needs</h2>
                </div>
                <>
                    <p>Read All Reviews</p>
                </>
            </div>
            <div className='review-list'>
                {reviewList.map(eachItem => (
                    <div className='review-cart'>
                        <p>{eachItem.mssg}</p>
                        <div className='review-id'>
                            <img style={{height:'32px', width:'32px'}} src='https://prod-static-assets.amberstudent.com/images/in_flag.svg?auto=format&trim=auto' alt='flag'/>
                            <>
                                <h1 className='review-title'>{eachItem.title}</h1>
                                <p style={{lineHeight:'0px'}}>{eachItem.university}</p>
                            </>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}


export default Reviews