export interface LanyardData {
  spotify: {
    track_id: string;
    timestamps: { start: number; end?: number };
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
  } | null;
  discord_user: {
    username: string;
    public_flags?: number;
    id: string;
    discriminator: string;
    avatar: string | null;
  };
  discord_status: "online" | "dnd" | "offline" | "idle";
  activities: {
    type: number;
    state: string;
    name: string;
    id: string;
    emoji?: { name: string; id: string; animated: boolean };
    created_at: number;
    application_id?: string;
    timestamps?: { start: number; end?: number };
    session_id?: string;
    details?: string;
    buttons?: string[];
    assets?: {
      small_text: string;
      small_image: string;
      large_text: string;
      large_image: string;
    };
  }[];
  listening_to_spotify?: boolean;
  active_on_discord_mobile?: boolean;
  active_on_discord_desktop?: boolean;
}
