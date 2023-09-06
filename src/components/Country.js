const Country = ({country}) => {

     const handleValueChange = (event) => {
        
  }

    return(
        <>
            <h2>{country.name.common}</h2>
            <button onClick={handleValueChange}>Visited</button>
        </>
    )

}

export default Country;
