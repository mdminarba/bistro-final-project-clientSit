import useAuth from "../../../Hooks/useAuth"


const UserHome = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { user } = useAuth()
    return (
        <div>
            <h2 className="text-4xl text-center font-bold"> This is user home</h2>
            {
                user?.displayName ? user.displayName : 'back'
            }
        </div>
    )
}



export default UserHome
