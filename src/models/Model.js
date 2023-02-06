import {Model as BaseModel} from "vue-api-query";

export default class Model extends BaseModel {
    baseURL() {
        return "http://helpdilvery-production.up.railway.app";
    }

    request(config) {
        return this.$http.request(config);
    }
}