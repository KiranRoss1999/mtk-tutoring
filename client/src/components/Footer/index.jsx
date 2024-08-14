import "./index.css"

export default function Footer() {
    return (
    <div className="footer-thang flex flex-row items-center mx-20 mt-16">
            <p className="text-xs text-center flex-1">
                MTK Tutoring whose registered office is at West End, Brisbane, AUSTRALIA (“MTK", “we”, “our” or “us”), 
                acting as data controller, is committed to protecting and respecting your privacy. 
                This notice is designed to tell you about our practices regarding the collection, 
                use and disclosure of information that you may provide via this website or our mobile applications.
            </p>
            <br />
        <img src='../../public/mtk.png' className='h-48 w-48'></img>
        <p className="text-xs text-center flex-1">
            Mandatory information required to register for the service we provide on our Platforms or to access other services provided by us, 
            including your name, email address, and a password. Some of these fields are mandatory. 
            MTK Tutoring will not be able to provide you with the services offered on our Platforms if the required information 
            is not provided, consequently you will not be able to register for a user account on our Platforms.
        </p>
    </div>
    );
}

