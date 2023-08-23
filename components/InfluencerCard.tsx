import "@/style/components/influencerCard.scss";

export default function InfluencerCard(props: { influencerProfile: any }) {
  return (
    <a className="influencerCard" href={`influencer/${props.influencerProfile.surname}`}>
      <img src={props.influencerProfile.insta.profile_pic} alt="" />
      <h3>
        {props.influencerProfile.name} {props.influencerProfile.surname}
      </h3>
      <p>{props.influencerProfile.insta.username}</p>
      <p>{props.influencerProfile.insta.biography}</p>
      <p>{props.influencerProfile.insta.followers} followers</p>
      <p>{props.influencerProfile.insta.following} following</p>
    </a>
  );
}
