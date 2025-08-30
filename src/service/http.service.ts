export class HttpService {
    async get(url: string, data?: any){
        console.log('Get simulated', url, data);
        
    }

    async put(url: string, data: any){
        console.log('Put simulated', url, data);
    }

    async post(url: string, data: any){
        console.log('Post simulated', url, data);
    }

    async delete(url: string, data: any){
        console.log('Delete simulated', url, data);
    }
}