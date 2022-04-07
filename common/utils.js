export const getData = async(
    url,
    method,
    body = false
) => {
    const res = await fetch(url, {
        method: method || 'GET',
        headers: {
            "access-control-allow-origin" : "*",
            'Content-Type': 'application/json;charset=UTF-8'
        },
        ...(body ? {
            body: JSON.stringify(body)
        } : {})
    }).then((response) => {
        if (response.status === 200) {
           
        }
        return response
    })
    return await res.json()
}
