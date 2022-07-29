import { ContentServer } from "api/contentServer";
import React, { useEffect, useState } from "react";

export default function Test() {
    const [def, setDef] = useState<any>({})

    useEffect(() => {
        ContentServer.GetDefinition("Tasks", "tutorial").then(data => setDef(data))
    }, [])

    return <div>
        Items:
        {Object.entries(def).map(([k, v]) => {
            return <p>{k}</p>
        })}
    </div>
}