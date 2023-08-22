import mongoose, { Document, model, models } from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firebase_id: {
    type: String,
  },
  phone: {
    type: String,
    unique: true,
  },
  notification_permission: Boolean,
  notification_token: String,
  insta: {
    last_scrape: Date,
    id: String,
    access_token: String,
    username: {
      type: String,
      unique: true,
    },
    full_name: String,
    biography: String,
    profile_pic: String,
    followers: Number,
    following: Number,
    average_like: Number,
    post_number: Number,
    shared_posts: [
      {
        media_url: String,
        like_count: String,
        comment_count: Number,
        description: String,
        location: {
          name: String,
          address: String,
          city: String,
          lng: Number,
          lat: Number,
        },
        face_details: Schema.Types.Mixed,
        moderation_labels: Schema.Types.Mixed,
      },
    ],
    keywords: [String],
  },
  tiktok: {
    username: {
      type: String,
      unique: true,
    },
    keywords: [String],
    tiktok_last_scrape: Date,
    tiktok_nickname: String,
    bio_description: String,
    last_scrape: Date,
    followers: Number,
    following: Number,
    hearts: Number,
    videos: [
      {
        like_count: Number,
        comment_count: Number,
        width: Number,
        height: Number,
        rate: Number,
        download_count: Number,
        play_count: Number,
        share_count: Number,
        whatsapp_share_count: Number,
        forward_count: Number,
        media_url: String,
        music: String,
        author: String,
        album: String,
        ratio: String,
        description: String,
        share_url: String,
        region: String,
        cover: String,
        dynamicCover: String,
      },
    ],
    profile_pic: String,
    createTime: Date,
    privateAccount: Boolean,
    verified: Boolean,
    secret: Boolean,
    tiktok_average_like: Number,
    tiktok_engagement_rate: Number,
    tiktok_access_token: String,
    tiktok_refresh_token: String,
    open_id: String,
    refresh_expires_in: String,
    log_id: String,
    union_id: String,
  },
  job: { type: String, default: "" },
  name: { type: String },
  surname: { type: String },
  score: { type: Number, default: 0 },
  email: { type: String, default: "", unique: true },
  birthday: Date,
  birthday_lastupdate: Date,
  age: Number,
  gender: String,
  profile_complete: Boolean,
  school_type: String,
  school_name: {
    type: String,
    trim: true,
  },
  password: Number,
  passwordTime: Date,
  city: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  language: String,
  money: {
    paparaAccountNo: Number,
    current: { type: Number, default: 0 },
    currency: String,
    city: String,
    county: String,
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    id: {
      type: String,
    },
    exchanges: [
      {
        _id: false,
        operation: String,
        amount: Number,
        action_time: Date,
        application_id: {
          type: Schema.Types.ObjectId,
          ref: "Application",
        },
      },
    ],
  },
  hobbies: [String],
  sharing_type: String,
  last_login: {
    type: Date,
    default: Date.now,
  },
  applications_update: {
    type: Date,
    default: Date.now,
  },
  hasNotificationPermission: {
    type: Boolean,
    default: false,
  },
  onesignal_pushToken: {
    type: String,
    default: "",
  },
  onesignal_userId: {
    type: String,
    default: "",
  },
  latitude: {
    type: Number,
    default: "",
  },
  longitude: {
    type: Number,
    default: "",
  },
  timezone: {
    type: String,
    default: "",
  },
  currency: {
    type: String,
  },
  verification: { type: Boolean, default: false },
  denied_verification: { type: Boolean, default: false },
  verification_last_action: { type: Date },
  deleted: { type: Boolean, default: false },
  deviceInfo: { type: Schema.Types.Mixed, default: false },
});

UserSchema.index({ "insta.followers": 1, "insta.average_like": 1 });
UserSchema.index({ gender: 1 });
UserSchema.index({ age: 1 });
UserSchema.index({ city: 1 });

const User = models.User || model<UserDoc>("User", UserSchema);

export default User;

export interface AuthUserBody {
  phone: string;
  firebase_id: string;
  language: string;
  country: string;
}

export interface UserAddress {
  contactName: String;
  contactPhone: String;
  city: String;
  country: String;
  address: String;
  details: String;
  zipCode: String;
  id: String;
}
export interface UserDoc extends Document {
  phone: string;
  firebase_id: string;
  notification_permission: boolean;
  notification_token: string;
  insta: InstaData;
  tiktok: TiktokData;
  birthday: Date;
  birthday_lastupdate: Date;
  age: number;
  job: string;
  name: string;
  surname: string;
  score: number;
  email: string;
  gender: string;
  profile_complete: Boolean;
  school_type: string;
  school_name: string;
  city: string;
  country: string;
  language: string;
  money: {
    paparaAccountNo: number;
    current: number;
    currency: string;
    exchanges: MoneyExchangeItemUser[];
    city: string;
    county: string;
    name: string;
    surname: string;
    id: string;
  };
  hobbies: string[];
  sharing_type: string;
  last_login: Date;
  applications_update: Date;
  hasNotificationPermission: Boolean;
  onesignal_pushToken: string;
  onesignal_userId: string;
  currency: string;
  password: Number;
  passwordTime: Date;
  verification: Boolean;
  denied_verification: Boolean;
  verification_last_action: Date;

  deleted: Boolean;
  address: UserAddress;
  deviceInfo: any;
}

export interface TiktokData {
  tiktok_last_scrape: Date;
  tiktok_average_like: Number;
  tiktok_engagement_rate: Number;
  tiktok_access_token: string;
  tiktok_refresh_token: string;
  open_id: string;
  refresh_expires_in: string;
  log_id: string;
  union_id: string;
  username: string;
  last_scrape: Date;
  followers: number;
  following: number;
  hearts: number;
  country: string;
  videos: {
    like_count: number;
    comment_count: number;
    width: number;
    height: number;
    rate: number;
    download_count: number;
    play_count: number;
    share_count: number;
    whatsapp_share_count: number;
    forward_count: number;
    media_url: string;
    music: string;
    author: string;
    album: string;
    ratio: string;
    description: string;
    share_url: string;
    region: string;
    cover: string;
    dynamicCover: string;
  }[];
  profile_pic: string;
  createTime: Date;
  privateAccount: boolean;
  verified: boolean;
  secret: boolean;
  tiktok_nickname: string;
  bio_description: string;
}

export interface InstaData {
  last_scrape: Date;
  id: string;
  access_token: string;
  username: string;
  full_name: string;
  biography: string;
  profile_pic: string;
  followers: number;
  following: number;
  post_number: number;
  average_like: number;
  shared_posts: {
    media_url: string;
    like_count: number;
    comment_count: number;
    description: String;
    location: {
      name: String;
      address: String;
      city: String;
      lng: Number;
      lat: Number;
    };
    face_details: any;
    moderation_labels: any;
  }[];
  keywords: any;
}

export interface MoneyExchangeItemUser {
  operation: string;
  amount: number;
  action_time: Date;
  application_id?: string;
}

export interface UserUpdate {
  city: string;
  school_type: string;
  school_name: string;
  birthday: Date;
  birthday_lastupdate: Date;
  age: number;
  gender: string;
  notification_token: string;
  notification_permission: boolean;
  hobbies: string[];
  email: string;
  job: string;
  name: string;
  surname: string;
  hasNotificationPermission: Boolean;
  onesignal_pushToken: string;
  onesignal_userId: string;
  verification: Boolean;
  denied_verification: Boolean;
  verification_last_action: Date;
  deleted: Boolean;
  address: UserAddress;
  tiktok: {
    username: {
      type: string;
      unique: true;
    };
    keywords: [string];
    tiktok_last_scrape: Date;
    tiktok_nickname: string;
    bio_description: string;
    last_scrape: Date;
    followers: Number;
    following: Number;
    hearts: Number;
    videos: [
      {
        like_count: Number;
        comment_count: Number;
        width: Number;
        height: Number;
        rate: Number;
        download_count: Number;
        play_count: Number;
        share_count: Number;
        whatsapp_share_count: Number;
        forward_count: Number;
        media_url: string;
        music: string;
        author: string;
        album: string;
        ratio: string;
        description: string;
        share_url: string;
        region: string;
        cover: string;
        dynamicCover: string;
      }
    ];
    profile_pic: string;
    createTime: Date;
    privateAccount: Boolean;
    verified: Boolean;
    secret: Boolean;
    tiktok_average_like: Number;
    tiktok_engagement_rate: Number;
    tiktok_access_token: string;
    tiktok_refresh_token: string;
    open_id: string;
    refresh_expires_in: string;
    log_id: string;
    union_id: string;
  };
  deviceInfo: any;
}
