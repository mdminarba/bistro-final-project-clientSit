
const SectionsTitle = ({heading, subHeding}) => {
  return (
    <div>
    <p className="text-center text-yellow-600   w-80 m-auto my-4 ">---{subHeding}---</p>
    <h3 className="text-[#151515] text-center text-4xl border-y-4 py-3  font-semibold  m-auto my-4 w-full lg:w-96">{heading}</h3>
    </div>
  )
}

export default SectionsTitle



