import { UserMedia } from '../../imports/api/user-media/user-media';

const GraphemeSplitter = require( '@naytev/grapheme-splitter' );

UserMedia.before.insert(function( userId , doc ){
    if( doc.caption ){
        let title,
            firstParagraph,
            secondParagraph;

        //Parsing emojis and other symbols
        const symbols = [
            '#',
            '⬛',
            '⬜',
            '🔶',
            '🔷',
            '◻',
            '◼'
        ];

        let counter = 0,
            endingCounter = 0,
            distance = 0,
            symbolStartingIndex = 0,
            foundSymbol,
            caption = new GraphemeSplitter().splitGraphemes( doc.caption );

        caption.forEach( ( letter , index ) => {
            if( letter === foundSymbol ){
                if( distance > 1 ){ //ending
                    ++endingCounter;

                    if( counter === endingCounter && index + 1 < caption.length && caption[ index + 1 ] !== foundSymbol ){
                        console.log( caption [symbolStartingIndex ] , index );
                        foundSymbol = null;

                        switch (counter){
                            case 1:
                                title = caption.slice( symbolStartingIndex + counter , index ).join('');
                                break;
                            case 2:
                                firstParagraph = caption.slice( symbolStartingIndex + counter, index - 1 ).join('');
                                break;
                            case 3:
                                secondParagraph = caption.slice( symbolStartingIndex + counter, index - 2 ).join('');
                                break;
                        }
                    }
                }
                else{
                    ++counter;
                }
            }
            else{
                if ( letter in symbols ){ //starting
                    foundSymbol = letter;

                    counter       = 0;
                    endingCounter = 0;
                    distance      = 0;

                    symbolStartingIndex = index;
                }
                else{
                    if( foundSymbol ){
                        ++distance;
                    }
                }
            }
        });
    }
});
