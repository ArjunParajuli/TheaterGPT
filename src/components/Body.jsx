import React from 'react'
import SignIn from './SignIn'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <SignIn />
    },
    {
      path: '/browse',
      element: <Browse />
    },
  ])

  // moved onAuthStateChanged(runs whenever the user signs in or signs out) inside header bcoz useNavigate() can be used only inside <RouterProvider /> 
  // and we need to put that inside a component which is always present, whether signin page or browse page or any other page
  

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body