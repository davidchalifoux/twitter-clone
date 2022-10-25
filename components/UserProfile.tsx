import Image from "next/image";
import { styled } from "../stitches.config";

const UserProfileContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "0 1rem 1rem 1rem",
  borderBottom: "1px solid $neutral5",
});

const UserProfileAvatar = styled("div", {
  backgroundColor: "$neutral3",
  width: "8rem",
  height: "8rem",
  borderRadius: "50%",
});

const UserProfileName = styled("div", {
  fontWeight: "bold",
  fontSize: "1.25rem",
  marginTop: "1rem",
  marginBottom: ".25rem",
});

const UserProfileUsername = styled("div", {
  color: "$neutral11",
  marginBottom: "1rem",
});

const UserProfileBio = styled("div", {
  marginBottom: "1rem",
});

const UserProfileStatsContainer = styled("div", {
  display: "flex",
  columnGap: "1rem",
});

const UserProfileStat = styled("div", {
  color: "$neutral11",
});

export interface UserProfileProps {
  name: string;
  username: string;
  bio: string;
  image: string;
  followingCount: number;
  followerCount: number;
}
export function UserProfile({
  name,
  username,
  bio,
  image,
  followerCount,
  followingCount,
}: UserProfileProps): JSX.Element {
  return (
    <UserProfileContainer>
      <UserProfileAvatar>
        <Image
          src={image}
          alt={name}
          width={"48px"}
          height={"48px"}
          layout={"responsive"}
          style={{ borderRadius: "50%" }}
        />
      </UserProfileAvatar>
      <UserProfileName>{name}</UserProfileName>
      <UserProfileUsername>@{username}</UserProfileUsername>
      <UserProfileBio>{bio}</UserProfileBio>
      <UserProfileStatsContainer>
        <UserProfileStat>{followingCount} Following</UserProfileStat>
        <UserProfileStat>{followerCount} Followers</UserProfileStat>
      </UserProfileStatsContainer>
    </UserProfileContainer>
  );
}
