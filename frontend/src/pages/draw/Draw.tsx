import React, {DragEvent} from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

const Draw: React.FC = () => {

    type Align = {
        "x": number,
        "y": number,
    }

    const HEIGHT = window.innerHeight;
    const WIDTH = window.innerWidth;

    const toPercentX = (x: number) => {
        return Math.floor(x / WIDTH * 100)
    }

    
    const toPercentY = (y: number) => {
        return Math.floor(y / HEIGHT * 100)
    }

    // 縦横それぞれ、100%分の何％かを保存するようにする

    let aligns: Align[] = [
        // TODO: default値を作成
        // TODO: backendから取得するようにする
        {
            "x": 10,
            "y": 65,
        },
        {
            "x": 30,
            "y": 65,
        },
        {
            "x": 34,
            "y": 65,
        },
        {
            "x": 34,
            "y": 73,
        },
        {
            "x": 34,
            "y": 81,
        },
        {
            "x": 34,
            "y": 89,
        },
        {
            "x": 38,
            "y": 65,
        },
        {
            "x": 42,
            "y": 65,
        },
        {
            "x": 50,
            "y": 70,
        },
        {
            "x": 80,
            "y": 65,
        },
        {
            "x": 26,
            "y": 65,
        },
    ]

    let circles = []

    for (let i = 0; i < 11; i++) {
        circles.push(
            <Circle
                x={aligns[i].x * WIDTH / 100}
                y={aligns[i].y * HEIGHT / 100}
                radius={WIDTH / 60}
                fill="black"
                draggable
                onDragMove={(e: DragEvent<HTMLDivElement>) => {
                    writeLines(e.target.attrs)
                }}
                onDragEnd={(e: DragEvent<HTMLDivElement>) => {
                    aligns[i].x = toPercentX(e.target.attrs.x)
                    aligns[i].y = toPercentY(e.target.attrs.y)
                }}
                key={i}
            />
        )
    }

    let sameHeightLines = []
    let sameWidthLines = []

    const writeLines = (attrs) => {
        sameHeightLines = []
        sameWidthLines = []
        aligns.map((align, index) => {
            if (align.x == toPercentX(attrs.x)) {
                sameWidthLines.push(<Line
                    x={0}
                    y={0}
                    points={[attrs.x, 0, attrs.x, attrs.y, attrs.x, HEIGHT]}
                    stroke='black'
                    tension={0.5}
                />)
            }

            if (align.y == toPercentY(attrs.y)) {
                sameHeightLines.push(<Line
                    x={0}
                    y={0}
                    points={[0, attrs.y, attrs.x, attrs.y, WIDTH, attrs.y]}
                    stroke='black'
                    tension={0.5}
                />)
            }
        })
    }


    return (
        <div>
            <h2>Draw</h2>
            <div>
                <div>
                    <Stage width={WIDTH} height={HEIGHT}>
                        <Layer>
                            {circles}
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
                            {sameHeightLines}
                            {sameWidthLines}
                        </Layer>
                    </Stage>
                </div>
            </div>
        </div>
    );
};

export default Draw;
