// entities/Profile/index.ts
export { ProfileSchema, Profile } from "./model/types/profile";
export { profileActions, profileReducer } from "./model/slice/userSlice";
export { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
export { ProfileCard } from "./ui/ProfileCard/ProfileCard";
