import React from 'react';
import { fontSizes } from "../helpers/Constants";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function HomeScreen() {

    let logoStyle = {
        margin: 'auto',
        width: '400px',
        height: 'auto'
    }

    let subheadingStyle = {
        textAlign: 'center',
        fontSize: fontSizes.large,
        paddingTop: '30px',
        paddingBottom: '30px'
    }

    let sectionHeaderStyle = {
        textAlign: 'left',
        fontSize: fontSizes.large,
        fontWeight: 'bold'
    }

    let sectionContentStyle = {
        textAlign: 'left',
        fontSize: fontSizes.medium
    }

    let liStyle = {
        textAlign: 'left',
        fontSize: fontSizes.medium
    }

    let spacer = {
        marginBottom: "30px"
    }

    let handleGetStarted = () => {
        console.log("clicked")
    }

    return(
        <div>
            <div className="sectionStyleWhite">
                <div className="contentContainerStyle">
                    <div className="headerFlexboxStyle">
                        <img style={logoStyle} src="versevs-logo-vector.svg" alt="verse verse logo"/>
                        <h1 style={subheadingStyle}>A collaborative poem writing platform.</h1>
                        <div style={spacer}>
                            <Link to="/browse">
                                <Button variant="dark" onClick={handleGetStarted}>Get Started</Button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/changelog">
                                <Button variant="dark">Change Log and Planned Features</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sectionStyleBlack">
                <div className="contentContainerStyle">
                    <h1 style={sectionHeaderStyle}>What is verseVS?</h1>
                    <p style={sectionContentStyle}>
                    VerseVS is a story telling platform based on poems and collaboration. At our core, we're looking to give an online place for poems to be composed and morphed through the lens of different experiences, perspectives, opinions, and emotions.
                    </p>    
                    <h1 style={sectionHeaderStyle}>How do I use verseVS?</h1>
                    <p style={sectionContentStyle}>
                    By starting a poem, you're opening it up for others (including you) to contribute to it. Make sure you give it a name though! Then you can watch as other users log on and add/edit it and you can also make your own contributions to others' poems.
                    </p>         
                </div>
            </div>

            <div className="sectionStyleWhite">
                <div className="contentContainerStyle">
                    <h1 style={sectionHeaderStyle}>Rules</h1>
                    <ol>
                        <li style={liStyle}>Respect others' work and use your own creative discretion to make only good-mannered contributions to poems.</li>
                        <li style={liStyle}>No swearing or vulgar topics.</li>
                        <li style={liStyle}>Be creative! Try thinking outside the box.</li>
                    </ol>
                </div>
            </div>

            <div className="sectionStyleBlack">
                <div className="contentContainerStyle">
                    <h1 style={sectionHeaderStyle}>FAQ</h1>
                    <p style={sectionContentStyle}><b>
                    What's the difference between starting a poem and contributing to a poem?
                    </b></p>
                    <p style={sectionContentStyle}>
                    Starting a poem makes you the first author of a poem. By contributing to a poem, you're adding onto work others have already started.
                    </p>
                    <p style={sectionContentStyle}><b>
                    What kind of poetry should I write?    
                    </b></p>
                    <p style={sectionContentStyle}>
                    In short, anything goes! The beauty of poetry is the nature to ebb and flow. Start writing and see where it takes you.
                    </p>
                    <p style={sectionContentStyle}><b>
                    What is a pen name?  
                    </b></p>
                    <p style={sectionContentStyle}>
                    A pen name is your pseudonym to use on VerseVS. You can choose whatever nom de plume you would like.
                    </p>
                    <p style={sectionContentStyle}><b>   
                    Is a poem ever finished?
                    </b></p>
                    <p style={sectionContentStyle}>
                    Will the earth ever stop turning? On VerseVS, a poem is never finished. You'll continue to be able to edit the poems with your own interpretation as you help grow and nurture the poem through different stages.
                    </p>
                    <p style={sectionContentStyle}><b>   
                    Help! I want to start a poem but I need some inspiration to start!
                    </b></p>
                    <p style={sectionContentStyle}>
                    This platform is built with collaboration being the core. So you don't know what to write about? No problem! Others have started poems that you can help build on. Feel free to take it in any creative direction.
                    </p>
                </div>
            </div>

            <div className="sectionStyleWhite">
                <div className="contentContainerStyle">
                    <h1 style={sectionHeaderStyle}>Poem Types</h1>
                    <p style={sectionContentStyle}>
                    There are different types of poems that you can follow. They usually dictate rhyme patterns, tempo, syllable length, structure, and more. But rules are meant to be broken, so use your creative discretion to find your own voice. Here's some poem types to get you started:
                    </p>
                    <p style={sectionContentStyle}><b>
                    Acrostic
                    </b></p>
                    <p style={sectionContentStyle}>
                    Acrostic poems spell out a title, word, or message together with every letter of each line. It generally spells out a word about the topic of the poem. You might remember writing acrostics with you the letters in your name.
                    </p>
                    <p style={sectionContentStyle}><b>
                    Ballad
                    </b></p>
                    <p style={sectionContentStyle}>
                    A ballad is a narrative verse that may be poetic or musical and tells a story. It generally follows a pattern of rhymed quatrains. Ballads are composed of four-line stanzas (quatrains) that follow an ABCB rhyme scheme.
                    </p>
                    <p style={sectionContentStyle}><b>
                    Elegy
                    </b></p>
                    <p style={sectionContentStyle}>
                    Similar to how we have eulogies to mourn the dead, elegies are poems that reflect upon loss or death. Themes traditionally include melanchology, loss, and manifestation. Elegies are defined by their subject matter, and don't have to follow any specific form in terms of meter, rhyme, or structure.
                    </p>
                    <p style={sectionContentStyle}><b>
                    Epic
                    </b></p>
                    <p style={sectionContentStyle}>
                    An epic poem is an extensive, narrative work of poetry. These poems typically detail extraordinary feats and adventures of characters.
                    </p>
                    <p style={sectionContentStyle}><b>
                    Free Verse
                    </b></p>
                    <p style={sectionContentStyle}>
                    Last but not least, there's free poetry which lacks a consistent rhyme scheme, metrical pattern, or musical form. It's your opportunity to leave behind any of the rules and compose a poem that's uniquely yours.
                    </p>
                    <p style={sectionContentStyle}><b>
                    Haiku
                    </b></p>
                    <p style={sectionContentStyle}>
                    A haiku is a three-line poetic form originating in Japan. The first line contains 5 syllables, the second line has 7 syllables, and the third line has 5 syllables.
                    </p>
                    <p style={sectionContentStyle}><b>
                    Limerick
                    </b></p>
                    <p style={sectionContentStyle}>
                    Limericks are typically humourous five-line poems which follow a AABBA rhyme scheme. Its sounds are very distinctive as it contains two longer lines, two brief ones, along with a final longer line which (typically) makes a joke.
                    </p>
                    <p style={sectionContentStyle}><b>
                    Sonnet
                    </b></p>
                    <p style={sectionContentStyle}>
                    A sonnet is a 14-line poem written in iambic pentameter typically written on the subject of love. Sonnets usually contain specific rhyme schemes that depend on the design of each sonnet. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;