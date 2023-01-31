import React from "react";
import { BottomSectionMainContainer ,ArticleListTile ,ListTileImage , ListTileTop, ListTileMiddle, ListTileBottom, ListTileBodyContainer } from "./BottomSectionStyles";
import { images } from "../../constants/images";

const BottomSection = (props:{}) => {
    return (
        <BottomSectionMainContainer>

            <ArticleListTile>

                <ListTileImage src={images.imageRetroPcs} alt="imageRetroPcs"/>
                <ListTileBodyContainer>
                    <ListTileTop>
                        01
                    </ListTileTop>
                    <ListTileMiddle>
                    Reviving Retro Pcs
                    </ListTileMiddle>

                    <ListTileBottom>
                        What happens when old PCs are given modern upgrades?
                    </ListTileBottom>
                </ListTileBodyContainer>
              
            </ArticleListTile>

            <ArticleListTile>
            <ListTileImage src={images.imageTopLaptops} alt="imageTopLaptops"/>
                <ListTileBodyContainer>
                    <ListTileTop>
                        02
                    </ListTileTop>
                    <ListTileMiddle>
                        Top 10 Laptops of 2022
                    </ListTileMiddle>

                    <ListTileBottom>
                        Our best picks for various needs and budgets.
                    </ListTileBottom>
                </ListTileBodyContainer>
            </ArticleListTile>

            <ArticleListTile>
                <ListTileImage src={images.imageGamingGrowth} alt="imageGamingGrowth"/>

                <ListTileBodyContainer>
                    <ListTileTop>
                        03
                    </ListTileTop>
                    <ListTileMiddle>
                        The Growth of Gaming
                    </ListTileMiddle>

                    <ListTileBottom>
                        How the pandemic sparked fresh opportunities.
                    </ListTileBottom>
                </ListTileBodyContainer>
            </ArticleListTile>

        </BottomSectionMainContainer>
    );
};

export default BottomSection;