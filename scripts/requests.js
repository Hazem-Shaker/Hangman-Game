const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else{
        throw new Error('Unable to get puzzle')
    }

}

const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.com/v2/all')

    if(response.status === 200){
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else{
        throw new Error('Unable to fetch the country')
    }
}

const getLocation = async ()=>{
    const response = await fetch("https://ipinfo.io/json?token=1a13822e0e9119")

    if(response.status === 200){
        return response.json()
    } else {
        throw new Error('Unable to get the current location')
    }
}

const getCurrentCountry = async ()=>{
    const location = await getLocation()
    return getCountry(location.country)
}
