import styles from './Podcast.module.scss';
import {SoundcloudLogo, SpotifyLogo, YoutubeLogo, ApplePodcastsLogo} from '@phosphor-icons/react';
import Heading from '../Heading/Heading';

const Podcast = ({
    name = "Podcast Name",
    date = "Date",
    duration = "00:00",
    soundcloud,
    spotify,
    deezer,
    youtube,
    apple_podcasts,
    children,
}) => {
    return (
        <div className={styles.podcast}>
            <div className={styles.podcast__content}>
                <div className={styles.podcast__info}>
                    <div className={styles.podcast__time}>
                        <p className={styles.podcast__duration}>{duration}</p>
                        <div className={styles.separator}></div>
                        <p className={styles.podcast__date}>{date}</p>
                    </div>
                    <Heading as="h3" variant="h6" className={styles.podcast__name}>
                        {name}
                    </Heading>
                </div>
                <div className={styles.podcast__links}>
                    {soundcloud && (
                        <a href={soundcloud} target="_blank" rel="noopener noreferrer">
                            <SoundcloudLogo size={32} />
                        </a>
                    )}
                    {spotify && (
                        <a href={spotify} target="_blank" rel="noopener noreferrer">
                            <SpotifyLogo size={32} />
                        </a>
                    )}
                    {deezer && (
                        <a href={deezer} target="_blank" rel="noopener noreferrer">
                            <img src="/images/icon/Deezer_Outline.svg" alt="Deezer Logo" width={32} height={32} />
                        </a>
                    )}
                    {youtube && (
                        <a href={youtube} target="_blank" rel="noopener noreferrer">
                            <YoutubeLogo size={32} />
                        </a>
                    )}
                    {apple_podcasts && (
                        <a href={apple_podcasts} target="_blank" rel="noopener noreferrer">
                            <ApplePodcastsLogo size={32} />
                        </a>
                    )}
                </div>
                {children}
            </div>
        </div>
    );
}

export default Podcast;