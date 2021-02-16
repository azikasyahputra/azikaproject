import { useState, useEffect } from 'react';
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

  const [auth, setAuth] = useState(false);
  const [isTokenValidated, setIsTokenValidated] = useState(false);

  useEffect(() => {
    // send jwt to API to see if it's valid
    let token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:8000/api/mydata/", {
        method: "POST",
        headers: {
         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMzQ2MjA1NywiZXhwIjoxNjEzNDY1NjU3LCJuYmYiOjE2MTM0NjIwNTcsImp0aSI6InRtVkV1ZDBDWjBqYU84cUEiLCJzdWIiOjEsInBydiI6IjUxODNjNmY5NzJiNDUwMDEzMzA3ZTI2OGJhODlhMjcxMzNhYjg2YjgifQ.9ii7cEQLYJtdsMyaajk5DvjSY66CP2c-P0gK3G-Piww',
        },
      })
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        if (json.success) {
          setAuth(true);
        }
      })
      .catch((err) => {
        setAuth(false);
        localStorage.removeItem("token");
      })
      .then(() => setIsTokenValidated(true));
    } else {
       setIsTokenValidated(true); // in case there is no token
    }

  }, [])

 if (!isTokenValidated) return <div />; // or some kind of loading animation

  return (<Route {...rest}
    render={(props) => {
        return auth ? <Component {...props} /> : <Redirect to="/" />
    }} />)
}

export default PrivateRoute;