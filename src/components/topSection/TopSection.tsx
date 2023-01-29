import React from "react";
import { ContentContainer1, ContentContainer2, TopSectionMainContainer } from "./topSectionStyles";

const TopSection = (props:{}) => {
    return(
        <TopSectionMainContainer>

            <ContentContainer1>
                ContentContainer1
            </ContentContainer1>

            <ContentContainer2>
                ContentContainer2
            </ContentContainer2>

        </TopSectionMainContainer>
    );
};

export default TopSection;