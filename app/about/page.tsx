import { TextTable, Typography } from '@/components/ui'

import styles from './page.module.scss'

export default function About() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <article className={styles.article}>
                    <Typography>
                        <Typography.H1>Cyber-Treasure</Typography.H1>
                        <Typography.H3>Unleash the Gamer Within</Typography.H3>
                        <Typography.Blockquote>
                            &quot;Millions of Games at Your Fingertips&quot;
                        </Typography.Blockquote>
                        <Typography.P>
                            Cyber-Treasure is your one-stop shop for all things
                            gaming, offering a vast library of games across
                            diverse genres and platforms. Dive into endless
                            possibilities, from heart-pounding adventures to
                            adrenaline-pumping action and everything in between.
                        </Typography.P>
                        <Typography.Large>
                            Explore a Universe of Entertainment:
                        </Typography.Large>
                        <Typography.List>
                            <Typography.ListItem>
                                Unmatched Selection: Discover a treasure trove
                                of games, including popular titles, indie gems,
                                and hidden classics, catering to every
                                gamer&apos;s taste.
                            </Typography.ListItem>
                            <Typography.ListItem className={styles.subFlow}>
                                Platform Agnostic: Find your perfect game,
                                whether you prefer console classics, captivating
                                PC titles, or mobile gaming on the go.
                            </Typography.ListItem>
                            <Typography.ListItem>
                                Curated Collections: Let our expert
                                recommendations and user reviews guide you
                                towards your next gaming obsession.
                            </Typography.ListItem>
                        </Typography.List>
                        <Typography.H3>Beyond the Games</Typography.H3>
                        <Typography.P>
                            Community Hub: Connect with fellow gamers, share
                            experiences, and forge friendships within the
                            vibrant Cyber-Treasure community.
                        </Typography.P>
                        <Typography.P>
                            News and Updates: Stay informed about the latest
                            gaming releases, industry news, and exclusive
                            content with our dedicated newsfeed.
                        </Typography.P>
                        <Typography.P>
                            Personalized Experience: Create your profile, track
                            your progress, and build your unique gaming library,
                            all within the app.
                        </Typography.P>
                        <TextTable>
                            <TextTable.Thead>
                                <TextTable.Tr>
                                    <Typography.Th>Feature</Typography.Th>
                                    <Typography.Th>Description</Typography.Th>
                                </TextTable.Tr>
                            </TextTable.Thead>
                            <TextTable.Tbody>
                                <TextTable.Tr>
                                    <Typography.Td>
                                        Vast Game Library
                                    </Typography.Td>
                                    <Typography.Td>
                                        Millions of games across various genres
                                        and platforms
                                    </Typography.Td>
                                </TextTable.Tr>
                                <TextTable.Tr>
                                    <Typography.Td>
                                        Platform Agnostic
                                    </Typography.Td>
                                    <Typography.Td>
                                        Find games for consoles, PC, and mobile
                                        devices
                                    </Typography.Td>
                                </TextTable.Tr>
                                <TextTable.Tr>
                                    <Typography.Td>
                                        Curated Recommendations
                                    </Typography.Td>
                                    <Typography.Td>
                                        Expert picks and user reviews to help
                                        you discover gems
                                    </Typography.Td>
                                </TextTable.Tr>
                                <TextTable.Tr>
                                    <Typography.Td>Community Hub</Typography.Td>
                                    <Typography.Td>
                                        Connect with fellow gamers and build
                                        friendships
                                    </Typography.Td>
                                </TextTable.Tr>
                                <TextTable.Tr>
                                    <Typography.Td>
                                        News and Updates
                                    </Typography.Td>
                                    <Typography.Td>
                                        Stay informed about the latest gaming
                                        news and releases
                                    </Typography.Td>
                                </TextTable.Tr>
                                <TextTable.Tr>
                                    <Typography.Td>
                                        Personalized Experience
                                    </Typography.Td>
                                    <Typography.Td>
                                        Create a profile, track progress, and
                                        build your gaming library
                                    </Typography.Td>
                                </TextTable.Tr>
                            </TextTable.Tbody>
                        </TextTable>
                        <Typography.Small>
                            Embark on your gaming journey today and discover the
                            hidden treasures within Cyber-Treasure!
                        </Typography.Small>
                    </Typography>
                </article>
            </div>
        </main>
    )
}
