import type { PatreonUser } from "@schemas/patreon";

export const getPatreonUser = async (id: number): Promise<PatreonUser | undefined> => {
    const request = await fetch("https://www.patreon.com/api/user/" + id)
    
    if (request.ok) {
        const patreon = await request.json() as PatreonUser
        return patreon
    }

    return undefined
}