import '../User-Profile -Card/ProfileCard.css';
import Meimg from '../../assets/ankur.jpg'


const ProfileCard = ({ Name, email, contant , age, skill, Address, hobby, eduction }) => {

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
                    <div className='main-detalis'>
                        <div className='name'>
                            <h1>Name : - {Name}</h1>
                        </div>

                        <div className='email'>
                            <h2>Email : -  {email}</h2>
                        </div>

                        <div className='number'>
                            <h2> Content
                            : -  {contant}</h2>

                        </div>

                        <div className='age'>
                            <h2>Age : -  {age}</h2>

                        </div>

                        <div className='skill'>
                            <p><span>skill : - </span> {skill}</p>

                        </div>

                        <div className='Address'>
                            <p><span>Address:- </span>{Address}</p>
                        </div>

                        <div className='hobby'>
                            <p><span>Hobby:- </span>{hobby}</p>
                        </div>

                        <div className='eduction'>
                            <p><span>Eduction:- </span>{eduction}</p>
                        </div>
                        <div>


                            <div className='flex'>
                                <div className='Follow'>

                                    <button className='Follow'>Follow</button>
                                </div>

                                <div className='view-profile'>
                                    <button>view profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;