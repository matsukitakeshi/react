import React, {DragEvent} from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

const Draw: React.FC = () => {

    type Align = {
        "x": number,
        "y": number,
    }

    let aligns = [
        // TODO: default値を作成
        // TODO: backendから取得するようにする
        {
            "x": 100,
            "y": 10,
        },
        {
            "x": 200,
            "y": 10,
        },
        {
            "x": 300,
            "y": 10,
        },
        {
            "x": 400,
            "y": 10,
        },
        {
            "x": 500,
            "y": 10,
        },
        {
            "x": 600,
            "y": 10,
        },
        {
            "x": 700,
            "y": 10,
        },
        {
            "x": 800,
            "y": 10,
        },
        {
            "x": 900,
            "y": 10,
        },
        {
            "x": 1000,
            "y": 10,
        },
        {
            "x": 1100,
            "y": 10,
        },
    ]

    let circles = []

    for (let i = 0; i < 10; i++) {
        circles.push(
            <Circle
                x={aligns[i].x}
                y={aligns[i].y}
                radius={10}
                fill="black"
                draggable
                onDragEnd={(e: DragEvent<HTMLDivElement>) => {
                    aligns[i].x = e.target.attrs.x
                    aligns[i].y = e.target.attrs.y
                }}
                key={i}
            />
        )
    }

    return (
        <div>
            <h2>Draw</h2>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {circles}
                </Layer>
            </Stage>
        </div>
    );
};

export default Draw;
