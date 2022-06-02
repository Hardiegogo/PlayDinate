import { Text, Box, AspectRatio, Image, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import VideoOptions from "../video-card-options-component/VideoOptions";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useOutsideClick } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { removeFromLikes } from "../../utils/video-services/likes-services/removeFromLikes";
import { useVideos } from "../../context/useVideos";
import { removeFromWatchLater } from "../../utils/video-services/watch-later-services/removeFromWatchLater";
import { useNavigate } from "react-router-dom";
import { addToHistory } from "../../utils/video-services/history-services/addToHistory";
import { removeFromHistory } from "../../utils/video-services/history-services/removeFromHistory";

const VideoCard = ({ video, videoType }) => {
  const [isVideoOptions, setIsVideoOptions] = useState(false);
  const navigate = useNavigate();
  const ref = React.useRef();
  useOutsideClick({
    ref: ref,
    handler: () => setIsVideoOptions(false),
  });
  const { dispatchVid } = useVideos();
  const deleteHandler = () => {
    switch (videoType) {
      case "likes":
        removeFromLikes(video, dispatchVid);
        break;
      case "watchlater":
        removeFromWatchLater(video, dispatchVid);
        break;
      case "history":
        removeFromHistory(video, dispatchVid);
        break;
      default:
        break;
    }
  };
  const videoClickHandler = () => {
    addToHistory(dispatchVid, video);
    navigate(`/video/${video._id}`);
  };

  return (
    <Box maxW="20rem" color="whiteShade">
      <AspectRatio maxW="20rem" maxH="12rem">
        <Image
          src={video.thumbnail}
          objectFit="cover"
          onClick={videoClickHandler}
          cursor="pointer"
        ></Image>
      </AspectRatio>
      <Box
        display="flex"
        mt={2}
        alignItems="center"
        justifyContent="space-between"
        position="relative"
      >
        <Box display="flex" alignItems="center">
          <Box cursor="pointer">
            <Image
              borderRadius="full"
              minW={8}
              width={8}
              src={video.creatorImg}
            ></Image>
          </Box>
          <Heading fontSize="1rem" ml={2}>
            {video.title}
          </Heading>
        </Box>
        <Box cursor="pointer">
          {videoType === "likes" ||
          videoType === "watchlater" ||
          videoType === "history" ? (
            <AiFillDelete size={20} onClick={deleteHandler} />
          ) : (
            <BsThreeDotsVertical
              onClick={() => setIsVideoOptions(!isVideoOptions)}
            />
          )}
          <Box ref={ref}>
            {isVideoOptions && <VideoOptions video={video} />}
          </Box>
        </Box>
      </Box>
      {videoType !== "single-video" && (
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            mt="4px"
            color="gray.400"
            fontSize={10}
          >
            <Text>
              {video.creator} <CheckCircleIcon ml="2px" />
            </Text>
            <Text>{video.views} views</Text>
          </Box>
          <Text color="gray.400" fontSize={10} mt={1}>
            {video.description}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default VideoCard;
