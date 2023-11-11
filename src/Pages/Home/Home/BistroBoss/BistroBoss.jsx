import capcesvice from '../../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div>
            <div className=" mt-16 h-[556px] " style={{
                backgroundImage: `url(${capcesvice})`,
                backgroundSize: "cover ",
                backgroundPosition: ""

            }}>
                <div className="w-10/12 h-80 m-auto relative top-28 bg-white rounded-lg ">
                    <h2 className="text-5xl text-black text-center relative lg:top-24 ">Bistro Boss</h2>
                    <p className="relative lg:top-28 w-8/12 text-center m-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo
                    </p>
                </div>

            </div>

        </div>
    )
}

export default BistroBoss
