import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { nasaApi } from "./AxiosService"




const baseQuery = {
    api_key: 'H6SPtZE0FZm5M2gGx5bNhpCTJcGxy4Vj1sMjxiP3',
    date: ''
}



class PhotosService{
    async search(searchTerm) {
        baseQuery.date = searchTerm
        const res = await nasaApi.get('', { params: baseQuery })
        logger.log(res.data)
        AppState.photo = res.data
    }

    // async getPhoto() {
    //     const res = await nasaApi.get('')
    //     logger.log(res.data)
    //     AppState.photo = res.data
    // }

}

export const photosService = new PhotosService()
