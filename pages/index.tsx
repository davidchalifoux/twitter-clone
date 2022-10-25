import type { NextPage } from "next";
import useSWRInfinite from "swr/infinite";
import { Button } from "../components/Button";
import { StickyHeader } from "../components/StickyHeader";
import { MediaObject, Tweet } from "../components/Tweet";
import { fetcher } from "../lib/fetcher";

const Home: NextPage = () => {
  const getKey = (pageIndex: any, previousPageData: any) => {
    // End of data
    if (previousPageData && !previousPageData.data) return null;

    // First page, no previous page data
    if (pageIndex === 0) return `/api/feed`;

    // We have previous page data available
    return `/api/feed?pagination_token=${previousPageData.meta.next_token}`;
  };

  const { data, size, setSize, error, isValidating } = useSWRInfinite(
    getKey,
    fetcher
  );

  if (error) return <div>Error!</div>;

  if (!data) return <StickyHeader title="Home" />;

  return (
    <>
      <StickyHeader title="Home" />
      {data.map((tweetPage) => {
        if (tweetPage.data) {
          return tweetPage.data.map((tweet: any) => {
            // Find the included user data
            const user = tweetPage.includes.users.find(
              (user: any) => user.id === tweet.author_id
            );

            // Find any matching media
            const media_objects: MediaObject[] = [];

            if (tweet.attachments?.media_keys) {
              tweet.attachments.media_keys.forEach((media_key: string) => {
                const media_match = tweetPage.includes.media.find(
                  (media: any) => media.media_key === media_key
                );
                if (media_match.type === "photo") {
                  media_objects.push(media_match);
                }
              });
            }

            return (
              <Tweet
                key={tweet.id}
                authorName={user.name}
                authorUsername={user.username}
                authorAvatar={user.profile_image_url}
                date={tweet.created_at}
                body={tweet.text}
                replyCount={tweet.public_metrics.reply_count}
                retweetCount={tweet.public_metrics.retweet_count}
                likeCount={tweet.public_metrics.like_count}
                mediaObjects={media_objects}
              />
            );
          });
        }
      })}
      <Button
        size={"large"}
        onClick={() => setSize(size + 1)}
        disabled={isValidating}
      >
        Load more
      </Button>
    </>
  );
};

export default Home;
