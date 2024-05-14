import Track from "../Track/Track";
import styles from "./Playlist.module.css";
import classNames from "classnames";
import { getTracks } from "@/api/tracks";
import { trackType } from "@/types";
import { useEffect, useState } from "react";

type PlaylistType = {
  setTrack: (param: trackType) => void;
  setIsPlaying: (param: boolean) => void;
};

export default function Playlist({ setTrack, setIsPlaying }: PlaylistType) {
  const [tracksData, setTracksData] = useState<trackType[]>([]);
  useEffect(() => {
    getTracks()
      .then((data: trackType[]) => setTracksData(data))
      .catch((error: any) => {
        throw new Error(error.message);
      });
  }, []);

  return (
    <div className={styles.centerblockContent}>
              <div className={styles.contentTitle}>
                <div className={classNames(styles.playlistTitleCol, styles.col01)}>Трек</div>
                <div className={classNames(styles.playlistTitleCol, styles.col02)}>Исполнитель</div>
                <div className={classNames(styles.playlistTitleCol, styles.col03)}>Альбом</div>
                <div className={classNames(styles.playlistTitleCol, styles.col04)}>
                  <svg className={styles.playlistTitleSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                  </svg>
                </div>
              </div>
              <div className={styles.contentPlaylist}>
                {tracksData.map((trackData) => (
                <Track 
                onClick={() => {
                  setTrack(trackData);
                  setIsPlaying(true);
                  }}
                  key={trackData.id}
                  name={trackData.name}
                  author={trackData.author}
                  album={trackData.album}
                  />
                ))}
              </div>
            </div>
  );
}
