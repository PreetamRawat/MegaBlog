/* eslint-disable no-useless-catch */
/* eslint-disable no-empty */
import conf from '../conf/config'
import {Client, Account, ID, Databases, Storage ,Query} from 'appwrite'

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId,

                }

            )
        } catch (error) {
            throw error
        }
    }

}

const service = new Service()

export default service;