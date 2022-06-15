import axios from "axios";
class SellerAuthService {

    login(username, password) {
      
      const API_URL = "http://localhost:9090/seller-service/register/auth";
        return axios
            .post(API_URL , {
            username,
            password
            })
            .then(response => {
              const token = response.data;
              localStorage.setItem("SavedToken" , token)
              console.log(token);
            });
        }

        
      logout(){
        localStorage.removeItem("SavedToken");
      }
    
      getCurrentUser() {
        return localStorage.getItem('SavedToken');
      };
      
    }
    
    export default new SellerAuthService();