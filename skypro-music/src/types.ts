import { ChangeEvent } from "react";

type userType = {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  
  export type trackType = {
    id: number;
    name: string;
    author: string;
    release_date: string;
    genre: string;
    duration_in_seconds: number;
    album: string;
    logo: string | null;
    track_file: string;
    stared_user: userType[];
  };

  export type ProgressBarType = {
    max: number | undefined;
    value: number;
    step: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };