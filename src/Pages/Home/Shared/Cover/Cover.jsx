

const Cover = ({img ,heading ,subHeding }) => {
    return (
        <div>
            <div className="hero min-h-screen bg-fixed " style=
            {{ backgroundImage:`url(${img})`,backgroundSize:'cover' }} >
                <div className=""></div>
                <div className=" text-center text-neutral-content">
                    <div className=" md:w-[900px] h-[300px] w-full mt-16  bg-[#15151599] bg-opacity-60  ">
                        <h1 className="my-5 text-white lg:text-6xl pt-24 text-7xl font-bold">{heading}</h1>
                        <p className="mb-5 lg:w-[700px] m-auto text-white">{subHeding}</p>
              
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;