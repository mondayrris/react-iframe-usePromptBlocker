import Iframe from "react-iframe";
import React from "react";
import {usePrompt} from "../components/usePromptBlocker";

const Demo = () => {
    usePrompt(
        "Hello from usePrompt -- Are you sure you want to leave?",
        true
    );

    return (
        <Iframe url={'http://127.0.0.1:5500/demo-form.html'} width="375" height="667"/>
    );
}

export default Demo;