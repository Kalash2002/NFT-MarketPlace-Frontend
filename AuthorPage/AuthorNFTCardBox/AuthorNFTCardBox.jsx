import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NFTCardTwo } from "../../collectionPage/collectionIndex";
import FollowerTabCard from "../../Components/FollowerTab/FollowerTabCard/FollowerTabCard.jsx";
import { Loader } from "../../Components/componentIndex";

const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  follower,
  following,
}) => {
  const collectiablesArray = [
    { image: images.nft_image_1, name: "Kalash" },
    { image: images.nft_image_2, name: "Kalash" },
    { image: images.nft_image_3, name: "Kalash" },
    { image: images.nft_image_3, name: "Kalash" },
    { image: images.nft_image_1, name: "Kalash" },
    { image: images.nft_image_3, name: "Kalash" },
    { image: images.nft_image_2, name: "Kalash" },
    { image: images.nft_image_1, name: "Kalash" },
    { image: images.nft_image_3, name: "Kalash" },
  ];

  const createdArray = [
    { image: images.nft_image_3, name: "Kalash" },
    { image: images.nft_image_2, name: "Kalash" },
    { image: images.nft_image_1, name: "Kalash" },
    { image: images.nft_image_3, name: "Kalash" },
  ];

  const likeArray = [

    { image: images.nft_image_3, name: "Kalash" },
    { image: images.nft_image_3, name: "Kalash" },
    { image: images.nft_image_1, name: "Kalash" },
    { image: images.nft_image_3, name: "Kalash" },
    { image: images.nft_image_2, name: "Kalash" },

  ];


     const followerArray = [
       {
         background: images.creatorbackground1,
         user: images.user1,
         seller: "d84ff74hf99999f9974hf774f99f",
       },
       {
         background: images.creatorbackground2,
         user: images.user2,
         seller: "d84ff74hf99999f9974hf774f99f",
       },
       {
         background: images.creatorbackground3,
         user: images.user3,
         seller: "d84ff74hf99999f9974hf774f99f",
       },
       {
         background: images.creatorbackground4,
         user: images.user4,
         seller: "d84ff74hf99999f9974hf774f99f",
       },
       {
         background: images.creatorbackground5,
         user: images.user5,
         seller: "d84ff74hf99999f9974hf774f99f",
       },
       {
         background: images.creatorbackground6,
         user: images.user6,
         seller: "d84ff74hf99999f9974hf774f99f",
       },
     ];
        const followingArray = [
      {
         background: images.creatorbackground3,
         user: images.user3,
         seller: "d84ff74hf99999f9974hf774f99f",
       },
       {
         background: images.creatorbackground4,
         user: images.user4,
         seller: "d84ff74hf99999f9974hf774f99f",
       },
       {
         background: images.creatorbackground5,
         user: images.user5,
         seller: "d84ff74hf99999f9974hf774f99f",
       },
       {
         background: images.creatorbackground6,
         user: images.user6,
         seller: "d84ff74hf99999f9974hf774f99f",
       },
       {
         background: images.creatorbackground1,
         user: images.user1,
         seller: "d84ff74hf99999f9974hf774f99f",
       },
     ];
  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={collectiablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray} />}
      {like && <NFTCardTwo NFTData={likeArray} />}
      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((i, el) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((i, el) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;
