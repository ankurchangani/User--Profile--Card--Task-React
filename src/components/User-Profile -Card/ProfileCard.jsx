import '../User-Profile -Card/ProfileCard.css';
import Meimg from '../../assets/ankur.jpg'


const ProfileCard = ({ Name, email, age , skill , Address}) => {

    return (

        // <div className='container'>
        //     
        // </div>
        <div>

            <h1 className='center'>ProfileCard </h1>
            <div className="container">
                <div className="ProfilCard">
                    <div className='me-img'>
                        <img src={Meimg} alt="" />
                    </div>
                    <div className='contant'>
                        <div className='name'>
                            <h1>Name : - {Name}</h1>
                        </div>

                        <div className='email'>
                            <h2>Email : -  {email}</h2>
                        </div>

                        <div className='age'>
                        <h2>Age : -  {age}</h2>
                            
                        </div>
                        
                        <div className='skill'>
                        <p><span>skill : - </span> {skill}</p>

                        </div>

                        <div className='Address'> 
                            <p>{Address}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;