/*
AspectRatio component is used to embed reponsive videos and maps, etc.
AspectRation component can help embed: video, image, map.
*/

import { AspectRatio } from "@chakra-ui/react";

const SongVideo = () => {
  return (
    <AspectRatio maxW="560px" ratio={1}>
      <iframe
        title="2am"
        src="https://videocdn.cdnpk.net/videos/d03d8a16-4608-424d-9063-2990148ba03c/horizontal/previews/clear/large.mp4?token=exp=1728015891~hmac=f2bcec950ed9e8ea87f991b81c2f8a1e12a774cb3c21c1458a426886c1d7d912"
        allowFullScreen
      />
    </AspectRatio>
  );
};

export default SongVideo;
