const GraphemeSplitter = require( '@naytev/grapheme-splitter' );
const _ = require('underscore');

function test( doc ){
    if( doc.caption ){
        let title,
            firstParagraph,
            secondParagraph;

        //Parsing emojis and other symbols
        const symbols = [
            '#',
            '⬛',
            '⬜',
            "🔶",
            "🔶",
            "🔷",
            '◻',
            '◼'
        ];

        let counter = 0,
            endingCounter = 0,
            distance = 0,
            symbolStartingIndex = 0,
            foundSymbol,
            caption = new GraphemeSplitter().splitGraphemes( doc.caption );
        console.log( "count : " , caption.length );
        caption.forEach( ( letter , index ) => {
            console.log(letter);
            if( letter === foundSymbol ){
                console.log('symbol detected : ' , letter );
                if( distance > 1 ){ //ending
                    ++endingCounter;
                    console.log('counter : ' , counter );
                    console.log('endingCounter :' ,  endingCounter);
                    if( counter === endingCounter && index + 1 <= caption.length && caption[ index + 1 ] !== foundSymbol ){
                        console.log( caption [ symbolStartingIndex + counter ] , index );
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
                    else{
                        console.error('failed');
                    }
                }
                else{
                    ++counter;
                }
            }
            else{
                if( foundSymbol ){
                    ++distance;
                }
                else{
                    console.log('lost one');

                    if ( _.contains( symbols , letter ) ){ //starting
                        console.log('found one');
                        foundSymbol = letter;

                        counter       = 1;
                        endingCounter = 0;
                        distance      = 0;

                        symbolStartingIndex = index;
                    }
                }
            }
        });

        console.log('title : ' , title );
        console.log('firstParagraph : ' , firstParagraph );
        console.log('secondParagraph : ' , secondParagraph );
    }



}

test({ caption : " 🔶this is an h1🔶 ##asdsad##  ###asdsad###" });