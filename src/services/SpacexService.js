const urlBase = "https://api.spacexdata.com/v3/"

export async function getCompanyInfo() {
    try{
        const response = await fetch(urlBase.concat("info"))
        return await response.json()
    } catch(error) {
        console.log(error)
        return []
    }
}

export async function getCapsules() {
    try {
        const response = await fetch(urlBase.concat("capsules"))
        return await response.json()
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function getCapsule(capsule_serial) {
    try {
        const response = await fetch(urlBase.concat(`capsules/${capsule_serial}`))
        return await response.json()
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function getMissions() {
    try {
        const response = await fetch(urlBase.concat("missions"))
        return await response.json()
    } catch (error) {
        console.log(error)
        return []
    }
}