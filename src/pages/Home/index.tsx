import { Profile } from "./components/Profile";
import { Posts } from "./components/Posts";

import { HomeContainer } from "./styles";


export function Home(){
  
  return (
    <HomeContainer>
      <Profile />
      <Posts />
    </HomeContainer>
  )
}