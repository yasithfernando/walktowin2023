import { useUser } from "@/context/context";

export async function fetchUser(gmail:string){
    const { user, isLoading, isError } = useUser(gmail);

    if(user){
        return user;
    }
}