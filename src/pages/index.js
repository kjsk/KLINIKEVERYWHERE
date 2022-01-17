import React, { Fragment, useState, useEffect } from "react";
import Loader from "../components/Home/Loader"
import { navigate } from "gatsby";

const IndexPage = () =>
{
  const [ loading, setLoading ] = useState( true );

  useEffect( () =>
  {
    setLoading( true )
    setTimeout( () =>
    {
      setLoading( false )
      navigate( "/Home/" )
    }, 5000 )
  }, [] )
  return (
    <Fragment>
      {
        loading ?
          <Loader />
          :
          <>
          </>

      }
    </Fragment>
  )
}

export default IndexPage;