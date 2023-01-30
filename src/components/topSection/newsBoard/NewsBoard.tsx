import React from "react";
import { NewsBoardContainer, NewsBoardTitle, NewsBoardListTile, HorizontalLine, NewsBoardInnerContainer, ListTileTop, ListTileBottom} from "./NewsBoardStyles";

const NewsBoard = (props:{}) => {
    return (
        <NewsBoardContainer>

            <NewsBoardInnerContainer>

            <NewsBoardTitle>
            New
            </NewsBoardTitle>

            <NewsBoardListTile>

                <ListTileTop>
                Hydrogen Vs Electric Cars
                </ListTileTop>

                <ListTileBottom>
                    Will hydrogen fueled cars even catch up to EVs?
                </ListTileBottom>

            </NewsBoardListTile>

            <HorizontalLine />

            <NewsBoardListTile>
                <ListTileTop>
                    The Downsides of AI Artistry
                </ListTileTop>

                <ListTileBottom>
                    What are the possible adverse effects of on-demand AI image generation?
                </ListTileBottom>
            </NewsBoardListTile>

            <HorizontalLine />

            <NewsBoardListTile>

                <ListTileTop>
                    Is VC Funding Drying Up?
                </ListTileTop>

                <ListTileBottom>
                    Private funding  by VC firms is down 50% YOY. We take a look at what that means.
                </ListTileBottom>

            </NewsBoardListTile>

            </NewsBoardInnerContainer>
           

        </NewsBoardContainer>
    );
};



export default NewsBoard;