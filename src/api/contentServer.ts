const HOSTNAME = "127.0.0.1:34873"

export namespace ContentServer {

    function makeUrl(path : string) {
        return "http://" + HOSTNAME + path
    }
    
    export type ContentType  = "Items" | "Recipes" | "Tasks"//...
    export async function GetIdentifiers(contentType : ContentType) {
        const url = makeUrl("/definitions/" + contentType)

        const data = await fetch(url)

        const json = await data.json()

        const res = json as {
            "types": Array<string>
        }

        return res.types
    }

    export async function GetSourcemap() {
        const data = await fetch(makeUrl("/sourcemap"))

        const json = await data.json()

        const result = new Map<string, Map<string, string>>()

        for (let [k, v] of Object.entries(json)) {
            result.set(k, new Map<string, string>(Object.entries(v)))
        }

        return result
    }

    export async function GetSourcemapForType(contentType : ContentType) {
        const data = await fetch(makeUrl("/sourcemap/" + contentType))

        const json = await data.json()

        console.log(json)

        return new Map<string, string>(Object.entries(json))
    }

    export async function GetDefinition(contentType : ContentType, identifier : string) {
        const data = await fetch(makeUrl("/definition/" + contentType + "/" + identifier))

        const json = await data.json()

        return json
    }

    export async function SetDefinition(contentType : ContentType, identifier : string, obj : any) {
        const data = await fetch(makeUrl("/definition/" + contentType + "/" + identifier), {
            method: "POST",
            body: obj
        })

        const json = await data.json()

        return json
    }
}