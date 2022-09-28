import { Fragment, useCallback, useEffect, useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { api } from "../../../../lib/api";

import { Avatar, Header, ProfileContent, ProfileContainer, Title, Description, Footer, FooterContent, FooterContentText } from "./styles";

interface UserProps { 
  id: number;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
  html_url: string;
  avatar_url: string;
}


export function Profile(){
  const [users, setUsers] = useState<UserProps[]>([]);

  const fetchUserData = useCallback(async () => {
    const response = await api.get('/users/Ribeiro88')

    setUsers([response.data]);
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <ProfileContainer>
      {users.map(user => {
        return (
          <Fragment key={user.id}>
            <Avatar src={user.avatar_url} alt="Profile Image" />
            <ProfileContent>
              <Header>
                <Title>{user.name}</Title>
                <a href={user.html_url} target="_blank">
                  GitHub
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </Header>
              <Description>
                {user.bio}
              </Description>
              <Footer>
                <FooterContent>
                  <FontAwesomeIcon icon={faGithub} />
                  <FooterContentText>{user.login}</FooterContentText>
                </FooterContent>

                <FooterContent>
                  <FontAwesomeIcon icon={faBuilding} />
                  <FooterContentText>{user.company}</FooterContentText>
                </FooterContent>

                <FooterContent>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <FooterContentText>
                  {user.followers} seguidores
                  </FooterContentText>
                </FooterContent>
              </Footer>
            </ProfileContent>
          </Fragment>
        )
      })}
    </ProfileContainer>
  )
}