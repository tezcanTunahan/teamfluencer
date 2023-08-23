"use client";
import "@/style/components/newInfluencer.scss";
import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function NewInfluencer() {
  const [influencer, setInfluencer] = useState({
    name: "",
    surname: "",
    phone: "",
    job: "",
    score: "",
    email: "",
    age: 0,
    gender: "",
    country: "",
    city: "",
    language: "",
    insta: { username: "", biography: "", profile_pic: "", followers: 0, following: 0, average_like: 0 },
    tiktok: { username: "", bio_description: "", followers: 0, following: 0, hearts: 0, tiktok_average_like: 0 },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/influencer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(influencer),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit} className="newInfluencer">
      <div className="newInfluencer__influencer">
        <h3>Influencer form </h3>
        <Input
          label="name"
          name="name"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, name: e.target.value }))}
          type="text"
          placeholder="user name"
          value={influencer.name}
        />
        <Input
          label="surname"
          name="surname"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, surname: e.target.value }))}
          type="text"
          placeholder="surname"
          value={influencer.surname}
        />
        <Input
          label="phone"
          name="phone"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, phone: e.target.value }))}
          type="number"
          placeholder="phone"
          value={influencer.phone}
        />
        <Input
          label="job"
          name="job"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, job: e.target.value }))}
          type="text"
          placeholder="job"
          value={influencer.job}
        />
        <Input
          label="score"
          name="score"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, score: e.target.value }))}
          type="text"
          placeholder="score"
          value={influencer.score}
        />
        <Input
          label="email"
          name="email"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, email: e.target.value }))}
          type="email"
          placeholder="email"
          value={influencer.email}
        />
        <Input
          label="age"
          name="age"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, age: Number(e.target.value) }))}
          type="number"
          placeholder="age"
          value={influencer.age}
        />
        <Input
          label="gender"
          name="gender"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, gender: e.target.value }))}
          type="text"
          placeholder="gender"
          value={influencer.gender}
        />
        <Input
          label="country"
          name="country"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, country: e.target.value }))}
          type="text"
          placeholder="country"
          value={influencer.country}
        />{" "}
        <Input
          label="city"
          name="city"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, city: e.target.value }))}
          type="text"
          placeholder="city"
          value={influencer.city}
        />
        <Input
          label="language"
          name="language"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, language: e.target.value }))}
          type="text"
          placeholder="language"
          value={influencer.language}
        />
      </div>
      <div className="newInfluencer__ins">
        <h3>Instagram form </h3>
        <Input
          label="username"
          name="username"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, insta: { ...prev.insta, username: e.target.value } }))}
          type="text"
          placeholder="username"
          value={influencer.insta.username}
        />
        <Input
          label="biography"
          name="biography"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, insta: { ...prev.insta, biography: e.target.value } }))}
          type="text"
          placeholder="biography"
          value={influencer.insta.biography}
        />
        <Input
          label="profile_pic"
          name="profile_pic"
          onChange={(e) =>
            setInfluencer((prev) => ({ ...prev, insta: { ...prev.insta, profile_pic: e.target.value } }))
          }
          type="text"
          placeholder="profile_pic"
          value={influencer.insta.profile_pic}
        />
        <Input
          label="followers"
          name="followers"
          onChange={(e) =>
            setInfluencer((prev) => ({ ...prev, insta: { ...prev.insta, followers: Number(e.target.value) } }))
          }
          type="number"
          placeholder="followers"
          value={influencer.insta.followers}
        />
        <Input
          label="following"
          name="following"
          onChange={(e) =>
            setInfluencer((prev) => ({ ...prev, insta: { ...prev.insta, following: Number(e.target.value) } }))
          }
          type="number"
          placeholder="following"
          value={influencer.insta.following}
        />
        <Input
          label="average_like"
          name="average_like"
          onChange={(e) =>
            setInfluencer((prev) => ({ ...prev, insta: { ...prev.insta, average_like: Number(e.target.value) } }))
          }
          type="number"
          placeholder="average_like"
          value={influencer.insta.average_like}
        />
      </div>
      <div className="newInfluencer__tiktok">
        <h3>Tiktok form</h3>
        <Input
          label="username"
          name="username"
          onChange={(e) => setInfluencer((prev) => ({ ...prev, tiktok: { ...prev.tiktok, username: e.target.value } }))}
          type="text"
          placeholder="username"
          value={influencer.tiktok.username}
        />
        <Input
          label="bio_description"
          name="bio_description"
          onChange={(e) =>
            setInfluencer((prev) => ({ ...prev, tiktok: { ...prev.tiktok, bio_description: e.target.value } }))
          }
          type="text"
          placeholder="username"
          value={influencer.tiktok.bio_description}
        />
        <Input
          label="followers"
          name="followers"
          onChange={(e) =>
            setInfluencer((prev) => ({ ...prev, tiktok: { ...prev.tiktok, followers: Number(e.target.value) } }))
          }
          type="text"
          placeholder="followers"
          value={influencer.tiktok.followers}
        />
        <Input
          label="following"
          name="following"
          onChange={(e) =>
            setInfluencer((prev) => ({ ...prev, tiktok: { ...prev.tiktok, following: Number(e.target.value) } }))
          }
          type="text"
          placeholder="following"
          value={influencer.tiktok.following}
        />
        <Input
          label="hearts"
          name="hearts"
          onChange={(e) =>
            setInfluencer((prev) => ({ ...prev, tiktok: { ...prev.tiktok, hearts: Number(e.target.value) } }))
          }
          type="text"
          placeholder="hearts"
          value={influencer.tiktok.hearts}
        />
        <Input
          label="tiktok_average_like"
          name="tiktok_average_like"
          onChange={(e) =>
            setInfluencer((prev) => ({
              ...prev,
              tiktok: { ...prev.tiktok, tiktok_average_like: Number(e.target.value) },
            }))
          }
          type="text"
          placeholder="tiktok_average_like"
          value={influencer.tiktok.tiktok_average_like}
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
