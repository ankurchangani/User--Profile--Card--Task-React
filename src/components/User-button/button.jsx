import '../User-button/button.css'

const Button = () => {
    return (
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
    )
}

export default Button