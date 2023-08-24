"use client";
import "@/style/components/influencerProfiles.scss";
import InfluencerCard from "./InfluencerCard";
import { useState, useEffect } from "react";
import Input from "./ui/Input";
import { set } from "mongoose";
export default function InfluencerProfiles() {
  const [influencerProfiles, setInfluencerProfiles] = useState<any[]>([]);
  const [filteredInfluencerProfiles, setFilteredInfluencerProfiles] = useState<any[]>([]);
  const [score, setScore] = useState(1);

  useEffect(() => {
    fetch("/api/influencer")
      .then((res) => res.json())
      .then((data) => {
        setInfluencerProfiles(data);
        setFilteredInfluencerProfiles(data);
      });
  }, []);

  useEffect(() => {
    const filteredInfluencerProfiles = influencerProfiles.filter((influencerProfile) => {
      return influencerProfile.score >= score;
    });
    setFilteredInfluencerProfiles(filteredInfluencerProfiles);
  }, [score]);

  return (
    <div className="influencerProfilesContainer">
      <a style={{ fontSize: "1.5rem", fontWeight: "600" }} href="/new-influencer">
        Create a new influencer
      </a>
      <h1>Influencer Profiles</h1>
      <h3>filter</h3>
      <Input
        label="minimum score:"
        name="score"
        onChange={(e) => setScore(Number(e.target.value))}
        placeholder="score"
        type="number"
        value={score}
        style={{ marginBottom: "3rem" }}
      />
      <div className="influencerProfiles">
        {filteredInfluencerProfiles.map((influencerProfile, index) => {
          return <InfluencerCard influencerProfile={influencerProfile} key={index} />;
        })}
      </div>
    </div>
  );
}
