
let getData = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    return jsonResponse
}

export default getData