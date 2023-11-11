import axios from "axios";

export default class MenaceServices{
    static async getAll() {
        return await axios({
            method: 'get',
            url: `http://185.192.246.110:8777/danger/all`,
        }).then((response) => {
            return response.data
        })
    }
    static async getById({id}){
        return await axios({
            method: 'get',
            url: `http://185.192.246.110:8777/danger/{id}?id_=${id}`,
        }).then((response) => {
            return response.data
        })
    }
    static async updateStatus({id, status}){
        return await axios({
                method: 'put',
                url: `http://185.192.246.110:8777/danger/update_status/{id}?id_=${id}&status_id=${status}`,
                data: {}
            }
        ).then((response) => {
            return response.data
        })
    }
}