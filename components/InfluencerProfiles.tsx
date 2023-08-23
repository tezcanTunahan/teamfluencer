"use client";
import "@/style/components/influencerProfiles.scss";
import InfluencerCard from "./InfluencerCard";
import { useState, useEffect } from "react";
export default function InfluencerProfiles() {
  const [influencerProfiles, setInfluencerProfiles] = useState([]);

  useEffect(() => {
    fetch("/api/influencer")
      .then((res) => res.json())
      .then((data) => {
        setInfluencerProfiles(data);
      });
  }, []);

  return (
    <div>
      <h1>Influencer Profiles</h1>
      <div className="influencerProfiles">
        {influencerProfiles.map((influencerProfile, index) => {
          return <InfluencerCard influencerProfile={influencerProfile} key={index} />;
        })}
      </div>
    </div>
  );
}
