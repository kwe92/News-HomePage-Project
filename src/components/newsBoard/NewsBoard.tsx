import React from "react";
import { NewsBoardContainer, NewsBoardTitle, NewsBoardListTile, HorizontalLine
 } from "./NewsBoardStyles";

const NewsBoard = (props:{}) => {
    return (
        <NewsBoardContainer>
            <NewsBoardTitle>
            New
            </NewsBoardTitle>

            <NewsBoardListTile>
                ListTile1
            </NewsBoardListTile>

            <HorizontalLine />

            <NewsBoardListTile>
                ListTile2
            </NewsBoardListTile>

            <HorizontalLine />

            <NewsBoardListTile>
                ListTile3
            </NewsBoardListTile>

        </NewsBoardContainer>
    );
};



export default NewsBoard;