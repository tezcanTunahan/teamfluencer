"use client";
import "@/style/page/influencer.scss";
import { useState, useEffect } from "react";

export default function page({ params }: any) {
  const [influencer, setInfluencer] = useState<any>();
  const surname = params.surname;
  useEffect(() => {
    fetch(`/api/influencer/${surname}`)
      .then((res) => res.json())
      .then((data) => {
        setInfluencer(data);
      });
  }, [surname]);

  return (
    <div className="influencer">
      <img src={influencer?.insta.profile_pic} alt="" />
      <div className="influencer__bot">
        <div className="influencer__bot__info">
          <h1>
            {influencer?.name} {influencer?.surname}
          </h1>
          <p>email: {influencer?.email}</p>
          <p>phone : {influencer?.phone}</p>
          <p>job: {influencer?.job}</p>
          <p>Score: {influencer?.score}</p>
          <p>age: {influencer?.age}</p>
          <p>country: {influencer?.country}</p>
          <p>city {influencer?.city}</p>
          <p>languange: {influencer?.language}</p>
          <p>gender: {influencer?.gender} </p>
          <p>verification: {influencer?.verification ? "verifaid" : "not verifaid"}</p>
        </div>
        <div className="influencer__bot__insta">
          <h3>Instagram Info</h3>
          <p>instegram username: {influencer?.insta.username}</p>
          <p>instegram biography: {influencer?.insta.biography}</p>
          <p>instegram followers: {influencer?.insta.followers}</p>
          <p>instegram following: {influencer?.insta.following}</p>
          <p>instegram avarage like: {influencer?.insta.average_like}</p>
        </div>
        <div className="influencer__bot__tiktok">
          <h3>TikTok Info</h3>
          <p>tiktok username: {influencer?.tiktok.username}</p>
          <p>tiktok biografy: {influencer?.tiktok.bio_description}</p>
          <p>tiktok followers: {influencer?.tiktok.followers}</p>
          <p>tiktok following: {influencer?.tiktok.following}</p>
          <p>tiktok hearts: {influencer?.tiktok.hearts}</p>
          <p>tiktok average like: {influencer?.tiktok.tiktok_average_like}</p>
        </div>
      </div>
    </div>
  );
}
