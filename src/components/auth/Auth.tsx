'use client'

import { Amplify } from "aws-amplify";
import config from "@/../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css"
import {Authenticator} from "@aws-amplify/ui-react"

Amplify.configure(config, {ssr: true})

interface AuthProps {
    children:React.ReactNode
}

const Auth = ({children}:{children:React.ReactNode}) => {
    return (
        <Authenticator.Provider>
            {children}
        </Authenticator.Provider>
    )
}

export default Auth