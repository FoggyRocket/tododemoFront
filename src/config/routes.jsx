//importar mis pages
import AuthPage  from '../pages/AuthPage' //import chafa v1



const routes = (props)=>{

    //<Route path="/" element={componente} />
    return [
        {
            path: "/", //Homepage
            element:<h1>Este es el home</h1>
        },
        {
            path:"/login",
            element:<AuthPage />
        },
        {
            path:"/signup",
            element:<AuthPage />
        }
    ]

}

export default routes