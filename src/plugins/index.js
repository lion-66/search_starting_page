import {  Search  } from 'vant';
let plugins = [
    Search 
]
export default function getVant(app){
    plugins.forEach((items)=>{
        return app.use(items)
    })
}