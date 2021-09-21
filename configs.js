import live2dJSString from './bin/live2d'
import React from "react"
import ReactDOM from "react-dom"
import Models from "./bin/Model"

try {
    const script = document.createElement('script')
    script.innerText = live2dJSString
    script.defer = true
    document.head.appendChild(script)


    const models = document.createElement('div')
    models.style = {
        with: 0,
        height: 0,
    }

    ReactDOM.render(
        <React.StrictMode>
            <Models />
        </React.StrictMode>,
        models
    )

    document.body.append(models)

    if (document.body.offsetWidth < 740) {
        models.style.display = 'none'
    }

    document.body.onresize = () => {
        if (document.body.offsetWidth < 740) {
            return models.style.display = 'none'
        }
        models.style.display = 'block'
    }
}
catch { }