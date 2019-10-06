import React, { Component } from 'react'
import styles from '../Styles.module.css'
import TitleHeader from '../components/TitleHeader'

export class HeroYear extends Component {
    render() {
        const { content } = this.props
        var backgroundStyle, backgroundImage

        if (content.backgroundImage === undefined || content.backgroundImage.url === undefined || content.backgroundImage.url === "") {
            backgroundImage = null
        } else {
            backgroundImage = `url(${content.backgroundImage.url})`
        }

        backgroundStyle = {
            backgroundAttachment: 'fixed',
            backgroundImage: backgroundImage,
            backgroundPosition: "top center",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
            height: '100vh',
            padding: '0 10%'
        }

        const overlayConfig = content.overlayConfig.split("-")
        var overlayColourStops = []

        for (let i = 1; i < overlayConfig.length; i++) {
            overlayColourStops.push(`rgba(${overlayConfig[i]})`)
        }
        
        const overlayGradient = `linear-gradient(${overlayConfig[0].trim()}deg, ${overlayColourStops.join(',')} )`
        const backgroundStyleBefore = {
            content: "",
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundImage: overlayGradient,
            zIndex: 0
        }

        return (
            <div>
                <div style={backgroundStyle}>
                    <div style={backgroundStyleBefore}></div>
                    <div style={{ flex: '1', height: '100%' }} className={styles.alignCenter}>
                        <TitleHeader
                            title={content.title}
                            subtitle={content.subtitle}
                            color='white'
                            style={{ lineHeight: '1.5', whiteSpace: 'pre-line' }} />
                    </div>
                </div>
            </div>
        )
    }
}

export default HeroYear
