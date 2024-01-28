export interface PatreonUser {
    data:     Data;
    included: Included[];
    links:    PatreonUserLinks;
}

export interface Data {
    attributes:    DataAttributes;
    id:            string;
    relationships: DataRelationships;
    type:          Type;
}

export interface DataAttributes {
    about:                     null;
    created:                   Date;
    current_user_block_status: string;
    facebook:                  null;
    first_name:                string;
    full_name:                 string;
    gender:                    number;
    image_url:                 string;
    last_name:                 string;
    social_connections:        { [key: string]: SocialConnection | null };
    thumb_url:                 string;
    twitch:                    null;
    twitter:                   null;
    url:                       string;
    vanity:                    string;
    youtube:                   null;
}

export interface SocialConnection {
    url: string;
}

export interface DataRelationships {
    campaign: Campaign;
}

export interface Campaign {
    data:  DAT;
    links: CampaignLinks;
}

export interface DAT {
    id:   string;
    type: Type;
}

export enum Type {
    Campaign = "campaign",
    Reward = "reward",
    User = "user",
}

export interface CampaignLinks {
    related: string;
}

export interface Included {
    attributes:     IncludedAttributes;
    id:             string;
    relationships?: IncludedRelationships;
    type:           Type;
}

export interface IncludedAttributes {
    avatar_photo_image_urls?:          AvatarPhotoImageUrls;
    avatar_photo_url?:                 string;
    cover_photo_url?:                  string;
    cover_photo_url_sizes?:            CoverPhotoURLSizes;
    created_at:                        Date | null;
    creation_count?:                   number;
    creation_name?:                    string;
    currency?:                         string;
    display_patron_goals?:             boolean;
    earnings_visibility?:              string;
    image_small_url?:                  string;
    image_url?:                        null | string;
    is_charge_upfront?:                boolean;
    is_charged_immediately?:           boolean;
    is_monthly?:                       boolean;
    is_nsfw?:                          boolean;
    is_plural?:                        boolean;
    main_video_embed?:                 string;
    main_video_url?:                   string;
    name?:                             string;
    one_liner?:                        null;
    outstanding_payment_amount_cents?: null;
    paid_member_count?:                number;
    patron_count?:                     number;
    pay_per_name?:                     string;
    pledge_sum_currency?:              string;
    pledge_url?:                       string;
    published_at?:                     Date;
    summary?:                          string;
    url:                               null | string;
    amount?:                           number;
    amount_cents?:                     number;
    description?:                      string;
    patron_currency?:                  string;
    remaining?:                        number | null;
    requires_shipping?:                boolean;
    user_limit?:                       null;
    declined_patron_count?:            number;
    discord_role_ids?:                 string[] | null;
    edited_at?:                        Date;
    is_free_tier?:                     boolean;
    patron_amount_cents?:              number;
    post_count?:                       number;
    published?:                        boolean;
    title?:                            string;
    unpublished_at?:                   null;
}

export interface AvatarPhotoImageUrls {
    default:         string;
    default_small:   string;
    original:        string;
    thumbnail:       string;
    thumbnail_large: string;
    thumbnail_small: string;
}

export interface CoverPhotoURLSizes {
    large:  string;
    medium: string;
    small:  string;
    xlarge: string;
    xsmall: string;
}

export interface IncludedRelationships {
    creator?:  Campaign;
    goals?:    Goals;
    rewards?:  Goals;
    campaign?: Campaign;
}

export interface Goals {
    data: DAT[] | null;
}

export interface PatreonUserLinks {
    self: string;
}
