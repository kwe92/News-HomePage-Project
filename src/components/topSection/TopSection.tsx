import React from "react";
import { images } from "../../constants/images";
import { ContentContainer1, ContentContainer2, TopSectionMainContainer, TopImageContainer, TopContainerImage, TopContainerBody, ContentTitle } from "./topSectionStyles";

const TopSection = (props:{}) => {
    return(
        <TopSectionMainContainer>

            <ContentContainer1>
                <TopImageContainer />
                <TopContainerBody>
                    <ContentTitle>
                    The Bright Future of Web3.0?
                    </ContentTitle>
                </TopContainerBody>              
            </ContentContainer1>

            <ContentContainer2>
                ContentContainer2
            </ContentContainer2>

        </TopSectionMainContainer>
    );
};

export default TopSection;