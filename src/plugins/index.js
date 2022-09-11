import {  Search ,Popover ,Toast  } from 'vant';
let plugins = [
    Search ,Popover ,Toast
]
export default function getVant(app){
    plugins.forEach((items)=>{
        return app.use(items)
    })
}