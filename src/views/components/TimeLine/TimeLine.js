import React from 'react';
import Dot from '../../components/Dot';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const iconStyle = {
    background: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'initial',
    paddingTop: '5px'
}

const TimeLine = () => (
    <VerticalTimeline
        animate={false}
        layout='1-column'
    >
        <VerticalTimelineElement
            date="just now"
            icon={<Dot color='orangeOutline' />}
            iconStyle={iconStyle}
        >
            <p>
                <span style={{ color: '#30A6FC' }}>Manuel Magnusson</span> has added new file "Documentation"
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            date="2h ago"
            icon={<Dot color='orangeOutline' />}
            iconStyle={iconStyle}
        >
            <p>
                <span style={{ color: '#30A6FC' }}>Katsurou Fenna</span>finished the <span style={{ color: '#30A6FC' }}>Task #14</span>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            date="1d ago"
            icon={<Dot color='greyOutline' />}
            iconStyle={iconStyle}
        >
            <p>
                <span style={{ color: '#30A6FC' }}>Kristaps Harper</span> mentioned you in <span style={{ color: '#30A6FC' }}>Task #9</span>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            date="3d ago"
            icon={<Dot color='greyOutline' />}
            iconStyle={iconStyle}
        >
            <p>
                <span style={{ color: '#30A6FC' }}>Silvijo Noella</span> changed status for <span style={{ color: '#30A6FC' }}>Task #4</span> as <span style={{ color: '#FC9E30' }}>“In review”</span>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            date="5d ago"
            icon={<Dot color='greyOutline' />}
            iconStyle={iconStyle}
        >
            <p>
                <span style={{ color: '#30A6FC' }}>Ezequiel Mirjana</span> finished the <span style={{ color: '#30A6FC' }}>Task #2</span>
            </p>
        </VerticalTimelineElement>
    </VerticalTimeline>
)

export default TimeLine;

