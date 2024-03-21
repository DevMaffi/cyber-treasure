import {
    Typography,
    TypographyBlockquote,
    TypographyH1,
    TypographyH3,
    TypographyLarge,
    TypographyList,
    TypographyListItem,
    TypographyP,
    TypographySmall,
    TypographyTd,
    TypographyTh,
} from '@/components/ui/Typography'

import {
    TextTable,
    TextTableBody,
    TextTableHead,
    TextTableTr,
} from '@/components/ui/TextTable'

import styles from './page.module.scss'

export default function About() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <article className={styles.article}>
                    <Typography>
                        <TypographyH1>Cyber-Treasure</TypographyH1>
                        <TypographyH3>Unleash the Gamer Within</TypographyH3>
                        <TypographyBlockquote>
                            &quot;Millions of Games at Your Fingertips&quot;
                        </TypographyBlockquote>
                        <TypographyP>
                            Cyber-Treasure is your one-stop shop for all things
                            gaming, offering a vast library of games across
                            diverse genres and platforms. Dive into endless
                            possibilities, from heart-pounding adventures to
                            adrenaline-pumping action and everything in between.
                        </TypographyP>
                        <TypographyLarge>
                            Explore a Universe of Entertainment:
                        </TypographyLarge>
                        <TypographyList>
                            <TypographyListItem>
                                Unmatched Selection: Discover a treasure trove
                                of games, including popular titles, indie gems,
                                and hidden classics, catering to every
                                gamer&apos;s taste.
                            </TypographyListItem>
                            <TypographyListItem>
                                Platform Agnostic: Find your perfect game,
                                whether you prefer console classics, captivating
                                PC titles, or mobile gaming on the go.
                            </TypographyListItem>
                            <TypographyListItem>
                                Curated Collections: Let our expert
                                recommendations and user reviews guide you
                                towards your next gaming obsession.
                            </TypographyListItem>
                        </TypographyList>
                        <TypographyH3>Beyond the Games</TypographyH3>
                        <TypographyP>
                            Community Hub: Connect with fellow gamers, share
                            experiences, and forge friendships within the
                            vibrant Cyber-Treasure community.
                        </TypographyP>
                        <TypographyP>
                            News and Updates: Stay informed about the latest
                            gaming releases, industry news, and exclusive
                            content with our dedicated newsfeed.
                        </TypographyP>
                        <TypographyP>
                            Personalized Experience: Create your profile, track
                            your progress, and build your unique gaming library,
                            all within the app.
                        </TypographyP>
                        <TextTable>
                            <TextTableHead>
                                <TextTableTr>
                                    <TypographyTh>Feature</TypographyTh>
                                    <TypographyTh>Description</TypographyTh>
                                </TextTableTr>
                            </TextTableHead>
                            <TextTableBody>
                                <TextTableTr>
                                    <TypographyTd>
                                        Vast Game Library
                                    </TypographyTd>
                                    <TypographyTd>
                                        Millions of games across various genres
                                        and platforms
                                    </TypographyTd>
                                </TextTableTr>
                                <TextTableTr>
                                    <TypographyTd>
                                        Platform Agnostic
                                    </TypographyTd>
                                    <TypographyTd>
                                        Find games for consoles, PC, and mobile
                                        devices
                                    </TypographyTd>
                                </TextTableTr>
                                <TextTableTr>
                                    <TypographyTd>
                                        Curated Recommendations
                                    </TypographyTd>
                                    <TypographyTd>
                                        Expert picks and user reviews to help
                                        you discover gems
                                    </TypographyTd>
                                </TextTableTr>
                                <TextTableTr>
                                    <TypographyTd>Community Hub</TypographyTd>
                                    <TypographyTd>
                                        Connect with fellow gamers and build
                                        friendships
                                    </TypographyTd>
                                </TextTableTr>
                                <TextTableTr>
                                    <TypographyTd>
                                        News and Updates
                                    </TypographyTd>
                                    <TypographyTd>
                                        Stay informed about the latest gaming
                                        news and releases
                                    </TypographyTd>
                                </TextTableTr>
                                <TextTableTr>
                                    <TypographyTd>
                                        Personalized Experience
                                    </TypographyTd>
                                    <TypographyTd>
                                        Create a profile, track progress, and
                                        build your gaming library
                                    </TypographyTd>
                                </TextTableTr>
                            </TextTableBody>
                        </TextTable>
                        <TypographySmall>
                            Embark on your gaming journey today and discover the
                            hidden treasures within Cyber-Treasure!
                        </TypographySmall>
                    </Typography>
                </article>
            </div>
        </main>
    )
}
