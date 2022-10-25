import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Button } from "../../components/Button";
import { StickyHeader } from "../../components/StickyHeader";
import { MediaObject, Tweet } from "../../components/Tweet";
import { UserProfile } from "../../components/UserProfile";
import { UserProfileFeed } from "../../components/UserProfileFeed";
import { fetcher } from "../../lib/fetcher";

const Home: NextPage = () => {
  const router = useRouter();

  const [usernameQuery, setUsernameQuery] = useState("");
  useEffect(() => {
    if (router.query.username) {
      setUsernameQuery(`/api/users?username=${router.query.username}`);
    }
  }, [router.query.username]);

  const { data, error } = useSWR(usernameQuery, fetcher);

  if (error) return <div>Error! Account probably doesn&apos;t exist!</div>;
  if (!data) return <div>loading...</div>;
  if (data.data.length === 0) return <div>Account not found!</div>;

  const userData = data.data[0];
  return (
    <>
      <StickyHeader title={userData.name} />
      <UserProfile
        name={userData.name}
        username={userData.username}
        bio={userData.description}
        image={userData.profile_image_url}
        followerCount={userData.public_metrics.followers_count}
        followingCount={userData.public_metrics.following_count}
      />
      <UserProfileFeed userId={userData.id} />
    </>
  );
};

export default Home;
