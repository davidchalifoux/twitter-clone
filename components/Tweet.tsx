import { useRouter } from "next/router";
import { styled } from "../stitches.config";
import { TweetImage } from "./TweetImage";

const TweetContainer = styled("div", {
  padding: "1rem",
  display: "flex",
});

const TweetAvatar = styled("div", {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  backgroundColor: "$neutral3",
  marginRight: "1rem",
  flexShrink: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  "&:hover": {
    cursor: "pointer",
  },
});

const TweetInfoContainer = styled("div", {
  display: "flex",
  columnGap: ".5rem",
  marginBottom: ".5rem",
});

const TweetAuthorName = styled("div", {
  fontWeight: "bold",
});

const TweetAuthorUsername = styled("div", {
  color: "$neutral11",
});

const TweetDate = styled("div", {
  color: "$neutral11",
});

const TweetStatsContainer = styled("div", {
  display: "flex",
  columnGap: "1rem",
  marginTop: "1rem",
  color: "$neutral11",
  fontSize: "0.8125rem",
});

const TweetStat = styled("div", {
  display: "flex",
  columnGap: ".5rem",
  alignItems: "center",
});

const TweetMediaContainer = styled("div", {
  display: "flex",
  marginTop: "1rem",
  columnGap: ".5rem",
});

export type MediaObject = {
  media_key: string;
  width: number;
  height: number;
  type: string;
  url: string;
};

export interface TweetProps {
  authorName: string;
  authorUsername: string;
  authorAvatar: string;
  date: string;
  body: string;
  retweetCount: number;
  replyCount: number;
  likeCount: number;
  mediaObjects: MediaObject[];
}

export function Tweet({
  authorName,
  authorUsername,
  authorAvatar,
  date,
  body,
  retweetCount,
  replyCount,
  likeCount,
  mediaObjects,
}: TweetProps): JSX.Element {
  const dateObj = new Date(date);
  const router = useRouter();
  return (
    <TweetContainer>
      <TweetAvatar
        onClick={() => {
          router.push(`/users/${authorUsername}`);
        }}
        style={{
          backgroundImage: `url(${authorAvatar})`,
        }}
      />
      <div>
        <TweetInfoContainer>
          <TweetAuthorName>{authorName}</TweetAuthorName>
          <TweetAuthorUsername>@{authorUsername}</TweetAuthorUsername>
          <TweetDate>
            · {dateObj.toLocaleDateString("en-US")}{" "}
            {dateObj.toLocaleTimeString("en-US")}
          </TweetDate>
        </TweetInfoContainer>
        <div>{body}</div>
        {mediaObjects.length > 0 && (
          <TweetMediaContainer>
            {mediaObjects.map((media) => {
              return <TweetImage key={media.media_key} mediaObject={media} />;
            })}
          </TweetMediaContainer>
        )}
        <TweetStatsContainer>
          <TweetStat>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            </svg>
            <div>{replyCount}</div>
          </TweetStat>
          <TweetStat>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
              <path
                fillRule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              />
            </svg>
            <div>{retweetCount}</div>
          </TweetStat>
          <TweetStat>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            <div>{likeCount}</div>
          </TweetStat>
        </TweetStatsContainer>
      </div>
    </TweetContainer>
  );
}
