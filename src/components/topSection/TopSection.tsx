import React from "react";
import { ContentContainer1, TopSectionMainContainer, TopImageContainer, TopContainerImage, TopContainerBody, ContentTitle, ContentBodyContainer, ContentP } from "./topSectionStyles";
import ReadMoreButton from "./readMoreButton/ReadMoreButton";
import NewsBoard from "./newsBoard/NewsBoard";

const TopSection = (props:{}) => {
    return(
        <TopSectionMainContainer>

            <ContentContainer1>
                <TopImageContainer />
                <TopContainerBody>
                    <ContentTitle>
                    The Bright Future of Web3.0?
                    </ContentTitle>

                    <ContentBodyContainer>
                        <ContentP>
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                        </ContentP>

                        <ReadMoreButton />
                    </ContentBodyContainer>
                </TopContainerBody>              
            </ContentContainer1>

            <NewsBoard />

        </TopSectionMainContainer>
    );
};

export default TopSection;