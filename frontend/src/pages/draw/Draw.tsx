import React, {DragEvent, useState} from 'react';
import { Stage, Layer, Rect, Circle, Line } from 'react-konva';
import { SameHeightLinesState } from 'atoms/draw/SameHeightLinesAtom';
import { SameWidthLinesState } from 'atoms/draw/SameWidthLinesAtom';
import { CirclesState } from 'atoms/draw/CiclesAtom';
import { DefenceState } from 'atoms/draw/DefenceAtom';
import { AssignmentLinesState } from 'atoms/draw/AssignmentLines';
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from 'recoil';

const Draw: React.FC = () => {

    type Align = {
        "x": number,
        "y": number,
    }

    const HEIGHT: number = window.innerHeight;
    const WIDTH: number = window.innerWidth;

    const toPercentX = (x: number) => {
        return Math.floor(x / WIDTH * 100)
    }

    
    const toPercentY = (y: number) => {
        return Math.floor(y / HEIGHT * 100)
    }

    // 縦横それぞれ、100%分の何％かを保存するようにする

    let offenceAligns: Align[] = useRecoilValue(CirclesState)
    let defenceAligns: Align[] = useRecoilValue(DefenceState)

    const setOffenceAlign = useSetRecoilState(CirclesState)
    const setDefenceAlign = useSetRecoilState(DefenceState)

    const sameHeightLines = useRecoilValue(SameHeightLinesState)
    const sameWidthLines = useRecoilValue(SameWidthLinesState)

    const setSameHeightLines = useSetRecoilState(SameHeightLinesState)
    const setSameWidthLines = useSetRecoilState(SameWidthLinesState)

    let offences: Array<object> = []
    let defences: Array<object> = []

    for (let i = 0; i < 11; i++) {
        offences = [
            ...offences, 
            <Circle
                x={offenceAligns[i].x * WIDTH / 100}
                y={offenceAligns[i].y * HEIGHT / 100}
                radius={WIDTH / 60}
                fill="black"
                draggable
                onDragMove={(e: DragEvent<HTMLDivElement>) => {
                    writeLines(e.target.attrs, i)
                }}
                onDragEnd={(e: DragEvent<HTMLDivElement>) => {
                    setOffenceAlign(offenceAligns.map((align, index) => (
                        index === i ?
                        {x: toPercentX(e.target.attrs.x), y: toPercentY(e.target.attrs.y)} :
                        align
                    )))
                    setSameHeightLines([])
                    setSameWidthLines([])
                }}
                key={i}
            />
        ]

        defences = [
            ...defences,
            <Line
                x={defenceAligns[i].x * WIDTH / 100}
                y={defenceAligns[i].y * HEIGHT / 100}
                points={[0, 0, 20, 20, 40, 0]}
                stroke="black"
                draggable
                onDragMove={(e: DragEvent<HTMLDivElement>) => {
                }}
                onDragEnd={(e: DragEvent<HTMLDivElement>) => {
                }}
                strokeWidth={4}
                key={i}
            />
        ]
    }

    const writeLines = (attrs: Align, i: number) => {
        setSameHeightLines("")
        setSameWidthLines("")
        offenceAligns.map((align: Align, index: number) => {
            if (align.x == toPercentX(attrs.x) && i != index) {
                setSameHeightLines(<Line
                    x={0}
                    y={0}
                    points={[attrs.x, 0, attrs.x, attrs.y, attrs.x, HEIGHT]}
                    stroke='red'
                    tension={0.5}
                />)
            }

            if (align.y == toPercentY(attrs.y) && i != index) {
                setSameWidthLines(<Line
                    x={0}
                    y={0}
                    points={[0, attrs.y, attrs.x, attrs.y, WIDTH, attrs.y]}
                    stroke='red'
                    tension={0.5}
                />)
            }
        })
    }


    return (
        <div>
            <h2>Draw</h2>
            <button>アサイン</button>
            <div>
                <div>
                    <Stage width={WIDTH} height={HEIGHT}>
                        <Layer>
                            {offences}
                            {defences}
                            {sameHeightLines}
                            {sameWidthLines}
                            <Rect
                                x={0}
                                y={0}
                                height={HEIGHT}
                                width={WIDTH}
                                stroke="black"
                                strokeWidth={10}
                                fillEnabled={false}
                            />
                            <Line
                                // LOS
                                x={0}
                                y={0}
                                points={[0, HEIGHT * 0.65, 100, HEIGHT * 0.65, WIDTH, HEIGHT * 0.65]}
                                tension={0.5}
                                stroke="black"
                            />
                            <Line
                                // HASH LEFT
                                x={0}
                                y={0}
                                points={[WIDTH / 3, 0, WIDTH / 3, 100, WIDTH / 3, HEIGHT]}
                                tension={0.5}
                                stroke="black"
                            />
                            <Line
                                // HASH RIGHT
                                x={0}
                                y={0}
                                points={[WIDTH / 3 * 2, 0, WIDTH / 3 * 2, 100, WIDTH / 3 * 2, HEIGHT]}
                                tension={0.5}
                                stroke="black"
                            />
                        </Layer>
                    </Stage>
                </div>
            </div>
        </div>
    );
};

export default Draw;
