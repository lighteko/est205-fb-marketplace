import UserService from "./user.service";

class AuthService {
  async getCurrentUser() {
    return await UserService.getUser("67303f1458637820df311a78");
  }

  async getCurrentUserId() {
    return "67303f1458637820df311a78";
  }
}

const authService = new AuthService();

export default authService;
