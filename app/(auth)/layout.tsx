const Layout = ({children} : {children:React.ReactNode}) => {
    return(
        <div className=" flex justify-center items-center w-screen h-screen bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
            {children}
        </div>
    )
}
export default Layout