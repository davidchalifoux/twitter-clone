import { styled } from "../stitches.config";
import { MediaObject } from "./Tweet";
import Image from "next/image";
import { useState } from "react";

const TweetImageContainer = styled("div", {});

const TweetImageModal = styled("div", {
  position: "fixed",
  zIndex: 999,
  left: 0,
  top: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const TweetImageModalContent = styled("div", {
  maxWidth: "50vw",
  maxHeight: "100vh",
  overflowY: "auto",
});

export interface TweetImageProps {
  mediaObject: MediaObject;
}
export function TweetImage({ mediaObject }: TweetImageProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <TweetImageContainer>
      <Image
        src={mediaObject.url}
        alt={mediaObject.media_key}
        width={mediaObject.width}
        height={mediaObject.height}
        style={{ borderRadius: "1rem" }}
        onClick={(e) => {
          e.stopPropagation();
          setIsModalOpen(true);
        }}
      />
      {isModalOpen && (
        <TweetImageModal
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <TweetImageModalContent
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Image
              src={mediaObject.url}
              alt={mediaObject.media_key}
              width={mediaObject.width}
              height={mediaObject.height}
              style={{ borderRadius: "1rem" }}
            />
          </TweetImageModalContent>
        </TweetImageModal>
      )}
    </TweetImageContainer>
  );
}
