import './index.css';


const PopularCities = () => {
    const countryList = [{img:'https://prod-assets.amberstudent.com/regions/14/2c73a731.jpg?w=330&h=330',
        name:'London'
    },{img: 'https://prod-assets.amberstudent.com/regions/67/e256aee0.jpg?w=330&h=330',
        name:'Birmingham'
    },{img:'https://prod-assets.amberstudent.com/regions/75/4845618d.jpg?w=330&h=330', name:'Leicester'},
    {img:'https://prod-assets.amberstudent.com/regions/34/a1c38c48.jpg?w=330&h=330',name:'Nottingham'},
    {img:'https://prod-assets.amberstudent.com/regions/55/e0e0ad9a.jpg?w=330&h=330',name:'Liverpool'},
    {img:'https://prod-assets.amberstudent.com/regions/70/ea20bec0.jpg?w=330&h=330',name:'Coventry'},
    {img:'https://prod-assets.amberstudent.com/regions/37/00f85e0f.jpg?w=330&h=330',name:'Sheffield'},
    {img:'https://prod-assets.amberstudent.com/regions/43/22808500.jpg?w=330&h=330',name:'Leeds'},
    {img:'https://prod-assets.amberstudent.com/regions/32/22441ccc.jpg?w=330&h=330',name:'Newcastle Upon Tyne'},
    {img:'https://prod-assets.amberstudent.com/regions/56/65e8b9b2.jpg?w=330&h=330',name:'Manchester'},
    {img:'https://prod-assets.amberstudent.com/regions/69/6745eea3.jpg?w=330&h=330',name:'Cardiff'},
    {img:'https://prod-assets.amberstudent.com/regions/64/686ce1a6.jpg?w=330&h=330',name:'Swansea'},
    {img:'https://prod-assets.amberstudent.com/regions/71/e1aae58d.jpg?w=330&h=330',name:'Edinburgh'},
    {img:'https://prod-assets.amberstudent.com/regions/76/e8313418.jpg?w=330&h=330',name:'Salford'},
    {img:'https://prod-assets.amberstudent.com/regions/74/33565644.jpg?w=330&h=330',name:'Plymouth'},
    {img:'https://prod-assets.amberstudent.com/regions/19/3ce7048d.jpg?w=330&h=330',name:'Aberdeen'}
]

const countryNameList = [
    {img:'https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/flag-uk.svg', 
    name:'United Kingdom'},
    {img:'https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/flag-aus.svg',
     name:'Australia'   
    },
    {img:'https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/flag-ire.svg'
        ,
     name:'Ireland'   
    },
    {img:'https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/flag-us.svg'
        ,
     name:'United States'   
    },{img:'https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/flag-can.svg'
        ,
     name:'Canada'   
    },{img:'https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/flag-ger.svg'
        ,
     name:'German'   
    },
    {img:'https://static-assets.amberstudent.com/amber-user-website/static/amberstudent/assets/images/app/assets/flag-esp.svg',
    name:'Spain'
    }
]
    return (
        <div className='country-list-main-container'>
            <h1 className='main-header fs-2'>Popular Cities Across the Globe</h1>
            <p className='country-detail-prg'>Book student accommodations near top cities and universities around the world</p>
            <div className='country-list-container'>
                {countryNameList.map(country => (
                    <button className='country-name'>
                        <img className='p-1' src={country.img} alt={country.name}/>
                        <p className='country-name-item'>{country.name}</p>
                    </button>
                ))}
            </div>

            <div className="popular-city-container row row-cols-2 gx-5 p-3">
                {countryList.map(eachItem => (
                    <div className="popular-city-details row m-3" style={{backgroundImage:`url(${eachItem.img})`}}>
                        <a className='mb-2 p-1' href={eachItem.img}>{eachItem.name}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

   
export default PopularCities    