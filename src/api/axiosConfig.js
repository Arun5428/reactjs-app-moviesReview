import axios from "axios";
export default axios.create({
    baseURL:'http://localhost:8080',
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        '8080-skip-browser-warning':"true"
        }

});
