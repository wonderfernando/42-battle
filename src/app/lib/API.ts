export const LOGIN = async ({code} : {code: string}) => {
    const response = await fetch("http://localhost:4444/auth", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({code: code})
    })
    const data = await response.json()
    return data
}