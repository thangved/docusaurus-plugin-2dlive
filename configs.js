import live2dJSString from './bin/live2d'
import React from "react"
import ReactDOM from "react-dom"
import Models from "./bin/Model"
import data from './bin/data'

const script = document.createElement('script')
script.innerText = live2dJSString
document.body.appendChild(script)

const models = document.createElement('div')

ReactDOM.render(
    <React.StrictMode>
        <Models data={data} />
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